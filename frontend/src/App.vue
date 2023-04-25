<template>
  <v-card
    class="mx-auto overflow-hidden"
    height="1000"
  >
    <v-app-bar
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>양재 맛집 리스트</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
        <v-list-item v-for="item in items" :key="item.title" :href="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
    <router-view></router-view>
  </v-main>
  </v-card>
</template>

<script>
import routes from "@/router/routes";
import { getConfig } from "./services/UploadService";

export default {
  name: 'App',

  components: {
  },
  data: () => ({
    drawer: false,
    group: null,
    List: "List",
    ListCreate: "Create",
    items: [
      {title:'List', icon:'mdi-view-dashboard', link:'/StoreList'},
      {title:'Create', icon:'mdi-view-dashboard', link:'/CreateList'},
    ],
  }),
  methods:{
    ListPage(){
      console.log("ListPage");
    },
  },
  mounted(){
    console.log(routes);
    getConfig();
  },
};
</script>

<!-- style scoped 해당 페이지만 style 사용 -->
<style scoped>
#app {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

</style>