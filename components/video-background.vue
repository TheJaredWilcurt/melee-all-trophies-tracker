<template>
  <video
    v-if="bgAnimate"
    :class="type + '-video'"
    :poster="'images/' + type + '.jpg'"
    autoplay
    loop
    muted
  >
    <source
      :src="'images/' + type + '.mp4'"
      type="video/mp4"
    >
  </video>
  <img
    v-else
    :src="'images/' + type + '.jpg'"
    :alt="alt[type]"
    :class="type + '-video'"
    :style="style"
  />
</template>

<script>
export default {
  name: 'VideoSideBar',
  props: {
    type: {
      type: String,
      default: undefined
    }
  },
  computed: {
    alt: function () {
      const alts = {
        main: 'Melee Final Destination background art',
        sidebar: 'Melee menu background art'
      };
      return alts[this.type];
    },
    bgAnimate: function () {
      return store().bgAnimate;
    },
    style: function () {
      if (this.type === 'main' && !this.bgAnimate) {
        return 'opacity: 0.1';
      }
    }
  }
};
</script>
