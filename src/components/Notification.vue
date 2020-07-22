<template>
  <v-snackbar
    v-bind:color="NOTIFICATION.clazz"
    v-model="snackbar"
    bottom
    right
    v-bind:timeout="NOTIFICATION.timeout"
  >
    <v-icon>notification_important</v-icon>
    {{NOTIFICATION.text}}
    <v-btn dark text v-on:click="snackbar = false">
      <v-icon>clear</v-icon>
    </v-btn>
  </v-snackbar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "notification",
  computed: {
    ...mapGetters(["NOTIFICATION"]),
    snackbar: {
      get: function () {
        return this.$store.getters.NOTIFICATION.display;
      },
      set: function (value) {
        this.$store.commit("SET_NOTIFICATION", { display: value });
      },
    },
  },
};
</script>