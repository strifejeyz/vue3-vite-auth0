<template>
  <v-container>
    <template v-if="Authed">
      <LogoutBtn/>
    </template>
    <template v-if="!Authed">
      <LoginBtn/>
      <SignUpBtn/>
    </template>
  </v-container>
</template>

<script>
import LoginBtn from "@/components/auth0/LoginBtn.vue";
import SignUpBtn from "@/components/auth0/SignUpBtn.vue";
import LogoutBtn from "@/components/auth0/LogoutBtn.vue";
export default {
  components: {
    LoginBtn,
    SignUpBtn,
    LogoutBtn,
  },
  computed: {
    Authed() {
      return this.$auth0.isAuthenticated.value;
    }
  },
  mounted() {
    console.log("this.$auth0.isAuthenticated:",this.$auth0.isAuthenticated.value)
  }
}
</script>
