<template>
  <header class="app-header">
    <section class="logo" v-scroll-to="{ el: '#home', offset: -100 }">
      <svg
        width="88"
        height="110"
        class="hover-opacity"
        viewBox="0 0 88 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M44 0H0V110H33V69.1416C33 54.1514 45.3123 42 60.5 42H87.9553C86.9097 18.6279 67.6304 0 44 0ZM88 76H74.5C67.0442 76 61 82.0762 61 89.5713V110H88V76Z"
          fill="currentColor" />
      </svg>

      &nbsp;
      <!-- <h1>Diego Mc</h1> -->
    </section>
    <section class="nav-links">
      <p
        data-nav-link="home"
        v-scroll-to="{ el: '#home', offset: -100 }"
        class="nav-link active hover-opacity">
        {{ $t('nav.home') }}
      </p>
      <p
        data-nav-link="skills"
        v-scroll-to="{ el: '#skills', offset: -100 }"
        class="nav-link hover-opacity">
        {{ $t('nav.skills') }}
      </p>
      <p
        data-nav-link="projects"
        v-scroll-to="'#projects'"
        class="nav-link hover-opacity">
        {{ $t('nav.projects') }}
      </p>
      <p
        data-nav-link="about"
        v-scroll-to="{ el: '#about', offset: -100 }"
        class="nav-link hover-opacity">
        {{ $t('nav.about') }}
      </p>
      <p
        data-nav-link="contact"
        v-scroll-to="'#contact'"
        class="nav-link hover-opacity">
        {{ $t('nav.contact') }}
      </p>
    </section>
    <BurgerIcon class="burger" v-model="isBurgerOpen" />
    <section class="burger-menu" :class="{ open: isBurgerOpen }">
      <p
        @click="isBurgerOpen = false"
        data-nav-link="home"
        v-scroll-to="{ el: '#home', offset: -1000 }"
        class="nav-link active">
        {{ $t('nav.home') }}
      </p>
      <p
        @click="isBurgerOpen = false"
        data-nav-link="skills"
        v-scroll-to="'#skills'"
        class="nav-link">
        {{ $t('nav.skills') }}
      </p>
      <p
        @click="isBurgerOpen = false"
        data-nav-link="projects"
        v-scroll-to="{ el: '#projects', offset: 100 }"
        class="nav-link">
        {{ $t('nav.projects') }}
      </p>
      <p
        @click="isBurgerOpen = false"
        data-nav-link="about"
        v-scroll-to="'#about'"
        class="nav-link">
        {{ $t('nav.about') }}
      </p>
      <p
        @click="isBurgerOpen = false"
        data-nav-link="contact"
        v-scroll-to="'#contact'"
        class="nav-link">
        {{ $t('nav.contact') }}
      </p>
    </section>
    <section class="cta">
      <!-- <a
        class="hero-cta btn"
        href="../../src/assets/files/resume.pdf"
        target="_blank">
        Resume
      </a> -->
      <article class="translate-btn icon-btn" @click="handleTranslate">
        <span class="material-symbols-outlined hover-opacity"> translate </span>
      </article>
      <article
        :class="{ 'dark-on': isDarkMode }"
        class="color-mode-btn icon-btn"
        @click="handleColorChange">
        <span class="material-symbols-outlined light hover-opacity">
          light_mode
        </span>
        <span class="material-symbols-outlined dark hover-opacity">
          dark_mode
        </span>
      </article>
    </section>
  </header>
</template>

<script>
import BurgerIcon from './utils/burger-icon.vue'
import { appService } from '../services/app.service'

export default {
  data() {
    return { isBurgerOpen: false, isDarkMode: false }
  },
  mounted() {
    appService.addScrollListener()
  },
  methods: {
    handleColorChange() {
      this.isDarkMode = !this.isDarkMode
      if (this.isDarkMode) document.getElementById('app').classList.add('dark')
      else document.getElementById('app').classList.remove('dark')
    },
    handleTranslate() {
      const isRtl = this.$i18n.locale === 'he'
      this.$i18n.locale = isRtl ? 'en' : 'he'

      if (isRtl) document.getElementById('app').classList.remove('rtl')
      else document.getElementById('app').classList.add('rtl')
    },
  },
  components: { BurgerIcon },
}
</script>

<style lang="scss" scoped></style>
