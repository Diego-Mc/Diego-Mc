<template>
  <header class="app-header">
    <section class="logo" v-scroll-to="{ el: '#home', offset: -100 }">
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.2305 36C17.5224 36 20.863 34.4412 23.2523 31.3235C25.6417 28.2059 26.8363 23.7941 26.8363 18.0882C26.8363 12.3824 25.6417 7.94118 23.2523 4.76471C20.863 1.58824 17.5224 0 13.2305 0H9.16358C8.44059 0 7.85449 0.586101 7.85449 1.30909V34.6909C7.85449 35.4139 8.44059 36 9.16358 36H13.2305Z"
          fill="#03325E" />
        <rect width="7" height="36" fill="#03325E" />
        <rect x="28" y="28" width="8" height="8" rx="4" fill="#03325E" />
      </svg>

      &nbsp;
      <!-- <h1>Diego Mc</h1> -->
    </section>
    <section class="nav-links">
      <p
        data-nav-link="home"
        v-scroll-to="{ el: '#home', offset: -100 }"
        class="nav-link active">
        Home
      </p>
      <p
        data-nav-link="skills"
        v-scroll-to="{ el: '#skills', offset: -100 }"
        class="nav-link">
        Skills
      </p>
      <p data-nav-link="projects" v-scroll-to="'#projects'" class="nav-link">
        Projects
      </p>
      <p
        data-nav-link="about"
        v-scroll-to="{ el: '#about', offset: -100 }"
        class="nav-link">
        About
      </p>
      <p data-nav-link="contact" v-scroll-to="'#contact'" class="nav-link">
        Contact
      </p>
    </section>
    <BurgerIcon class="burger" @isOpen="isBurgerOpen = $event" />
    <section class="burger-menu" :class="{ open: isBurgerOpen }">
      <p
        data-nav-link="home"
        v-scroll-to="{ el: '#home', offset: -1000 }"
        class="nav-link active">
        Home
      </p>
      <p data-nav-link="skills" v-scroll-to="'#skills'" class="nav-link">
        Skills
      </p>
      <p
        data-nav-link="projects"
        v-scroll-to="{ el: '#projects', offset: 100 }"
        class="nav-link">
        Projects
      </p>
      <p data-nav-link="about" v-scroll-to="'#about'" class="nav-link">About</p>
      <p data-nav-link="contact" v-scroll-to="'#contact'" class="nav-link">
        Contact
      </p>
    </section>
    <section class="cta">
      <a
        class="hero-cta btn"
        href="../../src/assets/files/resume.pdf"
        target="_blank">
        Resume
      </a>
    </section>
  </header>
</template>

<script>
import BurgerIcon from './utils/burger-icon.vue'
import { appService } from '../services/app.service'

export default {
  data() {
    return { isBurgerOpen: false }
  },
  mounted() {
    appService.addScrollListener()
  },
  components: { BurgerIcon },
}
</script>

<style lang="scss" scoped></style>
