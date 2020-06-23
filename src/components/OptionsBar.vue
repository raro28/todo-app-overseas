<template>
  <div>
    <v-card height="100%">
      <v-toolbar dark color="pink">
        <v-toolbar-title>Options</v-toolbar-title>
      </v-toolbar>
      <v-list>
        <v-list-group
          v-for="item in items"
          v-bind:key="item.action"
          v-bind:prepend-icon="item.action"
          v-model="item.active"
          no-action
        >
          <v-list-item slot="activator">
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            v-for="option in item.options"
            v-bind:key="option.title"
            v-on:click="apply(item.action, option.by)"
          >
            <v-list-item-content>
              <v-list-item-title>{{ option.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-card>
    <background-changer />
  </div>
</template>

<script>
import BackgroundChanger from "./BackgroundChanger";

export default {
  name: "OptionsBar",
  components: { BackgroundChanger },
  data: function() {
    return {
      items: [
        {
          action: "sort",
          title: "Sort by",
          active: true,
          options: [
            {
              title: "Date",
              by: "date"
            },
            {
              title: "Name",
              by: "name"
            }
          ]
        },
        {
          action: "filter_list",
          title: "Filter by",
          active: false,
          options: [
            {
              title: "Remaining",
              by: "remaining"
            },
            {
              title: "Completed",
              by: "completed"
            },
            {
              title: "All",
              by: "all"
            }
          ]
        },
        {
          action: "filter",
          title: "List Options",
          active: false,
          options: [
            {
              title: "Remove list",
              by: "remove"
            },
            {
              title: "Change backgroud",
              by: "background"
            }
          ]
        }
      ]
    };
  },
  methods: {
    sort: function(by) {
      console.log(by);
    },
    filter: function(by) {
      console.log(by);
    },
    apply: function(action, by) {
      console.log(action + " " + by);
    }
  }
};
</script>