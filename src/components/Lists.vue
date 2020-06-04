<template>
  <v-navigation-drawer permanent style="width: 100%; overflow: hidden">
    <v-toolbar dark color="blue">
      <v-toolbar-title>Lists</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list>
      <v-list-item>
        <v-list-item-content>Create a new list</v-list-item-content>
        <v-list-item-action>
          <v-btn icon>
            <v-icon>add</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list style="height: calc(100vh - 164px); overflow-y: scroll;">
      <v-list-item v-for="(list, key) in lists" v-bind:key="key">
        <v-list-item-content>
            <v-list-item-title>{{ list.title }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-list-item-title>{{ list.tasks }}</v-list-item-title>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "lists",
  data: () => ({
    lists: [
      {
        id: 1,
        title: "list",
        tasks: 12
      },
      {
        id: 2,
        title: "list",
        tasks: 3
      },
      {
        id: 1,
        title: "list",
        tasks: 12
      },
      {
        id: 2,
        title: "list",
        tasks: 3
      },
      {
        id: 1,
        title: "list",
        tasks: 12
      },
      {
        id: 2,
        title: "list",
        tasks: 3
      },
      {
        id: 1,
        title: "list",
        tasks: 12
      },
      {
        id: 2,
        title: "list",
        tasks: 3
      },
      {
        id: 1,
        title: "list",
        tasks: 12
      },
      {
        id: 2,
        title: "list",
        tasks: 3
      },
      {
        id: 1,
        title: "list",
        tasks: 12
      },
      {
        id: 2,
        title: "list",
        tasks: 3
      },
      {
        id: 1,
        title: "list",
        tasks: 12
      },
      {
        id: 2,
        title: "list",
        tasks: 3
      },
      {
        id: 1,
        title: "list",
        tasks: 12
      },
      {
        id: 2,
        title: "list",
        tasks: 3
      },
      {
        id: 2,
        title: "list",
        tasks: 3
      },
      {
        id: 2,
        title: "list",
        tasks: 3
      },
      {
        id: 2,
        title: "list",
        tasks: 3
      },
      {
        id: 2,
        title: "list",
        tasks: 3
      },
      {
        id: 2,
        title: "list",
        tasks: 3
      },
      {
        id: 2,
        title: "list",
        tasks: 3
      },
      {
        id: 2,
        title: "list",
        tasks: 3
      }
    ]
  })
};
</script>