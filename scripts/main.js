const app = Vue.createApp({
  methods: {
    styling: function (trophyId) {
      const width = 128;
      const height = 144;
      const trophiesPerRow = 12;

      const xOffset = width * (trophyId % trophiesPerRow) * -1 ;
      const yOffset = height * Math.floor(trophyId / trophiesPerRow) * -1 ;

      return [
        'width: ' + width + 'px',
        'height: ' + height + 'px',
      	'background-position: ' + xOffset + 'px ' + yOffset + 'px'
      ].join(';');
    }
  }
}).mount('#app');
