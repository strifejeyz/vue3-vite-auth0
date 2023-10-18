<template>
  <v-container>
    <v-btn @click="HandleLogout">Logout</v-btn>
  </v-container>
</template>
<script>

export default {
  methods: {
    HandleLogout() {
      this.$auth0.logout({
        logoutParams: {
          returnTo: `${window.location.origin}/login`
        }
      });
    }
  }
}
</script>

