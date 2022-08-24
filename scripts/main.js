window.store = Pinia.defineStore('store', {
  state: function () {
    return {
      dictionary: window.dictionary,
      language: 'en',
      view: 'trophy'
    };
  },
  actions: {
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
      trophiesAcquired: null
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
