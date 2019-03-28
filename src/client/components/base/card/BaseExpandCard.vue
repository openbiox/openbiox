<template>
  <div grid-list-md class="text-xs-center">
    <v-card class="elevation-4">
      <v-toolbar color="blue darken-2" dark>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>{{title}}</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-card-actions>
          <v-btn icon @click="expand = !expand">
            <v-icon>{{ expand ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-toolbar>
      <v-divider/>
      <v-expand-transition>
        <div v-if="expand">
          <br/>
          <div class="text-xs-center" v-if="subtitle">
            <v-toolbar-title class="headline">
              <b>{{subtitle}}</b>
            </v-toolbar-title>
          </div>
          <component :is="component" :tooldata="tooldata"></component>
          <br>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>

export default {
  props: ['title', 'subtitle', 'tooldata', 'usedComponent'],
  data () {
    return {
      expand: true,
      dialog: false,
      component: null
    }
  },
  created () {
    if (this.usedComponent) {
      this.component = () => import('@' + '/' + this.usedComponent)
    }
  },
  watch: {
    $route () {
      if (this.usedComponent) {
        this.component = () => import('@' + '/' + this.usedComponent)
      }
    }
  },
  computed: {
    token () {
      return this.$store.state.token
    }
  }
}
</script>
