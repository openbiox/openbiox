<template>
  <v-layout row>
    <v-flex>
      <v-card>
        <v-img
          src="https://s2.ax1x.com/2019/04/22/EAuPOO.jpg"
          height="350px"
          width="100%"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <p class="subheading">We have a responsibility to enable this future for everyone.</p>
            <span class="grey--text">Ewan Birney, GA4GH Chair</span>
          </div>
                    <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-title>
        <v-slide-y-transition>
          <v-card-text v-show="show">
            Detail from <a href="https://www.ga4gh.org/news/sAhZCeJjS96QHhVPIYwwWA.article">sharing data saves lives' infographic on the GA4GH website</a>. This shows just a few examples of genomic-medicine programmes that were active in 2017.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    show: false
  })
}
</script>
