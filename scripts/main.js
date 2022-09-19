window.store = Pinia.defineStore('store', {
  state: function () {
    return {
      bgAnimate: true,
      dictionary: window.dictionary,
      language: 'en',
      view: 'trophy'
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
    }
  },
  getters: {
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
    },
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
    }
  },
  computed: {
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
