<template>
  <v-container>
    <v-btn @click="HandleLogin">Login</v-btn>
  </v-container>
</template>
<script>
export default {
  methods: {
    HandleLogin() {
      this.$auth0.loginWithRedirect({
        appState: {
          target: "/profile"
        }
      });
    }
  }
}
</script>

