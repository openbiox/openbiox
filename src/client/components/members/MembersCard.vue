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
      v-for="member in committeMembers.slice(committeMembersStart,committeMembersEnd)"
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
        v-model="committeMembersPage"
        :length="Math.ceil(this.committeMembers.length / this.committeNumEachPage)"
      ></v-pagination>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['membersData', 'title'],
  data () {
    return {
      committeMembersPage: 1,
      committeNumEachPage: 6,
      committeMembers: []
    }
  },
  mounted () {
    this.getCommitteMembers()
  },
  computed: {
    committeMembersStart () {
      const membersStart = ((this.committeMembersPage - 1) * this.committeNumEachPage).toFixed()
      return (Number(membersStart))
    },
    committeMembersEnd () {
      if (this.committeMembersStart) {
        if ((this.committeMembers.length - this.committeMembersStart) < this.committeNumEachPage) {
          return (this.committeMembers.length)
        }
        return (this.committeMembersStart + this.committeNumEachPage)
      } else {
        return (this.committeNumEachPage)
      }
    }
  },
  methods: {
    getCommitteMembers () {
      for (let i = 0; i < this.membersData.length - 1; i++) {
        let item = this.membersData[i]
        if (item.title.indexOf('committe member') !== -1) {
          this.committeMembers.push(this.membersData[i])
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
