<template>
  <div class="skills-wrapper main-container full app-section" id="skills">
    <section class="app-skills">
      <h2 class="section-header">What I bring to the table</h2>
      <div class="skills-list">
        <appSkill v-for="skill in skills" :data="skill" />
      </div>
    </section>
  </div>
</template>

<script>
import appSkill from './cmp-item/app-skill.vue'
export default {
  components: { appSkill },
  data() {
    return {
      skills: [
        {
          type: 'Front-End',
          imgs: ['css', 'html', 'sass', 'js'],
          list: ['HTML5', 'CSS3', 'SCSS/SASS', 'JavaScript ES6'],
        },
        {
          type: 'Frameworks',
          imgs: ['vue', 'react', 'jquery', 'angular'],
          list: [
            'Vue',
            'React',
            'JQuery',
            'Bootstrap',
            'Angular',
            'Google Apps Script',
          ],
        },
        {
          type: 'Back-End',
          imgs: ['node', 'express', 'php', 'mongo'],
          list: ['NodeJS', 'Express', 'MongoDB', 'PHP'],
        },
        {
          type: 'Tools',
          imgs: ['postman', 'figma', 'trello', 'git'],
          list: [
            'Postman',
            'Studio 3T',
            'VS Code',
            'Git',
            'Trello',
            'Microsoft Office',
            'Figma',
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
