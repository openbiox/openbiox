<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    style="height:100%"
  >
    <v-icon style="margin-top:15px" small slot="activator" class="mr-2">{{icon}}</v-icon>
    <v-card tile>
      <v-toolbar card dark color="primary">
        <v-btn icon dark @click="dialog = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>User settings</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark flat @click="dialog = false">Close</v-btn>
        </v-toolbar-items>
        <v-menu bottom right offset-y>
          <v-btn slot="activator" dark icon>
            <v-icon>more_vert</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile v-for="(item, i) in items" :key="i">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar>
      <v-users-setting-form
        :user-data="userData"
        :disabled="disabled"
        :password="password"
        :showbtn="showbtn"
      />
      <div style="flex: 1 1 auto;"></div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  components: {
    'v-users-setting-form': () =>
      import('@/components/base/users/BaseUserProfileDialogForm')
  },
  props: ['userData', 'icon', 'disabled', 'password', 'showbtn'],
  data () {
    return {
      dialog: false,
      select: [
        { text: 'State 1' },
        { text: 'State 2' },
        { text: 'State 3' },
        { text: 'State 4' },
        { text: 'State 5' },
        { text: 'State 6' },
        { text: 'State 7' }
      ],
      items: [
        {
          title: 'Click Me'
        },
        {
          title: 'Click Me'
        },
        {
          title: 'Click Me'
        },
        {
          title: 'Click Me 2'
        }
      ]
    }
  },
  computed: {
    token () {
      return this.$store.state.permission.token
    }
  }
}
</script>
