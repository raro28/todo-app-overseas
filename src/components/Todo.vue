<template>
  <div style="max-height: calc(100vh - 36px); height: 100%">
    <v-container fluid fill-height pl-0 pr-0 pb-0 pt-0>
      <v-layout row align-space-between justify-space-between>
        <v-flex lg3 pr-2>
          <lists />
        </v-flex>
        <v-flex lg6 pr-2 pl-2>
          <tasks />
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
  </div>
</template>

<script>
import Tasks from "./Tasks";
import Lists from "./Lists";
import OptionsBar from "./OptionsBar";

export default {
  name: "todo",
  components: { Lists, Tasks, OptionsBar }
};
</script>