<template>
  <button
    :class="{ active }"
    class="sort-button"
    :style="'z-index: ' + (length - index)"
    @click="$emit('clicked')"
  >
    <span class="sort-button-inner">
      {{ name }}
    </span>
  </button>
</template>
<script>
export default {
  name: 'SortButton',
  props: {
    index: {
      type: Number,
      default: 0
    },
    length: {
      type: Number,
      default: 4
    },
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
