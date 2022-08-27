<template>
  <div class="sidebar">
    <div class="controls">
      <h1 :class="{ jp: isJP }">"{{ dictionary[language].allTrophies }}"</h1>
      <h2 :class="{ jp: isJP }">{{ dictionary[language].speedrunTracker }}</h2>

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

      <div>
        <label>
          <input type="checkbox" v-model="store.bgAnimate">
          {{ dictionary[language].animateBackgrounds }}
        </label>
      </div>

      <div class="form-control">
        <button @click="selectAll">Select All</button>
        <button @click="selectNone">Select None</button>
      </div>

      <div class="form-control">
        <div class="language-controls">
          <button
            class="flag-language-container jp"
            :class="{ active: isJP }"
            :title="dictionary.jp.language + '日本語'"
            @click="setLanguage('jp')"
          >
            <div class="flag-container jp">
              <svg class="flag jp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
                <rect fill="#FFF" height="600" width="900"/>
                <circle fill="#BC002D" cx="450" cy="300" r="180"/>
              </svg>
            </div>
            <div class="language-name jp">日本語</div>
          </button>
          <button
            class="flag-language-container en"
            :class="{ active: isEN }"
            :title="dictionary.en.language + ' English'"
            @click="setLanguage('en')"
          >
            <div class="flag-container en">
              <svg class="flag en" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7410 3900">
                <rect width="7410" height="3900" fill="#B22234"/>
                <path d="M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0" stroke="#FFF" stroke-width="300"/>
                <rect width="2964" height="2100" fill="#3C3B6E"/>
                <g fill="#FFF">
                  <g id="s18">
                    <g id="s9">
                      <g id="s5">
                        <g id="s4">
                          <path id="s" d="M247,90 317.534230,307.082039 132.873218,172.917961H361.126782L176.465770,307.082039z"/>
                          <use xlink:href="#s" y="420"/>
                          <use xlink:href="#s" y="840"/>
                          <use xlink:href="#s" y="1260"/>
                        </g>
                        <use xlink:href="#s" y="1680"/>
                      </g>
                      <use xlink:href="#s4" x="247" y="210"/>
                    </g>
                    <use xlink:href="#s9" x="494"/>
                  </g>
                  <use xlink:href="#s18" x="988"/>
                  <use xlink:href="#s9" x="1976"/>
                  <use xlink:href="#s5" x="2470"/>
                </g>
              </svg>
            </div>
            <div class="language-name en">English</div>
          </button>
        </div>
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
    isEN: function () {
      return this.language === 'en';
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
