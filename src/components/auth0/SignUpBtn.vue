<template>
  <v-container>
    <v-btn @click="HandleSignUp">Sign Up</v-btn>
  </v-container>
</template>
<script>
export default {
  methods: {
    HandleSignUp() {
      this.$auth0.loginWithRedirect({
        appState: {
          target: "/profile"
        },
        authorizationParams: {
          screen_hint: 'signup'
        }
      });
    }
  }
}
</script>

