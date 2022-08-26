<template>
  <div class="grid-container">
    <div
      v-for="trophy in filteredTrophies"
      :key="trophy.id"
      :class="{ acquired: trophyStore.trophiesAcquired[trophy.id] }"
      class="grid-item center"
      :style="{ width: gridSize + 'px' }"
      @click.stop="trophyStore.toggleTrohpyAcquiredById(trophy.id)"
    >
      <div
        class="sprite"
        :style="styling(trophy.imageIndex)"
      ></div>
      <div
        class="grid-name"
        :class="{ tiny: reductionRatio < 4010 }"
      >
        <template v-if="isJP">{{ trophy.nameJP }}</template>
        <template v-else>{{ trophy.name }}</template>
      </div>
      <span v-if="trophy.smash" class="smash-mini">SMASH</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrophyGrid',
  methods: {
    styling: function (trophyId) {
      return this.trophyStore.spriteStyles(trophyId);
    }
  },
  computed: {
    trophyStore: function () {
      return trophyStore();
    },
    ...Pinia.mapState(trophyStore, [
      'reductionRatio',
      'gridSize'
    ]),
    ...Pinia.mapGetters(store, [
      'isJP',
      'view'
    ]),
    ...Pinia.mapGetters(trophyStore, [
      'filteredTrophies'
    ])
  },
  watch: {
    view: function () {
      let ratio = this.reductionRatio;
      ratio = Math.max(2500, ratio);
      trophyStore().setReductionRatio(ratio);
    }
  }
};
</script>
