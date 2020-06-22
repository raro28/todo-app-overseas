<template>
  <v-list-item>
    <v-list-item-action>
      <v-btn icon color="pink">
        <v-icon>edit</v-icon>
      </v-btn>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title>{{task.title}}</v-list-item-title>
      <v-list-item-subtitle>{{task.subTitle}}</v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-action v-on:click="toggle">
      <v-btn icon>
        <v-icon color="green" v-if="task.isComplete">check_circle</v-icon>
        <v-icon color="gray" v-else>check_circle</v-icon>
      </v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object
  },
  methods: {
      toggle: function(){
          this.task.isComplete = !this.task.isComplete
      }
  }
};
</script>