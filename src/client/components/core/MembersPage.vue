<template>
  <div>
    <v-container grid-list-xl>
      <v-breadcrumbs :items="navItems" divider=">"></v-breadcrumbs>

      <v-layout text-xs-center justify-center align-center row>
        <v-flex>
          <h2>openbiox</h2>
          <v-divider></v-divider>
          <br>
        </v-flex>
      </v-layout>
      <b-img-card :img="imgData"/>
      <v-members-card
        :members-data="membersData"
        title="Core developer"
        members-title-key="core developer"
      />
      <v-layout text-xs-center wrap justify-center align-center row>
        <v-flex xs12 md12>
          <v-contribution-tb :table="membersData"/>
        </v-flex>
        <v-flex xs12 md12>
          <v-members-window class="elevation-4"/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import membersData from '@/assets/data/members/members.json'
import imgData from '@/assets/data/members/imgs.json'

export default {
  components: {
    'b-img-card': () => import('@/components/base/card/BaseHoverImgCard'),
    'v-members-card': () => import('@/components/members/MembersCard'),
    'v-members-window': () => import('@/components/members/MembersWindow'),
    'v-contribution-tb': () => import('@/components/members/ContributionCard')
  },
  data () {
    return {
      imgData: imgData,
      membersData: membersData,
      navItems: [
        {
          text: 'Home',
          disabled: false,
          href: '/'
        },
        {
          text: 'Members',
          disabled: true,
          href: '/members'
        }
      ]
    }
  }
}
</script>
