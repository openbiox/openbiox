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
      <v-layout text-xs-center wrap justify-center align-center row>
        <v-flex xs12>
          <br>
          <h2>Team members</h2>
        </v-flex>
        <v-flex xs12>
          <v-divider></v-divider>
        </v-flex>
        <v-flex xs12 md4 v-for="member in members" v-bind:key="member.id">
          <a class="memberHref" :href="member.href" target="_blank">
            <v-hover>
              <v-card
                style="min-height:345px;padding:20px"
                slot-scope="{ hover }"
                :class="`elevation-${hover ? 19 : 4}`"
              >
                <div class="about_me_top mainText">
                  <img class="img-circle" :src="member.avater" alt="image" width="140" height="140">
                  <h3>{{ member.name }}</h3>
                  <p style="font-style:italic;color:#555555;">{{ member.degree }}</p>
                  <p>{{ member.description }}</p>
                  <!-- p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p-->
                </div>
              </v-card>
            </v-hover>
          </a>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import members from '@/assets/data/about/members.json'
import imgData from '@/assets/data/about/imgs.json'

export default {
  components: {
    'b-img-card': () => import('@/components/base/card/BaseHoverImgCard')
  },
  data () {
    return {
      members: members,
      imgData: imgData
    }
  }
}
</script>

<style>
div.about_me_top img {
  border-radius: 100px;
}
.mainText {
  font-size: 1.1em;
}
.custom-card-span-text {
  font-size: 1em;
}
.memberHref {
  text-decoration: none;
}
</style>
