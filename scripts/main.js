const app = Vue.createApp({
  data: function () {
    return {
      localStorageId: 'meleeAllTrophiesData',
      language: 'en-us',
      filterName: '',
      filterNameJP: '',
      filterGame: '',
      filterGameJP: '',
      filterSmash: null
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
      }
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
    sizeTh: function (size) {
      return Math.round((size / 1903) * 100) + '%';
    }
  },
  computed: {
    dataToSave: function () {
      return JSON.stringify({
        language: this.language
      });
    },
    imageSizes: function () {
      const originalSpriteWidth = 128;
      const originalSpriteHeight = 144;
      const trophiesPerRow = 12;
      const totalSpriteSheetWidth = originalSpriteWidth * trophiesPerRow;
      const reductionRatio = 0.54166666666666667;

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
      let trophies = window.trophies;
      trophies = trophies.filter((trophy) => {
        return (
          trophy.name.toLowerCase().includes(this.filterName.toLowerCase()) &&
          trophy.nameJP.toLowerCase().includes(this.filterNameJP.toLowerCase()) &&
          trophy.game.toLowerCase().includes(this.filterGame.toLowerCase()) &&
          trophy.gameJP.toLowerCase().includes(this.filterGameJP.toLowerCase()) &&
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
    }
  },
  created: function () {
    this.load();
    setTimeout(() => {
      this.scroll();
    }, 350);
  }
}).mount('#app');
