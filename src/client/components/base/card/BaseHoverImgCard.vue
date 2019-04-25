<template>
  <v-layout align-start justify-space-around row fill-height>
    <v-flex xs12 md6 v-for="(item, key) in img" :key="key">
      <v-hover v-if="key % 2 ==0">
        <v-card
          style="margin-left:10px"
          slot-scope="{ hover }"
          :class="`elevation-${hover ? 12 : 4}`"
        >
          <a :href="item.href" target="_blank">
            <v-img
              :aspect-ratio="16/9"
              :src="item.src"
              class="white--text"
              height="350"
              width="100%"
            ></v-img>
          </a>
          <v-card-title>
            <div>
              <span class="custom-card-span-text">{{ item.span }}</span>
            </div>
          </v-card-title>
        </v-card>
      </v-hover>
      <v-hover v-if="key % 2 !==0">
        <v-card
          style="margin-right:10px"
          slot-scope="{ hover }"
          :class="`elevation-${hover ? 19 : 4}`"
        >
          <a :href="item.href" target="_blank">
            <v-img
              :src="item.src"
              class="white--text"
              height="350"
              width="100%"
            ></v-img>
          </a>
          <v-card-title>
            <div>
              <span class="custom-card-span-text">{{ item.span }}</span>
            </div>
          </v-card-title>
        </v-card>
      </v-hover>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['img'],
  data () {
    return {
    }
  }
}
</script>
