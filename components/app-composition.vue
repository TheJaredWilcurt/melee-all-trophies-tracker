<template>
  <div>
    <div>
      <side-bar @viewchanged="viewChanged"></side-bar>
    </div>
    <div>
      <trophy-table></trophy-table>
      <bonus-table></bonus-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppComposition'
  components: {
    'bonus-table': httpVueLoader('components/bonus-table.vue'),
    'trophy-table': httpVueLoader('components/trophy-table.vue')
  },
  data: function () {
    return {
      view: 'trophy'
    };
  },
  methods: {
    viewChanged: function (view) {
      this.view = view;
    }
  }
};
</script>
