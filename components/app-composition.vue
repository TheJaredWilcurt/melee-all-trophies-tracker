<template>
  <div>
    <a href="#" title="Scroll to top" class="go-to-top">⬆️</a>

    <div>
      <side-bar></side-bar>
    </div>

    <div>
      <trophy-table v-show="view === 'trophy'"></trophy-table>
      <bonus-table v-show="view === 'bonus'" :key="33"></bonus-table>
    </div>

    <footer-section></footer-section>
  </div>
</template>

<script>
export default {
  name: 'AppComposition',
  components: {
    'bonus-table': httpVueLoader('./components/bonus-table.vue'),
    'footer-section': httpVueLoader('./components/footer-section.vue'),
    'side-bar': httpVueLoader('./components/side-bar.vue'),
    'trophy-table': httpVueLoader('./components/trophy-table.vue')
  },
  computed: {
    ...Pinia.mapState(store, [
      'view',
    ])
  }
};
</script>
