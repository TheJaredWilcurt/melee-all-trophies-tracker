window.store = Pinia.defineStore('store', {
  state: function () {
    return {
      dictionary: window.dictionary,
      language: 'en'
    };
  },
  actions: {
    setLanguage: function (value) {
      this.language = value;
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
  },
  getters: {
  }
});

const app = Vue.createApp({
  components: {
    'app-composition': httpVueLoader('./components/app-composition.vue')
  },
  data: function () {
    return {
      localStorageId: 'meleeAllTrophiesData',
      floatingHeaders: new Array(9).fill('100%'),
      bonuses: null,
      bonusesAcquired: null,
      filterBonusName: '',
      filterBonusNameJP: '',
      filterScore: '',
      filterDescription: '',
      filterDescriptionJP: '',
      filterDescriptionJPEN: '',
      filterNotes: ''
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
          this.generateBonusAcquisitionMap();
        } else {
          this.bonusesAcquired = data.bonusesAcquired;
        }
      } else {
        trophyStore().generateTrohpyAcquisitionMap();
        this.generateBonusAcquisitionMap();
      }
    },
    generateBonusAcquisitionMap: function (bool) {
      const bonuses = this.bonuses || window.generateBonusData();
      const acquisitionMap = window.generateAcquisitionMap(bonuses, bool);
      this.bonusesAcquired = acquisitionMap;
    },
    scroll: function () {
      const id = window.location.hash.replace('#', '');
      if (id) {
        document.getElementById(id).scrollIntoView();
      }
    },
    toggleBonusAcquired: function (id) {
      this.bonusesAcquired[id] = !this.bonusesAcquired[id];
    }
  },
  computed: {
    dataToSave: function () {
      return JSON.stringify({
        language: store().language,
        reductionRatio: trophyStore().reductionRatio,
        sortBy: trophyStore().sortBy,
        trophiesAcquired: trophyStore().trophiesAcquired,
        bonusesAcquired: this.bonusesAcquired
      });
    },
    filteredBonuses: function () {
      let bonuses = this.bonuses;
      bonuses = bonuses
        .filter((bonus) => {
          let name = (bonus.bonus || bonus.bonusEN).toLowerCase().includes(this.filterBonusName.toLowerCase());
          let nameJP = bonus.bonusJP.toLowerCase().includes(this.filterBonusNameJP.toLowerCase());
          let score = String(bonus.score).toLowerCase().includes(String(this.filterScore).toLowerCase());
          let description = bonus.description.toLowerCase().includes(this.filterDescription.toLowerCase());
          let descriptionJP = bonus.descriptionJP.toLowerCase().includes(this.filterDescriptionJP.toLowerCase());
          let descriptionJPEN = bonus.descriptionJPEN.toLowerCase().includes(this.filterDescriptionJPEN.toLowerCase());
          let notes = bonus.notes.toLowerCase().includes(this.filterNotes.toLowerCase());

          return (
            name &&
            nameJP &&
            score &&
            description &&
            descriptionJP &&
            descriptionJPEN &&
            notes
          );
        });
      return bonuses;
    },
    ...Pinia.mapState(store, [
      'dictionary',
      'language'
    ]),
    ...Pinia.mapGetters(store, [
      'isJP'
    ])
  },
  watch: {
    dataToSave: function () {
      this.save();
    }
  },
  created: function () {
    this.load();
    this.bonuses = window.generateBonusData()
    setTimeout(() => {
      this.scroll();
    }, 350);
  }
})
  .use(Pinia.createPinia())
  .mount('#app');
