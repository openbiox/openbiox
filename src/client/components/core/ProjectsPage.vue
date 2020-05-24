<template>
  <div>
    <v-item-group>
      <v-container grid-list-lg>
        <v-breadcrumbs :items="navItems" divider=">"></v-breadcrumbs>

        <v-project-card title="openbiox projects (annual)" :items="annualProjects"/>
        <br>
        <v-project-card title="openbiox projects (free)" :items="freeProjects"/>
      </v-container>
    </v-item-group>
  </div>
</template>

<script>
import projectsData from '@/assets/data/projects/projects.json'
export default {
  components: {
    'v-project-card': () => import('@/components/projects/ProjectItemsCard.vue')
  },
  data () {
    return {
      projectsData: projectsData,
      navItems: [
        {
          text: 'Home',
          disabled: false,
          href: '/'
        },
        {
          text: 'Projects',
          disabled: true,
          href: '/projects'
        }
      ]
    }
  },
  computed: {
    annualProjects () {
      let final = []
      for (let i = 0; i < this.projectsData.length; i++) {
        if (this.projectsData[i].isAnnual) {
          final.push(this.projectsData[i])
        }
      }
      return final
    },
    freeProjects () {
      let final = []
      for (let i = 0; i < this.projectsData.length; i++) {
        if (!this.projectsData[i].isAnnual) {
          final.push(this.projectsData[i])
        }
      }
      return final
    }
  }
}
</script>
