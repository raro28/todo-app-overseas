<template>
  <v-layout row justify-center>
    <v-dialog v-model="open" scrollable max-width="60%">
      <v-card>
        <v-card-title>
          <span class="headline">Task title</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form>
              <v-textarea
                outlined
                v-model="note"
                label="Note"
                placeholder="Start writing your note here"
              ></v-textarea>
              <v-btn color="success">Save</v-btn>
            </v-form>
          </v-container>
          <v-list three-line subheader>
            <v-subheader>Notes</v-subheader>
            <v-list-item v-for="note in notes" v-bind:key="note.id">
              <v-list-item-content>
                <v-list-item-title>{{note.note}}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                  <v-btn icon>
                      <v-icon color="red">delete</v-icon>
                  </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card-text>
        <v-card-actions>
            <v-btn text color="primary">Close</v-btn>
            <v-spacer></v-spacer>
            <v-btn text dark color="red">Remove task</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: "NotesModal",
  data: function() {
    return {
      open: true,
      note: "",
      notes: [
        {
          id: 0,
          note: "random note"
        },
        {
          id: 2,
          note: "random note"
        },
        {
          id: 3,
          note: "random note"
        }
      ]
    };
  }
};
</script>