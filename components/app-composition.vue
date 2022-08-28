<template>
  <div class="wrapper">
    <a href="#" title="Scroll to top" class="go-to-top">⬆️</a>

    <video-background type="sidebar"></video-background>
    <side-bar></side-bar>

    <video-background type="main"></video-background>
    <div class="view">
      <trophy-grid v-show="view === 'grid'"></trophy-grid>
      <trophy-table v-show="view === 'trophy'"></trophy-table>
      <bonus-table v-show="view === 'bonus'" :key="33"></bonus-table>
      <footer-section></footer-section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppComposition',
  components: {
    'bonus-table': httpVueLoader('./components/bonus-table.vue'),
    'footer-section': httpVueLoader('./components/footer-section.vue'),
    'side-bar': httpVueLoader('./components/side-bar.vue'),
    'trophy-grid': httpVueLoader('./components/trophy-grid.vue'),
    'trophy-table': httpVueLoader('./components/trophy-table.vue'),
    'video-background': httpVueLoader('./components/video-background.vue')
  },
  computed: {
    ...Pinia.mapState(store, [
      'view',
    ])
  }
};
</script>
