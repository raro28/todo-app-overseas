<template>
  <v-layout>
    <v-navigation-drawer v-model="open" absolute right temporary>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/women/90.jpg" alt="User avatar"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>User Name</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-form>
        <v-container fluid>
          <v-flex xs12>
            <v-img v-bind:src="imageUrl" alt="image url" height="150px"></v-img>
            <v-text-field
              label="Selected background"
              v-model="imageName"
              v-on:click="pickFile"
              prepend-icon="attach_file"
            ></v-text-field>
            <input
              type="file"
              style="display: none"
              ref="image"
              accept="image/*"
              v-on:change="onFilePicked"
            />
            <v-btn
              v-bind:loading="loading"
              v-bind:disabled="imageFile == null"
              v-on:click="uploadFile"
            >
              Set as background
              <v-icon dark right>cloud_upload</v-icon>
            </v-btn>
          </v-flex>
        </v-container>
      </v-form>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
export default {
  name: "BackgroundChanger",
  data: function() {
    return {
      imageUrl: "",
      imageName: "",
      loading: false,
      imageFile: null
    };
  },
  computed: {
    open: {
      get: function (){
        return this.$store.getters.DRAWER;
      },
      set: function(value){
        this.$store.commit("SET_DRAWER", value);
      },
    }
  },
  methods: {
    pickFile: function() {
      this.$refs.image.click();
    },
    onFilePicked: function(evt) {
      const files = evt.target.files;

      if (files[0] !== undefined) {
        this.imageName = files[0].name;
        if (this.imageName.indexOf(".") <= 0) {
          return;
        }

        const fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.addEventListener("load", () => {
          this.imageUrl = fr.result;
          this.imageFile = files[0];
        });
      } else {
        this.imageName = "";
        this.imageFile = null;
        this.imageUrl = "";
      }
    },
    uploadFile: function() {}
  }
};
</script>