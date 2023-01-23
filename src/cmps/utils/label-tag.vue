<template>
  <span class="label-tag">
    {{ label }}
  </span>
</template>

<script>
export default {
  props: {
    label: String,
  },
}
</script>

<style lang="scss" scoped>
.label-tag {
  height: fit-content;
  padding: 2px 8px;
  font-size: 0.9em;
  border-radius: 4px;
  display: inline-block;
  background-color: var(--tag-bg);
  color: var(--main-dark-opacity);
}
</style>
