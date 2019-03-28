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
      <v-layout text-xs-center wrap justify-center align-center row>
        <v-flex xs12>
          <v-tabs
            v-model="aboutActive"
            color="blue lighten-2"
            dark
            slider-color="yellow"
            class="elevation-4"
          >
            <v-tab
              ripple
              text-xs-center
              v-for="(item, key) in aboutTabsContents"
              :key="key"
            >{{item.tabName}}</v-tab>
            <v-tab-item
              v-for="(item, key) in aboutTabsContents"
              :key="key"
              scroll-target
              style="max-height: 1400px"
              class="scroll-y"
            >
              <v-card flat>
                <b-markdown
                  class="markdown-body mainText text-xs-justify"
                  v-if="item.tabText != null"
                  :text="item.tabText"
                ></b-markdown>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-flex>
        <v-flex xs12>
          <br>
          <h2>Team members and all contributors to openbiox</h2>
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
import articlesAbout from '@/assets/data/about/article/meta.json'
import '@/assets/css/markdown.css'

export default {
  components: {
    'b-markdown': () => import('@/components/base/markdown/BaseMarkdown')
  },
  created () {
    for (var i = 0; i < this.aboutTabsContents.length; i++) {
      this.getFirstTabs(i)
    }
    for (var j = 0; j < this.members.length; j++) {
      try {
        this.members[j].avater = require('@/assets/img/members/' +
          members[j].avater)
      } catch (err) {
        return 0
      }
    }
  },
  data () {
    return {
      aboutActive: null,
      aboutTabsContents: articlesAbout,
      members: members
    }
  },
  methods: {
    getFirstTabs: function (i) {
      var vm = this
      if (
        vm.aboutTabsContents[i].tabText == null &&
        vm.aboutTabsContents[i].tabMd != null
      ) {
        var j = i
        this.$ajax.get('/api/get/about/article/' + i).then(function (response) {
          vm.aboutTabsContents[j].tabText = response.data
        })
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
