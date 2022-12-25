<template>
  <div class="project-container app-section" id="projects">
    <section class="app-projects">
      <h2 class="section-header">Some of the things I made</h2>
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
  data() {
    return {
      projects: [
        {
          title: 'Wewix',
          peek: 'Website builder similar to Wix',
          desc: 'Wewix is a web-based application that enables users to create and customize their own professional websites with ease. It offers customizable templates and design elements, along with other features, to help users create unique and engaging websites. The app is user-friendly and accessible to all skill levels, allowing anyone to create a professional-looking website without coding experience.',
          video: 'wewix',
          labels: [
            'Vue',
            'Vuex',
            'NodeJS',
            'MongoDB',
            'Express',
            'SCSS',
            'Figma',
          ],
        },
        {
          title: 'Minesweeper+',
          peek: 'Updated version of the classic minesweeper game',
          desc: 'The game includes helpful features and multiple game modes that add a variety challenges and strategies to the gameplay. As my first major bootcamp project, I developed Minesweeper+ using only vanilla JavaScript, showcasing my understanding of core web technologies and my ability to develop functional applications without relying on pre-existing tools or libraries.',
          video: 'minesweeper',
          labels: ['JavaScript', 'HTML5', 'CSS3'],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
