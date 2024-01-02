const localStorageId = 'meleeAllTrophiesData';

// Websocket keys
const appId = 'VAH15Ghi76jHV752kjID6B3QqZDDw08mC2oWygLb';
const jsKey = 'mrzVvSeeaFIN2GEPnPkRr18WykoV7fsh00nEhgAs';
const parseApiAddress = 'https://parseapi.back4app.com/';
const webSocketAddress = 'ws://meleetrophytracker.b4a.io';

// Websocket init
Parse.initialize(appId, jsKey);
Parse.serverURL = parseApiAddress;
Parse.liveQueryServerURL = webSocketAddress;

window.store = Pinia.defineStore('store', {
  state: function () {
    return {
      bgAnimate: true,
      dictionary: window.dictionary,
      language: 'en',
      loggedIn: false,
      view: 'trophy',
      sessions: []
    };
  },
  actions: {
    setBgAnimate: function (value) {
      this.bgAnimate = !!value;
    },
    setLanguage: function (value) {
      this.language = value;
    },
    setView: function (value) {
      this.view = value;
    },
    // Compression
    compressData: function (data) {
      let arr = Object.values(data);
      arr = arr.map(function (value) {
        return Number(value);
      });
      let str = arr.join('');
      return window.LZString.compress(str);
    },
    decompressData: function (data) {
      let str = window.LZString.decompress(data);
      let arr = str.split('');
      arr = arr.map(function (value) {
        return !!parseInt(value);
      });
      let obj = {};
      for (let i = 0; i < arr.length; i++) {
        const ID = i + 1;
        obj[ID] = arr[i];
      }
      Object.fromEntries(Object.entries(obj).sort());
      return obj;
    },
    // Websockets
    wsCreate: async function (data) {
      let record = new Parse.Object('acquired');
      data
      record.set('acquiredValues', { t: 'yes', b: 'indeed' });
      await record.save();
      // response === {
      //   _objCount: 0
      //   className: "acquired"
      //   id: "BsfVJcfb2O"
      // }
      const response = await record.save();
      const session = {
        id: response.id,
        date: new Date(),
        data: {
          t: this.compressData(window.generateAcquisitionMap(window.generateTrophyData())),
          b: this.compressData(window.generateAcquisitionMap(window.generateBonusData()))
        }
      };
      this.sessions.push(session);
    },
    wsSubscribe: async function () {
      console.log('Starting app');
      let query = new Parse.Query('acquired');
      try {
        let subscription = await query.subscribe();
        subscription.on('open', function () {
          console.log('Connection open');
        });
        subscription.on('create', function (obj) {
          console.log('Object created', obj.get('acquiredValues'));
        });
        subscription.on('update', function (obj) {
          console.log('Object updated', obj.get('acquiredValues'));
        });
        subscription.on('enter', function (obj) {
          console.log('Object entered', obj.get('acquiredValues'));
        });
        subscription.on('leave', function (obj) {
          console.log('Object left', obj.get('acquiredValues'));
        });
        subscription.on('delete', function (obj) {
          console.log('Object deleted', obj.get('acquiredValues'));
        });
      } catch (err) {
        console.log('Error', err);
      }
    },
    wsSave: async function () {
      const id = 'DjlhvAw0Ai';

      let query = new Parse.Query('acquired');
      query.equalTo('objectId', id);
      const record = await query.first();
      record.set('acquiredValues', { t: 'okay', b: 'cool' });
      const response = await record.save();
      console.log(response);
    }
  },
  getters: {
    dataToSave: function (state) {
      return JSON.stringify({
        bgAnimate: state.bgAnimate,
        language: state.language,
        reductionRatio: trophyStore().reductionRatio,
        sortBy: trophyStore().sortBy,
        trophiesAcquired: trophyStore().trophiesAcquired,
        bonusesAcquired: bonusStore().bonusesAcquired,
        view: state.view
      });
    },
    compressedData: function () {
      return {
        t: this.compressData(trophyStore().trophiesAcquired),
        b: this.compressData(bonusStore().bonusesAcquired)
      };
    },
    decompressedData: function () {
      return {
        trophiesAcquired: this.decompressData(this.compressedData.t),
        bonusesAcquired: this.decompressData(this.compressedData.b)
      };
    },
    isJP: (state) => {
      return state.language === 'jp';
    }
  }
});
window.trophyStore = Pinia.defineStore('trophyStore', {
  state: function () {
    return {
      reductionRatio: 5416,
      sortBy: 'normal',
      trophies: null,
      trophiesAcquired: null,
      gridSize: 100,
      filterSmash: null,
      filterName: '',
      filterNameJP: ''
    };
  },
  actions: {
    setReductionRatio: function (value) {
      this.reductionRatio = value;
    },
    setSortBy: function (value) {
      this.sortBy = value;
    },
    setTrophies: function (value) {
      this.trophies = value;
    },
    setTrophiesAcquired: function (value) {
      this.trophiesAcquired = value;
    },
    toggleTrohpyAcquiredById: function (id) {
      this.trophiesAcquired[id] = !this.trophiesAcquired[id];
    },
    generateTrohpyAcquisitionMap: function (bool) {
      const trophies = this.trophies || window.generateTrophyData();
      const acquisitionMap = window.generateAcquisitionMap(trophies, bool);
      this.setTrophiesAcquired(acquisitionMap);
    },
    spriteStyles: function (trophyId) {
      const { width, height, size, trophiesPerRow } = this.imageSizes;
      const xOffset = width * (trophyId % trophiesPerRow) * -1;
      const yOffset = height * Math.floor(trophyId / trophiesPerRow) * -1;
      this.gridSize = width;
      return [
        'width: ' + width + 'px',
        'height: ' + height + 'px',
        'background-size: ' + size + 'px',
        'background-position: ' + xOffset + 'px ' + yOffset + 'px'
      ].join(';');
    }
  },
  getters: {
    imageSizes: function () {
      const originalSpriteWidth = 128;
      const originalSpriteHeight = 144;
      const trophiesPerRow = 12;
      const totalSpriteSheetWidth = originalSpriteWidth * trophiesPerRow;
      const reductionRatio = this.reductionRatio / 10000;

      const width = originalSpriteWidth * reductionRatio;
      const height = originalSpriteHeight * reductionRatio;
      const size = totalSpriteSheetWidth * reductionRatio;

      return {
        width,
        height,
        size,
        trophiesPerRow
      };
    },
    filteredTrophies: function () {
      let trophies = this.trophies || [];
      trophies = trophies
        .filter((trophy) => {
          let name = trophy.name.toLowerCase().includes(this.filterName.toLowerCase());
          if (store().isJP) {
            name = trophy.nameJP.toLowerCase().includes(this.filterNameJP.toLowerCase());
          }
          const smash = (
            this.filterSmash === null ||
            trophy.smash === this.filterSmash
          );
          return name && smash;
        })
        .sort((a, b) => {
          let A = a.sortBy[this.sortBy];
          let B = b.sortBy[this.sortBy];
          return A > B ? 1 : -1;
        });
      return trophies;
    }
  }
});
window.bonusStore = Pinia.defineStore('bonusStore', {
  state: function () {
    return {
      bonuses: null,
      bonusesAcquired: null
    };
  },
  actions: {
    setBonuses: function (value) {
      this.bonuses = value;
    },
    setBonusesAcquired: function (value) {
      this.bonusesAcquired = value;
    },
    toggleBonusAcquiredById: function (id) {
      this.bonusesAcquired[id] = !this.bonusesAcquired[id];
    },
    generateBonusAcquisitionMap: function (bool) {
      const bonuses = this.bonuses || window.generateBonusData();
      const acquisitionMap = window.generateAcquisitionMap(bonuses, bool);
      this.setBonusesAcquired(acquisitionMap);
    }
  }
});

