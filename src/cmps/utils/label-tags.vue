<template>
  <div class="label-tags">
    <labelTag v-for="label in labels" :label="label" />
  </div>
</template>

<script>
import labelTag from './label-tag.vue'
export default {
  props: {
    labels: Array,
  },
  components: {
    labelTag,
  },
}
</script>

<style lang="scss" scoped>
.label-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
</style>
