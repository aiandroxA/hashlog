<template>
  <div id="app">
    <v-app>
      <the-header />
      <v-main>
        <v-container v-if="!isTopPage">
          <the-flash-message v-if="isFlash" />
          <router-view />
        </v-container>
        <router-view v-if="isTopPage" />
      </v-main>
      <the-footer />
    </v-app>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import theHeader from "./components/shared/TheHeader"
import theFooter from "./components/shared/TheFooter"
import theFlashMessage from "./components/shared/TheFlashMessage"

export default {
  name: "MyApp",
  components: {
    theHeader,
    theFooter,
    theFlashMessage
  },
  computed: {
    ...mapGetters({ isFlash: "flash/isFlash" }),
    isTopPage() {
      return this.$route.path === "/"
    }
  }
}
</script>

<style>
.v-application--wrap {
  background-color: #e9f1f5;
}
.container.main-content {
  max-width: 900px;
  margin: 0 auto;
}
.main-content {
  max-width: 900px;
  margin: 0 auto;
}
</style>
