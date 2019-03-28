<template>
  <div>
      <v-fab-transition>
        <v-btn
          id="backToTop"
          fixed
          dark
          fab
          bottom
          right
          color="blue lighten-1"
          @click="gotop"
          v-show="!hidden"
        >
          <v-icon>keyboard_arrow_up</v-icon>
        </v-btn>
      </v-fab-transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hidden: true,
      scrollTop: ''
    }
  },
  watch: {
    $route () {
      this.watchBackToTop()
    }
  },
  mounted () {
    this.watchBackToTop()
  },
  created () {
    window.addEventListener('scroll', this.watchBackToTop, true)
  },
  methods: {
    gotop: function () {
      let speed = 10
      let timer = setInterval(function () {
        this.scrollTop =
          document.documentElement.scrollTop ||
          window.pageYOffset ||
          document.body.scrollTop
        if (this.scrollTop > 0) {
          this.scrollTop =
            this.scrollTop - speed > 0 ? this.scrollTop - speed : 0
          speed += 20
          window.scrollTo(0, this.scrollTop)
        } else {
          clearInterval(timer)
        }
      }, 16)
    },
    watchBackToTop: function () {
      var vm = this
      var t = document.documentElement.scrollTop || document.body.scrollTop
      if (t < 120) {
        vm.hidden = true
      } else {
        vm.hidden = false
      }
    }
  }
}
</script>
