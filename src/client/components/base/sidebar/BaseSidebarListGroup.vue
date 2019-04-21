 <template>
  <div>
    <v-list-group
      v-for="(items, key1) in sideNavData"
      :prepend-icon="items.icon"
      :key="key1"
      :value="items.sectionName && items.sectionName === sectionName || items.name == 'openbiox'"
      stateless
    >
      <v-list-tile slot="activator">
        <v-list-tile-title>{{ items.name }}</v-list-tile-title>
      </v-list-tile>
      <div v-for="(subitems, key2) in items.subItems" :key="key2">
        <div v-if="!subitems.subItems && subitems.useRoutes" class="v-custom-btn ripple nav-div">
          <router-link :to="subitems.href">
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>{{ subitems.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title
                  v-if="subitems.name && subitems.sectionName && subitems.itemName"
                  :class="isPageActive(subitems.name, subitems.sectionName, subitems.itemName)"
                >{{ subitems.name }}</v-list-tile-title>
                <v-list-tile-title
                  v-else
                  :class="isPageActive(subitems.name, '', '', '')"
                >{{ subitems.name }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </router-link>
        </div>
        <div v-else-if="!subitems.subItems && !subitems.useRoutes" class="v-custom-btn ripple nav-div">
          <v-list-tile :href="subitems.href" :target="subitems.target">
            <v-list-tile-action>
              <v-icon>{{ subitems.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ subitems.name }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </div>
        <v-list-group v-else sub-group>
          <v-list-tile slot="activator">
            <v-list-tile-title>{{ subitems.name }}</v-list-tile-title>
          </v-list-tile>
          <v-list-tile
            v-for="(subitems2, key3) in subitems.subItems"
            :key="key3"
            :target="subitems2.target"
            class="v-custom-btn ripple"
            :href="subitems2.href"
          >
            <router-link
              v-if="subitems.useRoutes && subitems.sectionName && subitems.itemName"
              :to="subitems2.href"
            >
              <v-list-tile-title style="margin-left:80px">{{ subitems2.name }}</v-list-tile-title>
              <v-list-tile-action v-if="subitems2.icon">
                <v-icon>{{ subitems2.icon }}</v-icon>
              </v-list-tile-action>
            </router-link>
            <v-list-tile-title v-else style="margin-left:80px">{{ subitems2.name }}</v-list-tile-title>
            <v-list-tile-action v-if="subitems2.icon">
              <v-icon>{{ subitems2.icon }}</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </div>
    </v-list-group>
  </div>
</template>

<script>
export default {
  data: () => ({
    pageName: document.pageName,
    sectionName: null,
    itemName: null,
    query: null
  }),
  watch: {
    $route () {
      this.updatePageName()
      this.fetchData()
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    isPageActive: function (i, j, k) {
      if (
        this.pageName === i ||
        (this.sectionName === j && this.itemName === k)
      ) {
        return 'is-active'
      } else {
        return null
      }
    },
    updatePageName: function () {
      this.pageName = document.pageName
    },
    fetchData () {
      // replace getPost with your data fetching util / API wrapper
      if (this.$route.params.sectionName) {
        this.sectionName = this.$route.params.sectionName
      } else {
        this.sectionName = null
      }
      if (this.$route.params.itemName) {
        this.itemName = this.$route.params.itemName
      } else {
        this.itemName = null
      }
      if (this.$route.query) {
        this.query = this.$route.query
      }
    }
  },
  props: ['sideNavData']
}
</script>

<style scope>
.is-active {
  color: #1453c7;
  padding-left: 10px;
  border-left: solid #1453c7;
}

.v-custom-btn:active {
  background: #f5f4f4;
  -webkit-transition-duration: 50;
  transition-duration: 50;
}

.ripple {
  position: relative;
  overflow: hidden;
}

.ripple:after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  background-image: radial-gradient(circle, #666 10%, transparent 10.01%);
  background-repeat: no-repeat;
  background-position: 50%;
  transform: scale(10, 10);
  opacity: 0;
  transition: transform 0.5s, opacity 0.8s;
}

.ripple:active:after {
  transform: scale(0, 0);
  opacity: 0.3;
  transition: 0s;
}
</style>
