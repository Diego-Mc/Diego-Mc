<template>
  <section class="app-skill" v-if="data">
    <section class="skill-imgs">
      <component v-for="img in data.imgs" :is="img" />
    </section>
    <section class="texts">
      <h4>{{ data.type }}</h4>
      <ul>
        <li v-for="item in data.list">{{ item }}</li>
      </ul>
    </section>
  </section>
</template>

<script>
import css from '../icons/css.vue'
import html from '../icons/html.vue'
import sass from '../icons/sass.vue'
import js from '../icons/js.vue'
import vue from '../icons/vue.vue'
import react from '../icons/react.vue'
import jquery from '../icons/jquery.vue'
import bootstrap from '../icons/bootstrap.vue'
import express from '../icons/express.vue'
import angular from '../icons/angular.vue'
import mongo from '../icons/mongo.vue'
import php from '../icons/php.vue'
import node from '../icons/node.vue'
import postman from '../icons/postman.vue'
import figma from '../icons/figma.vue'
import trello from '../icons/trello.vue'
import git from '../icons/git.vue'
export default {
  props: { data: Object },
  components: {
    css,
    html,
    sass,
    js,
    vue,
    react,
    jquery,
    bootstrap,
    angular,
    mongo,
    php,
    express,
    node,
    postman,
    figma,
    trello,
    git,
  },
}
</script>

<style lang="scss" scoped></style>
