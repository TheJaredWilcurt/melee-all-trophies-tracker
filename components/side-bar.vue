<template>
  <div class="sidebar">
    <div class="controls">
      <h1>"{{ dictionary[language].allTrophies }}"</h1>
      <h2>{{ dictionary[language].speedrunTracker }}</h2>

      <div>
        <button
          v-text="'Trophy Table'"
          :class="{ active: view === 'trophy' }"
          @click="store.setView('trophy')"
        ></button>
        <button
          v-text="'Trophy Grid'"
          :class="{ active: view === 'grid' }"
          @click="store.setView('grid')"
        ></button>
        <button
          v-text="'Bonus'"
          :class="{ active: view === 'bonus' }"
          @click="store.setView('bonus')"
        ></button>
      </div>

      <div v-if="isTrophyView" class="form-control">
        <label>
          <strong>{{ dictionary[language].trophySize }}</strong>
          <input
            type="range"
            v-model.number="trophyStore.reductionRatio"
            :min="view === 'trophy' ? '1' : '2500'"
            max="10000"
          />
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

      <div v-if="isTrophyView" class="form-control">
        <label>
          <strong>{{ dictionary[language].nameLabel }}</strong>
          <input v-if="isJP" v-model="trophyStore.filterNameJP">
          <input v-else v-model="trophyStore.filterName">
        </label>
      </div>

      <div v-if="isTrophyView" class="form-control">
        <label>
          <strong>{{ dictionary[language].smashLabel }}</strong>
          <select v-model="trophyStore.filterSmash">
            <option :value="null">{{ dictionary[language].all }}</option>
            <option :value="true">{{ dictionary[language].true }}</option>
            <option :value="false">{{ dictionary[language].false }}</option>
          </select>
        </label>
      </div>

      <div class="form-control">
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
      return ['trophy', 'grid'].includes(this.view);
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
