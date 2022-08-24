<template>
  <div class="sidebar">
    <div class="controls">
      <h1>"{{ dictionary[language].allTrophies }}"</h1>
      <h2>{{ dictionary[language].speedrunTracker }}</h2>

      <div>
        <button @click="store.setView('trophy')">Trophy</button>
        <button @click="store.setView('bonus')">Bonus</button>
      </div>

      <div v-if="isTrophyView" class="form-control">
        <label>
          <strong>{{ dictionary[language].trophySize }}</strong>
          <input type="range" v-model.number="trophyStore.reductionRatio" min="1" max="10000" />
          {{ reductionRatio / 100 }}%
        </label>
      </div>

      <div
        v-if="isTrophyView"
        class="sort-buttons-container"
        :class="{ jp: isJP }"
        :title="dictionary[language].sortBy"
      >
        <sort-button
          v-for="(sortBy, index) in sortBys"
          :index="index"
          :length="sortBys.length"
          :name="dictionary[language][sortBy]"
          :active="trophyStore.sortBy === sortBy"
          @clicked="trophyStore.setSortBy(sortBy)"
        ></sort-button>
      </div>

      <div>
        <button @click="selectAll">Select All</button>
        <button @click="selectNone">Select None</button>
      </div>

      <div class="form-control">
        <label><strong>{{ dictionary[language].language }}</strong></label>
        <span
          v-text="'🇺🇸'"
          class="cursor flag"
          :class="{ selected: language === 'en' }"
          title="EN-US"
          @click="setLanguage('en')"
        ></span>
        <span
          v-text="'🇯🇵'"
          class="cursor flag"
          :class="{ selected: isJP }"
          title="JP"
          @click="setLanguage('jp')"
        ></span>
      </div>
    </div>

    <div class="logo-container">
      <img
        v-if="isJP"
        src="images/dx-logo.png"
        class="logo-dx"
        :alt="dictionary.jp.superSmashBrosMelee"
      />
      <img
        v-else
        src="images/melee-logo.png"
        class="logo"
        :alt="dictionary.en.superSmashBrosMelee"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  components: {
    'sort-button': httpVueLoader('./components/sort-button.vue'),
  },
  data: function () {
    return {
      sortBys: [
        'normal',
        'game',
        'aZ',
        'aZjp'
      ]
    };
  },
  methods: {
    selectAll: function () {
      if (this.isTrophyView) {
        trophyStore().generateTrohpyAcquisitionMap(true);
      } else {
        bonusStore().generateBonusAcquisitionMap(true);
      }
    },
    selectNone: function () {
      if (this.isTrophyView) {
        trophyStore().generateTrohpyAcquisitionMap(false);
      } else {
        bonusStore().generateBonusAcquisitionMap(false);
      }
    },
    ...Pinia.mapActions(store, [
      'setLanguage'
    ])
  },
  computed: {
    store: function () {
      return store();
    },
    trophyStore: function () {
      return trophyStore();
    },
    isTrophyView: function () {
      return this.view === 'trophy';
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
    ])
  }
};
</script>
