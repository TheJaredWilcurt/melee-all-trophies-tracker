<template>
  <div class="wrapper">
    <a href="#" title="Scroll to top" class="go-to-top">⬆️</a>

    <video-background type="sidebar"></video-background>
    <side-bar></side-bar>

    <video-background type="main"></video-background>
    <div class="view">
      <template v-if="loggedIn">
        <trophy-grid v-show="view === 'grid'"></trophy-grid>
        <trophy-table v-show="view === 'trophy'"></trophy-table>
        <bonus-table v-show="view === 'bonus'"></bonus-table>
      </template>
      <session-login v-else></session-login>
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
    'session-login': httpVueLoader('./components/session-login.vue'),
    'side-bar': httpVueLoader('./components/side-bar.vue'),
    'trophy-grid': httpVueLoader('./components/trophy-grid.vue'),
    'trophy-table': httpVueLoader('./components/trophy-table.vue'),
    'video-background': httpVueLoader('./components/video-background.vue')
  },
  computed: {
    sessionCreated: function () {
      return false;
    },
    ...Pinia.mapState(store, [
      'loggedIn',
      'view'
    ])
  }
};
</script>
