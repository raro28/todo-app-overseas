<template>
  <div style="max-height: calc(100vh - 36px); height: 100%">
    <v-container fluid fill-height pl-0 pr-0 pb-0 pt-0>
      <v-layout row align-space-between justify-space-between>
        <v-flex lg3 pr-2>
          <lists />
        </v-flex>
        <v-flex lg6 pr-2 pl-2>
          <router-view name="tasks" v-bind:key="$route.fullPath"></router-view>
        </v-flex>
        <v-flex lg3 pl-2>
          <options-bar />
        </v-flex>
      </v-layout>
    </v-container>
    <v-footer height="auto " color="indigo">
        <v-layout justify-center>
            <v-flex indigo white--text text-sm-center>
                &copy;2020
                <strong>Hector Diaz</strong>
            </v-flex>
        </v-layout>
    </v-footer>
    <notification />
  </div>
</template>

<script>
import Lists from "./Lists";
import OptionsBar from "./OptionsBar";
import Notification from "./Notification";

export default {
  name: "todo",
  components: { Lists, OptionsBar, Notification }
};
</script>