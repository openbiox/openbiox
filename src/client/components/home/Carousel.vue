<template>
  <v-carousel
    dark
    height = "350"
  >
    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'https://s2.ax1x.com/2019/04/22/EAuefI.jpg'
        },
        {
          src: 'https://s2.ax1x.com/2019/04/22/EkqilT.jpg'
        },
        {
          src: 'https://s2.ax1x.com/2019/04/22/EkHSBj.jpg'
        },
        {
          src: 'https://s2.ax1x.com/2019/04/22/EkHPNq.jpg'
        }
      ]
    }
  }
}
</script>
