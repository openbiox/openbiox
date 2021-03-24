<template>
  <v-layout text-xs-center wrap justify-center align-center row>
    <v-flex xs12 md12>
      <h2>{{ title }}</h2>
      <v-divider></v-divider>
      <br>
    </v-flex>
    <v-flex xs12 md4 v-for="item in projects.slice(start,end)"
      v-bind:key="item.name">
      <v-hover>
        <v-card
          slot-scope="{ hover }"
          :class="`elevation-${hover ? 5 : 1}`"
          style="border-radius:10px"
          :href="item.href"
          target="_blank"
          width="100%"
        >
          <v-img :aspect-ratio="16/9" :src="item.src"></v-img>
          <v-card-title primary-title>
            <div style="text-align:left">
              <div class="headline">{{item.name}}</div>
              <span class="grey--text">{{item.intro}}</span>
              <div class="d-flex">
                <v-rating
                  :value="item.value"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>
                <div class="ml-2 grey--text text--darken-2"></div>
              </div>
            </div>
            <v-spacer></v-spacer>
            <v-btn icon class="mr-0">
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-card-title>
        </v-card>
      </v-hover>
    </v-flex>
    <br>
    <v-flex xs12 md12>
      <v-pagination
        v-model="page"
        :length="Math.ceil(this.projects.length / this.numEachPage)"
      ></v-pagination>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['title', 'items'],
  data () {
    return {
      page: 1,
      numEachPage: 6
    }
  },
  computed: {
    start () {
      const start = (
        (this.page - 1) *
        this.numEachPage
      ).toFixed()
      return Number(start)
    },
    end () {
      if (this.start) {
        if (this.projects.length - this.start < this.numEachPage) {
          return this.projects.length
        }
        return this.start + this.numEachPage
      } else {
        return this.numEachPage
      }
    },
    projects () {
      let final = []
      for (let i = 0; i < this.items.length; i++) {
        final.push(this.items[i])
      }
      return final
    }
  }
}
</script>
