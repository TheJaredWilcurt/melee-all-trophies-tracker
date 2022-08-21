<template>
  <div>
    <div>
      <side-bar></side-bar>
    </div>
    <div>
      <trophy-table></trophy-table>
      <bonus-table></bonus-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppComposition',
  components: {
    'bonus-table': httpVueLoader('./components/bonus-table.vue'),
    'side-bar': httpVueLoader('./components/side-bar.vue'),
    'trophy-table': httpVueLoader('./components/trophy-table.vue')
  }
};
</script>
