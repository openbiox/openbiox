<template>
  <v-item-group>
      <v-layout wrap>
        <v-flex
          v-for="item in cardItems"
          :key="item"
          xs12
          md4
        >
          <v-item style="margin:5px">
            <v-card
              slot-scope="{ active, toggle }"
              :color="active ? 'gray' : ''"
              class="d-flex align-center"
              dark
              height="364"
              @click="toggle"
            >
              <v-scroll-y-transition>
                <div
                  v-if="active && item.activeText"
                  class="display-1 text-xs-center"
                >
                  
                  <v-btn v-if="item.activeHref" 
                  color="info"
                  round
                  large
                  :href="item.activeHref" 
                  target="_blank"
                  class="display-1 without-text-transform"
                  >{{ item.activeText }}</v-btn>
                  <div v-else>{{ item.activeText }}</div>
                  
                </div>
                <div
                  v-else-if="active && item.activeSrc"
                >
                  <img :src="item.activeSrc">
                </div>
                <div
                  v-else-if="item.disactiveText"
                  class="display-1 text-xs-center"
                >
                  <v-btn v-if="item.disactiveHref"
                  color="info"
                  round
                  class="display-1 without-text-transform"
                  :href="item.disactiveHref"
                  large
                  flat
                  target="_blank"
                  >{{ item.disactiveText }}</v-btn>
                  <div v-else>{{ item.disactiveText }}</div>
                </div>
                <div
                  v-else-if="item.disactiveSrc"
                >
                <img :src="item.disactiveSrc" width="100%" height="100%">
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-flex>
      </v-layout>
  </v-item-group>
</template>

<script>
export default {
  data: () => ({
    cardItems: [
      {
        activeText: 'openbiox',
        activeHref: 'https://github.com/openbiox/openbiox',
        disactiveSrc:
          'https://s2.ax1x.com/2019/04/23/EE42Ux.jpg'
      },
      {
        activeText: 'XenaShiny',
        activeHref: 'https://github.com/openbiox/XenaShiny',
        disactiveSrc:
          'https://s2.ax1x.com/2019/04/23/EE45xe.jpg'
      },
      {
        activeText: 'playcloud',
        activeHref: 'https://github.com/openbiox/playcloud',
        disactiveSrc:
          'https://s2.ax1x.com/2019/04/23/EE4R56.jpg'
      },
      {
        activeText: 'Cookbook-for-R',
        activeHref: 'https://github.com/openbiox/Cookbook-for-R-Chinese',
        disactiveSrc:
          'https://s2.ax1x.com/2019/04/23/EE4fPK.jpg'
      },
      {
        activeText: 'TCGA-Tool-Kit',
        activeHref: 'https://github.com/openbiox/TCGA-Tool-Kit',
        disactiveSrc:
          'https://s2.ax1x.com/2019/04/23/EE442D.jpg'
      },
      {
        activeText: 'scRNA-seq',
        activeHref: 'https://github.com/openbiox/scRNA-seq-OnlineFlow',
        disactiveSrc:
          'https://s2.ax1x.com/2019/04/23/EE4h8O.jpg'
      },
      {
        activeText: 'metapip',
        activeHref: 'https://github.com/openbiox/metapip',
        disactiveSrc:
          'https://s2.ax1x.com/2019/04/23/EE47qA.jpg'
      },
      {
        activeText: 'ENCODE-Challenge',
        activeHref: 'https://github.com/openbiox/ENCODE-Challenge',
        disactiveSrc:
          'https://s2.ax1x.com/2019/04/23/EE4oKH.jpg'
      },
      {
        activeText: 'disease-kb',
        activeHref: 'https://github.com/openbiox/openbiox-disease-kb',
        disactiveSrc:
          'https://s2.ax1x.com/2019/04/23/EE4Trd.jpg'
      }
    ]
  })
}
</script>
