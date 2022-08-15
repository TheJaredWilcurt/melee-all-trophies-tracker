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
          class: 'center'
        },
        {
          name: 'Name',
          class: ''
        },
        {
          name: 'Name (JP)',
          class: ''
        },
        {
          name: 'Smash',
          class: 'center'
        },
        {
          name: 'Normal',
          class: 'center'
        },
        {
          name: 'Game',
          class: 'center'
        },
        {
          name: 'A-Z',
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
        this.language = data.language;
        if (!data.trophiesAcquired) {
          this.generateTrohpyAcquisitionMap();
        } else {
          this.trophiesAcquired = data.trophiesAcquired;
        }
      } else {
        this.generateTrohpyAcquisitionMap();
      }
    },
    generateTrohpyAcquisitionMap: function () {
      const maxID = 294;
      const trophiesAcquired = {};
      for (let id = 0; id < (maxID + 1); id++) {
        trophiesAcquired[id] = false;
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
    }
  },
  computed: {
    dataToSave: function () {
      return JSON.stringify({
        language: this.language,
        trophiesAcquired: this.trophiesAcquired
      });
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
      trophies = trophies.filter((trophy) => {
        return (
          trophy.name.toLowerCase().includes(this.filterName.toLowerCase()) &&
          trophy.nameJP.toLowerCase().includes(this.filterNameJP.toLowerCase()) &&
          (
            this.filterSmash === null ||
            trophy.smash === this.filterSmash
          )
        );
      });
      return trophies
    }
  },
  watch: {
    dataToSave: function () {
      this.save();
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
