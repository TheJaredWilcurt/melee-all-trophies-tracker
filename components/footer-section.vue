<template>
  <footer v-if="isJP">
    <p>ソースコードは <a :href="githubLink">GitHub</a> で入手可能</p>
  </footer>
  <footer v-else>
    <p>source code available on</p>
    <a :href="githubLink">GitHub</a>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
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
