const dictionary = {
  en: {
    all: 'All',
    allTrophies: 'All Trophies',
    aZ: 'A-Z',
    false: 'false',
    game: 'Game',
    language: 'Language: ',
    name: 'Name',
    normal: 'Normal',
    smash: 'Smash',
    sortBy: 'Sort by: ',
    speedrunTracker: 'Speedrun Tracker',
    superSmashBrosMelee: 'Super Smash Bros. Melee',
    trophy: 'Trophy',
    trophySize: 'Trophy Size: ',
    true: 'true'
  },
  jp: {
    all: '全て',
    allTrophies: '全てフィギュア',
    aZ: 'あいうえお',
    false: '偽',
    game: 'タイトル',
    language: '言語： ',
    name: '名前',
    normal: '通常',
    smash: 'スマッシュ',
    sortBy: '並び替え： ',
    speedrunTracker: 'スピードラントラッカー',
    superSmashBrosMelee: '大乱闘スマッシュブラザーズＤＸ',
    trophy: 'フィギュア',
    trophySize: 'フィギュアサイズ： ',
    true: '真'
  }
};

const app = Vue.createApp({
  data: function () {
    return {
      localStorageId: 'meleeAllTrophiesData',
      language: 'en',
      sortBy: 'normal',
      headers: [
        {
          class: 'center'
        },
        {
          class: 'center'
        },
        {
          dictionaryKey: 'trophy',
          class: 'center'
        },
        {
          dictionaryKey: 'name',
          class: ''
        },
        {
          dictionaryKey: 'smash',
          class: 'center'
        }
      ],
      floatingHeaders: new Array(9).fill('100%'),
      filterName: '',
      filterNameJP: '',
      filterSmash: null,
      trophies: null,
      bonuses: null,
      trophiesAcquired: null,
      bonusesAcquired: null,
      reductionRatio: 5416,
      filterBonusName: '',
      filterBonusNameJP: ''
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
          this.language = 'en';
        } else if (data.language) {
          this.language = data.language;
        }
        if (data.sortBy) {
          this.sortBy = data.sortBy;
        }
        if (data.reductionRatio) {
          this.reductionRatio = data.reductionRatio;
        }
        if (!data.trophiesAcquired || data?.trophiesAcquired?.[0]?.id === 0) {
          this.generateTrohpyAcquisitionMap();
        } else {
          this.trophiesAcquired = data.trophiesAcquired;
        }
        if (!data.bonusesAcquired) {
          this.generateBonusAcquisitionMap();
        } else {
          this.bonusesAcquired = data.bonusesAcquired;
        }
      } else {
        this.generateTrohpyAcquisitionMap();
        this.generateBonusAcquisitionMap();
      }
    },
    generateAcquisitionMap: function (items, bool) {
      const maxID = items.length;
      const acquired = {};
      for (let id = 1; id < (maxID + 1); id++) {
        acquired[id] = bool || false;
      }
      return acquired;
    },
    generateTrohpyAcquisitionMap: function (bool) {
      const trophies = this.trophies || window.generateTrophyData();
      this.trophiesAcquired = this.generateAcquisitionMap(trophies, bool);
    },
    generateBonusAcquisitionMap: function (bool) {
      const bonuses = this.bonuses || window.generateBonusData();
      this.bonusesAcquired = this.generateAcquisitionMap(bonuses, bool);
    },
    styling: function (trophyId) {
      const { width, height, size, trophiesPerRow } = this.imageSizes;
      const xOffset = width * (trophyId % trophiesPerRow) * -1;
      const yOffset = height * Math.floor(trophyId / trophiesPerRow) * -1;
      return [
        'width: ' + width + 'px',
        'height: ' + height + 'px',
        'background-size: ' + size + 'px',
        'background-position: ' + xOffset + 'px ' + yOffset + 'px'
      ].join(';');
    },
    scroll: function () {
      const id = window.location.hash.replace('#', '');
      if (id) {
        document.getElementById(id).scrollIntoView();
      }
    },
    setSizeTh: function () {
      const ths = Array.from(document.querySelectorAll('thead th'));
      const table = document.getElementById('trophy-list');
      const tableSizes = table && table.getBoundingClientRect();
      const tableWidth = tableSizes && (tableSizes.right - tableSizes.left);
      if (tableWidth) {
        ths.forEach((th, index) => {
          const sizes = th.getBoundingClientRect();
          const width = sizes.right - sizes.left;
          this.floatingHeaders[index] = Math.round((width / tableWidth) * 100) + '%';
        });
      }
    },
    toggleTrohpyAcquired: function (id) {
      this.trophiesAcquired[id] = !this.trophiesAcquired[id];
    },
    toggleBonusAcquired: function (id) {
      this.bonusesAcquired[id] = !this.bonusesAcquired[id];
    },
    selectAll: function () {
      this.generateTrohpyAcquisitionMap(true);
    },
    selectNone: function () {
      this.generateTrohpyAcquisitionMap(false);
    }
  },
  computed: {
    dictionary: function () {
      return dictionary;
    },
    dataToSave: function () {
      return JSON.stringify({
        language: this.language,
        reductionRatio: this.reductionRatio,
        sortBy: this.sortBy,
        trophiesAcquired: this.trophiesAcquired,
        bonusesAcquired: this.bonusesAcquired
      });
    },
    isJP: function () {
      return this.language === 'jp';
    },
    imageSizes: function () {
      const originalSpriteWidth = 128;
      const originalSpriteHeight = 144;
      const trophiesPerRow = 12;
      const totalSpriteSheetWidth = originalSpriteWidth * trophiesPerRow;
      // const reductionRatio = 0.54166666666666667;
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
      let trophies = this.trophies;
      trophies = trophies
        .filter((trophy) => {
          let name = trophy.name.toLowerCase().includes(this.filterName.toLowerCase());
          if (this.isJP) {
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
    },
    filteredBonuses: function () {
      let bonuses = this.bonuses;
      bonuses = bonuses
        .filter((bonus) => {
          let name = bonus.bonus || bonus.bonusEN;
          console.log(name.toLowerCase());
          name = name.toLowerCase().includes(this.filterBonusName.toLowerCase());
          if (this.isJP) {
            name = bonus.bonusJP.toLowerCase().includes(this.filterBonusNameJP.toLowerCase());
          }
          return name;
        });
      return bonuses;
    }
  },
  watch: {
    dataToSave: function () {
      this.save();
    },
    language: function () {
      setTimeout(() => {
        this.setSizeTh();
      }, 100);
    },
    reductionRatio: function () {
      this.setSizeTh();
    }
  },
  created: function () {
    this.load();
    this.trophies = window.generateTrophyData();
    this.bonuses = window.generateBonusData()
    setTimeout(() => {
      this.scroll();
      this.setSizeTh();
    }, 350);
  }
}).mount('#app');
