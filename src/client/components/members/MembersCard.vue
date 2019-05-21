<template>
  <v-layout text-xs-center wrap justify-center align-center row>
    <v-flex xs12>
      <br>
      <h2>{{ title }}</h2>
    </v-flex>
    <v-flex xs12>
      <v-divider></v-divider>
    </v-flex>
    <v-flex
      xs12
      md4
      v-for="member in members.slice(membersStart,membersEnd)"
      v-bind:key="member.id"
    >
      <a class="memberHref" v-if="member" :href="member.href" target="_blank">
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
              <p>{{ member.title }}</p>
              <!-- p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p-->
            </div>
          </v-card>
        </v-hover>
      </a>
    </v-flex>
    <br>
    <v-flex xs12 md12>
      <v-pagination
        v-model="membersPage"
        :length="Math.ceil(this.members.length / this.numEachPage)"
      ></v-pagination>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['membersData', 'title', 'membersTitleKey'],
  data () {
    return {
      membersPage: 1,
      numEachPage: 6,
      members: []
    }
  },
  mounted () {
    this.getmembers()
  },
  computed: {
    membersStart () {
      const membersStart = ((this.membersPage - 1) * this.numEachPage).toFixed()
      return (Number(membersStart))
    },
    membersEnd () {
      if (this.membersStart) {
        if ((this.members.length - this.membersStart) < this.numEachPage) {
          return (this.members.length)
        }
        return (this.membersStart + this.numEachPage)
      } else {
        return (this.numEachPage)
      }
    }
  },
  methods: {
    getmembers () {
      for (let i = 0; i < this.membersData.length - 1; i++) {
        let item = this.membersData[i]
        if (item.title.indexOf(this.membersTitleKey) !== -1) {
          this.members.push(this.membersData[i])
        }
      }
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
