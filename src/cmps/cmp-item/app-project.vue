<template>
  <section class="app-project" v-if="data">
    <section class="texts">
      <h3 class="project-title">{{ data.title }}</h3>
      <small class="project-peek">{{ data.peek }}</small>
      <labelTags :labels="data.labels" />
      <p class="project-desc">
        {{ data.desc }}
      </p>
      <a
        class="project-cta"
        title="Coming Soon"
        :style="{ cursor: 'not-allowed' }"
        href="#"
        >READ MORE</a
      >
    </section>
    <section class="project-art">
      <video
        class="project-video"
        muted
        loop
        autoplay
        :src="`/vids/${data.video}.mp4`"></video>
    </section>
  </section>
</template>

<script>
import labelTags from '../utils/label-tags.vue'
export default {
  props: { data: Object },
  components: {
    labelTags,
  },
}
</script>

<style lang="scss" scoped></style>
