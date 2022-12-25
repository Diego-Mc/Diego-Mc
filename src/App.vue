<template>
  <main class="main-container main-website">
    <appHeader class="full" />
    <appHero />
    <appSkills />
    <appProjects />
    <appAbout />
    <appContact />
  </main>
</template>

<script>
import appHeader from './cmps/app-header.vue'
import appHero from './cmps/app-hero.vue'
import appSkills from './cmps/app-skills.vue'
import appProjects from './cmps/app-projects.vue'
import appAbout from './cmps/app-about.vue'
import appContact from './cmps/app-contact.vue'
export default {
  components: {
    appHeader,
    appHero,
    appSkills,
    appProjects,
    appAbout,
    appContact,
  },
}
</script>

<style lang="scss" scoped></style>
