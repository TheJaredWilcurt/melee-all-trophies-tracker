<template>
  <div>
    <div class="controls">
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

      <div class="form-control">
        <label>
          <strong>{{ dictionary[language].trophySize }}</strong>
          <input type="range" v-model.number="trophyStore.reductionRatio" min="1" max="10000" />
          {{ reductionRatio / 100 }}%
        </label>
      </div>

      <div class="form-control">
        <label>
          <strong>{{ dictionary[language].sortBy }}</strong>
          <select v-model="trophyStore.sortBy">
            <option value="normal">{{ dictionary[language].normal }}</option>
            <option value="game">{{ dictionary[language].game }}</option>
            <option value="aZ">{{ dictionary[language].aZ }} (US)</option>
            <option value="aZjp">{{ dictionary[language].aZ }} (JP)</option>
          </select>
        </label>
      </div>

      <div class="form-control">
        <label>
          <strong>Currently Selected: </strong>
          <textarea readonly v-text="JSON.stringify(trophiesAcquired)"></textarea>
        </label>
      </div>

      <div>
        <button @click="selectAll">Select All</button>
        <button @click="selectNone">Select None</button>
      </div>
    </div>

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
    <h1>"{{ dictionary[language].allTrophies }}"</h1>
    <h2>{{ dictionary[language].speedrunTracker }}</h2>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data: function () {
    return {
    };
  },
  methods: {
    selectAll: function () {
      trophyStore().generateTrohpyAcquisitionMap(true);
    },
    selectNone: function () {
      trophyStore().generateTrohpyAcquisitionMap(false);
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
    ...Pinia.mapState(store, [
      'dictionary',
      'language'
    ]),
    ...Pinia.mapState(trophyStore, [
      'reductionRatio',
      'sortBy',
      'trophiesAcquired'
    ]),
    ...Pinia.mapGetters(store, [
      'isJP'
    ])
  }
};
</script>
