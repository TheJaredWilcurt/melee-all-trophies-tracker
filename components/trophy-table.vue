<template>
  <table id="trophy-list">
    <thead>
      <tr>
        <th
          v-for="header in headers"
          :class="header.class"
        >
          <template v-if="header.dictionaryKey">
            {{ dictionary[language][header.dictionaryKey] }}
          </template>
        </th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <th
          v-for="(header, headerIndex) in headers"
          :class="header.class"
          :width="floatingHeaders[headerIndex]"
        >
          <template v-if="header.dictionaryKey">
            {{ dictionary[language][header.dictionaryKey] }}
          </template>
        </th>
      </tr>
    </tfoot>
    <tbody>
      <tr>
        <th><!-- link --></th>
        <th><!-- checkbox --></th>
        <th><!-- trophy image --></th>
        <th v-if="isJP"><input v-model="filterNameJP"></th>
        <th v-else><input v-model="filterName"></th>
        <th class="center">
          <select v-model="filterSmash">
            <option :value="null">{{ dictionary[language].all }}</option>
            <option :value="true">{{ dictionary[language].true }}</option>
            <option :value="false">{{ dictionary[language].false }}</option>
          </select>
        </th>
      </tr>
      <transition-group>
        <tr
          v-for="(trophy, trophyIndex) in filteredTrophies"
          :key="trophy.id"
          :class="{ acquired: trophiesAcquired[trophy.id] }"
          :id="'t' + trophy.id"
          @click.stop="trophyStore.toggleTrohpyAcquiredById(trophy.id)"
        >
          <td
            class="center"
            @click.stop
          >
            <a
              class="trophy-link"
              :class="{ compact: reductionRatio < 2104 }"
              :href="'#t' + trophy.id"
              :title="'ID: ' + trophy.id"
            >
              <link-icon></link-icon>
            </a>
          </td>
          <td class="center"><input
            v-model="trophiesAcquired[trophy.id]"
            type="checkbox"
            class="trophy-checkbox"
            :class="{ compact: reductionRatio < 2104 }"
          /></td>
          <td class="center"><div
            class="sprite"
            :style="styling(trophy.imageIndex)"
          ></div></td>
          <td v-if="isJP">{{ trophy.nameJP }}</td>
          <td v-else>{{ trophy.name }}</td>
          <td class="center"><span v-if="trophy.smash" class="smash-pill">SMASH</span></td>
        </tr>
      </transition-group>
    </tbody>
  </table>
</template>

<script>
const headers = [
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
];

export default {
  name: 'TrophyTable',
  components: {
    'link-icon': httpVueLoader('./components/link-icon.vue')
  },
  data: function () {
    return {
      headers,
      floatingHeaders: new Array(headers.length).fill('100%'),
      filterName: '',
      filterNameJP: '',
      filterSmash: null,
    };
  },
  methods: {
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
    setSizeTh: function () {
      const ths = Array.from(document.querySelectorAll('#trophy-list thead th'));
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
    }
  },
  computed: {
    trophyStore: function () {
      return trophyStore();
    },
    filteredTrophies: function () {
      let trophies = trophyStore().trophies;
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
    ...Pinia.mapState(store, [
      'dictionary',
      'language',
      'view'
    ]),
    ...Pinia.mapState(trophyStore, [
      'reductionRatio',
      'sortBy',
      'trophiesAcquired'
    ]),
    ...Pinia.mapGetters(store, [
      'isJP'
    ])
  },
  watch: {
    language: function () {
      setTimeout(() => {
        this.setSizeTh();
      }, 100);
    },
    reductionRatio: function () {
      this.setSizeTh();
    },
    view: function () {
      setTimeout(() => {
        this.setSizeTh();
      }, 100);
    }
  },
  created: function () {
    trophyStore().setTrophies(window.generateTrophyData());
    setTimeout(() => {
      this.setSizeTh();
    }, 350);
  }
};
</script>
