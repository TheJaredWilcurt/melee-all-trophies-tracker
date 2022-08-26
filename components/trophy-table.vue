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
      floatingHeaders: new Array(headers.length).fill('100%')
    };
  },
  methods: {
    styling: function (trophyId) {
      return this.trophyStore.spriteStyles(trophyId);
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
    ...Pinia.mapState(store, [
      'dictionary',
      'language',
      'view'
    ]),
    ...Pinia.mapState(trophyStore, [
      'reductionRatio',
      'trophiesAcquired'
    ]),
    ...Pinia.mapGetters(store, [
      'isJP'
    ]),
    ...Pinia.mapGetters(trophyStore, [
      'filteredTrophies'
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