const app = Vue.createApp({
  components: {
    'app-composition': httpVueLoader('./components/app-composition.vue')
  },
  data: function () {
    return {
      localStorageId: 'meleeAllTrophiesData'
    };
  },
  methods: {
    save: function () {
      const id = this.localStorageId;
      const data = this.dataToSave;
      window.localStorage.setItem(id, data);
    },
    load: function () {
      let data = window.localStorage.getItem(this.localStorageId);
      data = JSON.parse(data);
      if (data) {
        if (typeof(data.bgAnimate) === 'boolean') {
          store().setBgAnimate(data.bgAnimate);
        }
        if (data.language === 'en-us') {
          store().setLanguage('en');
        } else if (data.language) {
          store().setLanguage(data.language);
        }
        if (data.sortBy) {
          trophyStore().setSortBy(data.sortBy);
        }
        if (data.reductionRatio) {
          trophyStore().setReductionRatio(data.reductionRatio);
        }
        if (!data.trophiesAcquired || data?.trophiesAcquired?.[0]?.id === 0) {
          trophyStore().generateTrohpyAcquisitionMap();
        } else {
          trophyStore().setTrophiesAcquired(data.trophiesAcquired);
        }
        if (!data.bonusesAcquired) {
          bonusStore().generateBonusAcquisitionMap();
        } else {
          bonusStore().setBonusesAcquired(data.bonusesAcquired);
        }
        if (data.view) {
          store().setView(data.view);
        }
      } else {
        trophyStore().generateTrohpyAcquisitionMap();
        bonusStore().generateBonusAcquisitionMap();
      }
    },
    scroll: async function () {
      const id = window.location.hash.replace('#', '');
      if (id) {
        if (id.startsWith('t')) {
          store().setView('trophy');
        } else if (id.startsWith('b')) {
          store().setView('bonus');
        }
        setTimeout(function () {
          document.getElementById(id)?.scrollIntoView();
        }, 350);
      }
    }
  },
  computed: {
    dataToSave: function () {
      return JSON.stringify({
        bgAnimate: store().bgAnimate,
        language: store().language,
        reductionRatio: trophyStore().reductionRatio,
        sortBy: trophyStore().sortBy,
        trophiesAcquired: trophyStore().trophiesAcquired,
        bonusesAcquired: bonusStore().bonusesAcquired,
        view: store().view
      });
    }
  },
  watch: {
    dataToSave: function () {
      this.save();
    }
  },
  created: function () {
    this.load();
    this.scroll();
  }
})
  .use(Pinia.createPinia())
  .mount('#app');
