<template>
  <div>
    <v-card style="height: 100%; overflow: hidden">
      <v-toolbar dark color="blue">
        <v-toolbar-title>Title of the list {{listId}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
      </v-toolbar>
      <v-list two-line subheader style="height: calc(100vh - 164px); overflow-y: scroll;">
        <task v-for="task in tasks" v-bind:key="task.id" v-bind:task="task" />
      </v-list>
      <v-divider></v-divider>
      <v-card-actions>
        <v-layout>
          <v-flex>
            <new-task></new-task>
          </v-flex>
        </v-layout>
      </v-card-actions>
    </v-card>
    <router-view v-bind:key="$route.fullPath" name="notes"></router-view>
  </div>
</template>

<script>
import Task from "./Task";
import NewTask from "./NewTask";

export default {
  name: "Tasks",
  components: { Task, NewTask},
  data: function() {
    return {
      tasks: [
        {
          id: 0,
          title: "task title",
          subTitle: "asd as da d as da sd a d ad",
          isComplete: true
        },
        {
          id: 1,
          title: "task title",
          subTitle: "asd as da d as da sd a d ad",
          isComplete: false
        },
        {
          id: 3,
          title: "task title",
          subTitle: "asd as da d as da sd a d ad",
          isComplete: true
        }
      ]
    };
  },
  computed: {
    listId: function(){
      return this.$route.params.id;
    }
  }
};
</script>