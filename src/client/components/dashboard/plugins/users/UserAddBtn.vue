<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    style="height:100%"
  >
     <v-btn slot="activator" fab dark color="blue lighten-0">
      <v-icon dark>add</v-icon>
    </v-btn>
    <v-card tile>
      <v-toolbar card dark color="primary">
        <v-btn icon dark @click="dialog = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Add new account</v-toolbar-title>
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
      <v-users-setting-form :user-data="userData" :password="true" showbtn="Submit"/>
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
  data: () => ({
    dialog: false,
    userData: {},
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
  })
}
</script>
