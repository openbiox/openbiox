<template>
  <v-layout row>
    <v-flex>
      <v-hover>
        <v-card
          slot-scope="{ hover }"
          :class="`elevation-${hover ? 24 : 2}`"
        >
          <v-img
            :src="src"
            :height="height"
            width="100%"
          >
          </v-img>

          <v-card-title primary-title>
            <div>
              <p class="subheading">{{ title }}</p>
              <span class="grey--text">{{ subtitle }}</span>
            </div>
                      <v-spacer></v-spacer>
            <v-btn icon @click="show = !show">
              <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
          </v-card-title>
          <v-slide-y-transition>
            <v-card-text v-show="show" v-html="detail">
            </v-card-text>
          </v-slide-y-transition>
        </v-card>
      </v-hover>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['src', 'height', 'title', 'subtitle', 'detail'],
  data: () => ({
    show: false
  })
}
</script>
