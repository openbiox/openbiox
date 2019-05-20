<template>
  <div>
    <v-container grid-list-xl>
      <v-layout text-xs-center justify-center align-center row>
        <v-flex>
          <h2>openbiox</h2>
          <v-divider></v-divider>
          <br>
        </v-flex>
      </v-layout>
      <b-img-card :img="imgData" />
      <v-members-card :members-data = "membersData" title = "Committee members"/>
      <v-layout text-xs-center wrap justify-center align-center row>
        <v-flex xs12 md12>
          <v-contribution-tb :table = "membersData"/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import membersData from '@/assets/data/about/members.json'
import imgData from '@/assets/data/about/imgs.json'

export default {
  components: {
    'b-img-card': () => import('@/components/base/card/BaseHoverImgCard'),
    'v-members-card': () => import('@/components/members/MembersCard'),
    'v-contribution-tb': () => import('@/components/members/ContributionCard')
  },
  data () {
    return {
      imgData: imgData,
      membersData: membersData
    }
  }
}
</script>
