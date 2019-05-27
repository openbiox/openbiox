<template>
  <v-container>
    <v-breadcrumbs :items="navItems" divider=">"></v-breadcrumbs>
    <v-toolbar dense flat>
      <v-overflow-btn
        multiple
        label="Select year"
        :items="dropdown_years"
        v-model="year"
        hide-details
        class="pa-0"
      ></v-overflow-btn>

      <v-divider vertical></v-divider>

      <v-overflow-btn
        v-model="month"
        :items="dropdown_month"
        label="Select month"
        hide-details
        multiple
        class="pa-0"
      ></v-overflow-btn>

      <v-divider class="mr-2" vertical></v-divider>

      <v-overflow-btn
        v-model="types"
        :items="dropdown_types"
        label="Select types"
        hide-details
        multiple
        class="pa-0"
      ></v-overflow-btn>
    </v-toolbar>
    <br>
    <h1>2019</h1>
    <v-divider/>
    <br>
    <v-card
      v-for="item in items"
      v-bind:key="item.id"
      class="mx-auto"
      :color="item.color"
      dark
      max-width="100%"
      style="margin:40px"
    >
      <v-card-title>
        <span class="headline">{{ item.title }}</span>
      </v-card-title>
      <v-divider/>
      <v-card-text class="headline font-weight-bold">"{{ item.text }}"</v-card-text>

      <v-card-actions>
        <v-list-tile class="grow">
          <v-list-tile-avatar color="grey darken-3">
            <v-img class="elevation-6" :src="item.avatar"></v-img>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.author }}</v-list-tile-title>
            <v-list-tile-title>{{ item.date }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-card-actions>
    </v-card>
    <div class="text-xs-center">
      <v-pagination v-model="page" :length="1"></v-pagination>
    </div>
  </v-container>
</template>

<script>
import newsData from '@/assets/data/news/news.json'
export default {
  data: () => ({
    dropdown_years: [2019],
    dropdown_month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    dropdown_types: ['News', 'Events'],
    year: null,
    month: null,
    types: null,
    page: 1,
    items: newsData,
    navItems: [{
      text: 'Home',
      disabled: false,
      href: '/'
    },
    {
      text: 'News & Events',
      disabled: true,
      href: '/news_events'
    }]
  })
}
</script>
