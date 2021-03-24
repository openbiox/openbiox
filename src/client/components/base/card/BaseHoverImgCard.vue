<template>
  <v-layout align-start justify-space-around row wrap>
    <v-flex xs12 md6 v-for="(item, key) in img" :key="key">
      <v-hover>
        <v-card
          slot-scope="{ hover }"
          :class="`elevation-${hover ? 5 : 0}`"
          style="border-radius:5px"
        >
          <a :href="item.href" target="_blank">
            <v-img
              :aspect-ratio="16/9"
              :src="item.src"
              class="white--text"
              height="350"
              width="100%"
              style="border-radius:5px"
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
