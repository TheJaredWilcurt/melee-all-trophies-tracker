const dictionary = {
  en: {
    allTrophies: 'All Trophies',
    aZ: 'A-Z',
    game: 'Game',
    language: 'Language: ',
    name: 'Name',
    normal: 'Normal',
    smash: 'Smash',
    sortBy: 'Sort by: ',
    speedrunTracker: 'Speedrun Tracker',
    superSmashBrosMelee: 'Super Smash Bros. Melee',
    trophy: 'Trophy',
    trophySize: 'Trohpy Size: '
  },
  jp: {
    allTrophies: '全てフィギュア',
    aZ: 'あいうえお',
    game: 'タイトル',
    language: '言語： ',
    name: '名前',
    normal: '通常',
    smash: 'スマッシュ',
    sortBy: '並び替え： ',
    speedrunTracker: 'スピードラントラッカー',
    superSmashBrosMelee: '大乱闘スマッシュブラザーズＤＸ',
    trophy: 'フィギュア',
    trophySize: 'フィギュアサイズ： '
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
        },
        {
          dictionaryKey: 'normal',
          class: 'center'
        },
        {
          dictionaryKey: 'game',
          class: 'center'
        },
        {
          dictionaryKey: 'aZ',
          class: 'center'
        },
      ],
      floatingHeaders: new Array(9).fill('100%'),
      filterName: '',
      filterNameJP: '',
      filterSmash: null,
      trophies: null,
      trophiesAcquired: null,
      reductionRatio: 5416
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
        if (data.language) {
          this.language = data.language;
        }
        if (data.reductionRatio) {
          this.reductionRatio = data.reductionRatio;
        }
        if (!data.trophiesAcquired) {
          this.generateTrohpyAcquisitionMap();
        } else {
          this.trophiesAcquired = data.trophiesAcquired;
        }
      } else {
        this.generateTrohpyAcquisitionMap();
      }
    },
    generateTrohpyAcquisitionMap: function (bool) {
      const maxID = 294;
      const trophiesAcquired = {};
      for (let id = 0; id < (maxID + 1); id++) {
        trophiesAcquired[id] = bool || false;
      }
      this.trophiesAcquired = trophiesAcquired;
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
    selectAll: function () {
      this.generateTrohpyAcquisitionMap(true);
    },
    selectNone: function () {
      this.generateTrohpyAcquisitionMap(false);
    },
    nextIs: function (id) {
      const validAZSorts = this.trophies
        .map(function (trophy) {
          return trophy.sortBy.aZ;
        })
        .filter(function (game) {
          return game < 499;
        });
      const highestAZSort = Math.max(...validAZSorts);
      const newSortValue = highestAZSort + 1
      if (this.trophies[id].sortBy.aZ !== highestAZSort)
      this.trophies[id].sortBy.aZ = newSortValue;
    }
  },
  computed: {
    dictionary: function () {
      return dictionary;
    },
    trophyTextBox: function () {
      return 'window.generateTrophyData = function () {\n' +
        '  return [\n' +
        JSON.stringify(this.trophies, null, 2)
          .split('\'').join('\\\'')
          .split('"').join('\'')
          .split('\n')
          .map(function (line) {
            if (line === '[') {
              return '';
            }
            if (!line.includes(':')) {
              return '  ' + line;
            }
            let [key, value] = line.split(':');
            key = key.replace('\'', '');
            key = key.replace('\'', '');
            return '  ' + key + ':' + value;
          })
          .filter(Boolean)
          .join('\n') +
        ';\n};\n';
    },
    dataToSave: function () {
      return JSON.stringify({
        language: this.language,
        trophiesAcquired: this.trophiesAcquired,
        reductionRatio: this.reductionRatio
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
        .sort(function (a, b) {
          let A = a.sortBy.aZ;
          let B = b.sortBy.aZ;
          return A > B ? 1 : -1;
        });
      return trophies;
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
    setTimeout(() => {
      this.scroll();
      this.setSizeTh();
    }, 350);
  }
}).mount('#app');
