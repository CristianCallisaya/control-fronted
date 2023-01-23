<template>
  <v-app>
    <nav>
      <v-app-bar color="blue-grey darken-4" class="app-bar"  dark app width="auto">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"
          ><span class="material-icons"> menu </span></v-app-bar-nav-icon
        >
        <v-toolbar-title class="text-uppercase">
          <span class="font-weight-light">Universidad Tecnológica Bolivana</span>
          <span></span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-switch v-model="switch1" flat @click="toggle_dark_mode"></v-switch>
        <v-spacer></v-spacer>
        <v-btn @click="pushRute">
          <v-icon> settings_applications</v-icon>
        </v-btn>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" dark color="#463f3a" absolute temporary class="darken-4" width="auto">
        <v-layout column align-center>
          <v-flex >
            <v-avatar size="150">
              <v-img src="../assets/logo_1_0.png"></v-img>
            </v-avatar>
          </v-flex>
        </v-layout>

        <v-list >
          <v-list-item  v-for="link in links1" :key="link.text" router :to="link.route" >
            <v-list-item-icon>
          <v-icon>{{  link.action }}</v-icon>
        </v-list-item-icon>
            <v-list-item-content>
                   <v-list-item-title>{{ link.title }}</v-list-item-title>
            </v-list-item-content>   
          </v-list-item>
          <v-list-group
            v-for="item in items"
            :key="item.title"
            v-model="item.active"
            :prepend-icon="item.action"
            no-action
            active-class="deep-indigo--text text--darken-4"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="child in item.items"
              :key="child.title"
              router
              :to="child.route"
            >
              <v-list-item-content>
                <v-list-item-title v-text="child.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item v-for="link in links" :key="link.title" router :to="link.route">
            <v-list-item-action>
              <v-icon>
                {{ link.action }}
              </v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ link.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </nav>
    <v-main>
    <v-container>
      <router-view></router-view>
    </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>
<script>
import Footer from "./Footer.vue";
export default {
  components: {
    Footer
  },
  data: () => ({
    switch1: "",

    drawer: true,
    links: [
      { action: "assignment", title: "Solicitudes", route: "/solicitudes" },
      { action: "assignment", title: "Asignaciones", route: "/asignaciones" },
      { action: "assignment_ind", title: "Defensa", route: "/defensa" },
    ],
    links1: [
      {
        title: "Inicio",
        action: "analytics",
        route: "dashboard",
      },
    ],
    items: [
      {
        action: "group",
        items: [
          { title: "Estudiantes", route: "/estudiantes" },
          { title: "Docentes", route: "/docentes" },
        ],
        title: "Administración",
      },
    ],
  }),
  mounted() {
    const theme = localStorage.getItem("dark_theme");
    if (theme) {
      if (theme === "true") {
        this.switch1 = true;
        this.$vuetify.theme.dark = true;
      } else {
        this.switch1 = false;
        this.$vuetify.theme.dark = false;
      }
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      this.$vuetify.theme.dark = true;

      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    }
  },
  methods: {
    pushRute() {
      this.$router.push({name: "Configuracion"});
    },
    toggle_dark_mode: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
  },
};
</script>

<style scoped>

</style>
