<template>
</template>

<script>
export default {
  mounted() {
    this.$auth0.logout({
      logoutParams: {
        returnTo: `${window.location.origin}/login`
      }
    });
  }
}
</script>
