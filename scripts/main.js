const app = Vue.createApp({
  data: function () {
    return {
      localStorageId: 'meleeAllTrophiesData',
      language: 'en-us',
      headers: [
        {
          name: '',
          class: 'center'
        },
        {
          name: '',
          class: 'center'
        },
        {
          name: 'Trophy',
          nameJP: 'フィギュア',
          class: 'center'
        },
        {
          name: 'Name',
          nameJP: '名前',
          class: ''
        },
        {
          name: 'Smash',
          nameJP: 'スマッシュ',
          class: 'center'
        },
        {
          name: 'Normal',
          nameJP: '通常',
          class: 'center'
        },
        {
          name: 'Game',
          nameJP: 'タイトル',
          class: 'center'
        },
        {
          name: 'A-Z',
          nameJP: 'あいうえお',
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
      const validGameSorts = this.trophies
        .map(function (trophy) {
          return trophy.sortBy.game;
        })
        .filter(function (game) {
          return game < 499;
        });
      const highestGameSort = Math.max(...validGameSorts);
      this.trophies[id].sortBy.game = highestGameSort + 1;
    }
  },
  computed: {
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
          let A = a.sortBy.game;
          let B = b.sortBy.game;
          if (A === 500 || B === 500) {
            console.log({ A, B, C: A - B });
          }
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
