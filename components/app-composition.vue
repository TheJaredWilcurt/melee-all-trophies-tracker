<template>
  <div>
    <a href="#" title="Scroll to top" class="go-to-top">⬆️</a>

    <div>
      <side-bar></side-bar>
    </div>

    <div>
      <trophy-table></trophy-table>
      <bonus-table></bonus-table>
    </div>

    <footer v-if="isJP">
      <p>ソースコードは <a :href="githubLink">GitHub</a> で入手可能</p>
    </footer>
    <footer v-else>
      <p>source code available on</p>
      <a :href="githubLink">GitHub</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AppComposition',
  components: {
    'bonus-table': httpVueLoader('./components/bonus-table.vue'),
    'side-bar': httpVueLoader('./components/side-bar.vue'),
    'trophy-table': httpVueLoader('./components/trophy-table.vue')
  },
  computed: {
    githubLink: function () {
      return 'https://github.com/TheJaredWilcurt/melee-all-trophies-tracker';
    },
    ...Pinia.mapGetters(store, [
      'isJP'
    ])
  }
};
</script>
