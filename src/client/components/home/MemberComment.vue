<template>
  <v-layout
    column
    justify-center
  >
    <br/>
    <h2 class="display-1 font-weight-bold blue-color">
              Comments
    </h2>
    <v-divider />
    <br/>
      <v-expansion-panel
        popout
        dark
        focusable
      >
        <v-expansion-panel-content
          v-for="(message, i) in messages"
          :key="i"
          hide-actions
        >
          <template v-slot:header>
            <v-layout
              align-center
              row
              spacer
            >
              <v-flex xs4 sm2 md1>
                <v-avatar
                  size="60px"
                >
                  <img
                    v-if="message.avatar"
                    :src="message.avatar"
                    :alt="message.name"
                  >
                  <v-icon
                    v-else
                    :color="message.color"
                    v-text="message.icon"
                  ></v-icon>
                </v-avatar>
              </v-flex>

              <v-flex sm5 md3 hidden-xs-only>
                <strong v-html="message.name"></strong>
                <span
                  v-if="message.total"
                  class="grey--text"
                >
                  &nbsp;({{ message.total }})
                </span>
              </v-flex>

              <v-flex no-wrap xs5 sm3>
                <v-chip
                  v-if="message.new"
                  :color="`${message.color} lighten-4`"
                  class="ml-0"
                  label
                  small
                >
                  {{ message.new }} new
                </v-chip>
                <strong v-html="message.title"></strong>
              </v-flex>

              <v-flex
                v-if="message.excerpt"
                class="grey--text"
                ellipsis
                hidden-sm-and-down
              >
                &mdash;
                {{ message.excerpt }}
              </v-flex>
            </v-layout>
          </template>

          <v-card>
            <v-divider></v-divider>
            <v-card-text
              v-html="message.text"
              style="font-size:1.2em"
            ></v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    messages: [
      {
        avatar: 'https://s2.ax1x.com/2019/04/24/EVUUit.jpg',
        name: 'Jianfeng',
        title: 'Welcome to openbiox home!',
        excerpt: 'Thank you for joining our community...',
        text: 'We originally had a good foundation in computer science and a talent pool, but the number of students accepted by Google Summer of Code is only one-tenth that of India. In the field of bioinformatics, our bioinformatics open source community construction and talent training/exercise mechanism are far from each other. Now, it is time for us to make some changes. While benefiting the entire scientific community, we will use practice to accumulate technology, accumulate talents, and accumulate experience..'
      },
      {
        avatar: 'https://s2.ax1x.com/2019/04/24/EVUWWV.jpg',
        name: 'Jack Wang',
        title: 'Just for interest!',
        excerpt: 'To make our bioinformatics community better.',
        text: 'So far, more than 95% of authoritative software and databases come from abroad, such as TCGA, NCBI, EBI and other databases, or research institutes such as Broad Institute and Cold Spring Harbor. After deep reflection, I think the reason is simple: because others do well! That\'s it. When I wanted Call mutation, my first thought was GATK. When I was analyzing tumor data, the first thing I went to see was TCGA. Why can\'t we sink our minds and develop some really good software? Don\'t do things for the sake of influencing factors, for the sake of interest, for the heart, for the benefit of the later people. Before openbiox came out, many of the people I knew to be a student were in a state of scattered sand. Many people "have been halfway out of the house" and, with their own hobbies, insisted on deep cultivation in this field. But bioinformatics is a highly integrated discipline. Everyone has their own expertise and is not good at content. I have always had an idea: If you have a platform that can connect you and brainstorm, you will be able to collide with a lot of good ones. Projects and results. In addition, as a clinician, I saw a lot of biological information in the clinic, but it is too difficult for people in the medical field and the health field to communicate with each other.'
      },
      {
        avatar: 'https://s2.ax1x.com/2019/04/24/EVauwj.jpg',
        name: 'Quark Yang',
        title: 'Be more, Do less.',
        excerpt: 'Every little bit helps.',
        text: 'Because bioinformatics should be an open source field. In the past two years, all kinds of biological data output really need more people to interpret, but most people with biological and medical backgrounds have weak computer foundations, so I agree with you. The point of view, building a community, having a stable output, and helping other people in need, and building a complete circle of biological information, is very meaningful.'
      }
    ]
  })
}
</script>
