<template>
  <v-app>
    <v-layout>
      <v-app-bar color="primary" prominent>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>My files</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn variant="text" icon="mdi-magnify"></v-btn>
        <v-btn variant="text" icon="mdi-filter"></v-btn>
        <v-btn variant="text" icon="mdi-dots-vertical" id="menu-activator"></v-btn>
      </v-app-bar>

      <v-menu activator="#menu-activator">
        <v-list>
          <v-list-item value="test">
            <v-list-item-title>Edit my Profile</v-list-item-title>
          </v-list-item>
          <v-list-item value="test2">
            <v-list-item-title @click="Logout">Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-navigation-drawer v-model="drawer" location="left" prominent>
        <v-list>
          <v-list-item
            :prepend-avatar="Profile.picture"
            :title="Profile.name"
            :subtitle="Profile.email">
          </v-list-item>
        </v-list>

        <v-list>
          <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"/>
          <v-list-item prepend-icon="mdi-account-multiple" title="My Profile" value="myprofile"/>
          <v-list-item prepend-icon="mdi-star" title="Resumes" value="resumes"/>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-card-text>
          <slot></slot>
        </v-card-text>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    items: [
      {
        title: 'My Profile',
        value: 'foo',
        icon: 'mdi-account'
      },
      {
        title: 'Resumes',
        value: 'bar',
        icon: 'mdi-account'
      },
    ],
  }),

  computed: {
    Profile() {
      return this.$auth0.user.value;
    }
  },

  methods: {
    Logout() {
      this.$auth0.logout({
        logoutParams: {
          returnTo: `${window.location.origin}/login`
        }
      });
    }
  },

  mounted() {
    console.log(this.Profile);
  }
}
</script>
