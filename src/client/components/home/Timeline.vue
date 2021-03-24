<template>
  <v-timeline>
    <v-timeline-item v-for="(time, key) in timeLine" :key="key" color="grey darken-2" large>
      <span slot="opposite" class="timeline-text timeline-text-time">{{ time.year }}</span>
      <v-card class="elevation-2" style="border-radius:5px;">
        <v-card-text class="timeline-text">{{ time.text }}</v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  name: 'v-custom-timeline',
  data: () => ({
    timeLine: [
      {
        year: '2019-03-03',
        text:
          'Officially established the openbiox, 63 members at this time.'
      },
      {
        year: '2019-03-06',
        text:
          'Created openbiox GitHub orgnization.'
      },
      {
        year: '2019-03-10',
        text: 'Released the version 1.0 of the declaration of openbiox'
      },
      { year: '2019-03-15',
        text: 'Finished the collection of openbiox 2019 creative project. According to statistics, a total of 40 projects covering primary, advanced and high-order directions were submitted.' },
      {
        year: '2019-04-20',
        text: 'First offline presentation at Yueyang Road, Shanghai, China.'
      }
    ]
  })
}
</script>

<style>
.timeline-text {
  font-size: 1.2em;
  text-align: justify;
}
.timeline-text-time {
  font-weight: bold;
}
</style>
