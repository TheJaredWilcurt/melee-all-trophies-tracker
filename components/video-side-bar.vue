<template>
  <video
    v-if="bgAnimate"
    class="sidebar-video"
    autoplay
    loop
    muted
    poster="images/sidebar.jpg"
  >
    <source
      src="images/sidebar.mp4"
      type="video/mp4"
    >
  </video>
  <img
    v-else
    src="images/sidebar.jpg"
    alt="Melee menu background art"
    class="sidebar-video"
  />
</template>

<script>
export default {
  name: 'VideoSideBar',
  computed: {
    bgAnimate: function () {
      return store().bgAnimate;
    }
  }
};
</script>
