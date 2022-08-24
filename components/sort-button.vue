<template>
  <span :class="{ active }" class="sort-button" @click="$emit('clicked')">
    <span class="sort-button-inner">
      {{ name }}
    </span>
  </span>
</template>
<script>
export default {
  name: 'SortButton',
  props: {
    name: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  }
};
</script>
