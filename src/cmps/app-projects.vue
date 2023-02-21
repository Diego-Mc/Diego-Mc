<template>
  <div class="project-container app-section" id="projects">
    <section class="app-projects">
      <h2 class="section-header">{{ $t('projects.header') }}</h2>
      <div class="projects-list">
        <appProject v-for="project in projects" :data="project" />
      </div>
    </section>
  </div>
</template>

<script>
import appProject from './cmp-item/app-project.vue'
export default {
  components: {
    appProject,
  },
  computed: {
    projects() {
      return [
        {
          title: this.$t('projects.saderti.title'),
          peek: this.$t('projects.saderti.peek'),
          desc: this.$t('projects.saderti.desc'),
          github: 'https://github.com/Diego-Mc/Saderti-Work-Planner',
          url: 'https://www.saderti.com',
          video: 'saderti',
          labels: [
            'React',
            'TypeScript',
            'Redux',
            'RTK Query',
            'NodeJS',
            'MongoDB',
            'Mongoose',
            'Express',
            'SCSS',
            'Figma',
          ],
        },
        {
          title: 'Wewix',
          peek: this.$t('projects.wewix.peek'),
          desc: this.$t('projects.wewix.desc'),
          github: 'https://github.com/Diego-Mc/wewix',
          url: 'https://wewix.onrender.com/',
          video: 'wewix',
          labels: [
            'Vue',
            'Vuex',
            'NodeJS',
            'MongoDB',
            'Express',
            'Socket.IO',
            'SCSS',
            'Figma',
          ],
        },
        {
          title: 'Twitter Clone',
          peek: this.$t('projects.twitter.peek'),
          desc: this.$t('projects.twitter.desc'),
          github: 'https://github.com/Diego-Mc/Twitter-Clone',
          url: 'https://twitter-u4zy.onrender.com/',
          video: 'twitter',
          labels: [
            'React',
            'TypeScript',
            'Redux',
            'RTK Query',
            'NodeJS',
            'MongoDB',
            'Mongoose',
            'Express',
            'Socket.IO',
            'SCSS',
          ],
        },

        // {
        //   title: 'Defined',
        //   peek: this.$t('projects.defined.peek'),
        //   desc: this.$t('projects.defined.desc'),
        //   github: 'https://github.com/Diego-Mc/Defined',
        //   url: '#',
        //   video: 'defined',
        //   labels: ['React', 'Redux', 'NodeJS', 'MongoDB', 'Express', 'SCSS'],
        // },
        {
          title: 'Minesweeper+',
          peek: this.$t('projects.minesweeper.peek'),
          desc: this.$t('projects.minesweeper.desc'),
          github: 'https://github.com/Diego-Mc/Minesweeper-plus',
          url: 'https://diego-mc.github.io/Minesweeper-plus/',
          video: 'minesweeper',
          labels: ['JavaScript', 'HTML5', 'CSS3'],
        },
      ]
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
