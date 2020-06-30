<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevetion-12">
          <v-toolbar dark color="blue">
            <v-toolbar-title>Signup form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-alert :value="true" color="error" icon="warning">The user arleady exists.</v-alert>
              <v-text-field
                prepend-icon="person"
                name="login"
                label="Login"
                :rules="[rules.required]"
              ></v-text-field>
              <v-text-field
                prepend-icon="email"
                name="email"
                label="E-Mail"
                :rules="[rules.required, rules.email]"
              ></v-text-field>
              <v-text-field
                prepend-icon="lock"
                name="password"
                label="Password"
                :rules="[rules.required]"
                type="password"
                v-model="password"
              ></v-text-field>
              <v-text-field
                prepend-icon="lock"
                name="password-confirm"
                label="Password Confirmation"
                :rules="[rules.required]"
                type="password"
                v-model="passwordConfirm"
                :error="!valid()"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn to="/login" rounded dark color="black">Log in</v-btn>
            <v-spacer></v-spacer>
            <v-btn rounded color="success" v-on:click="register">
              Register
              <v-icon>keyboard_arrow_up</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Signup",
  data: () => ({
    rules: {
      required: value => !!value || "Required",
      email: value => {
        const pattern = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
        return pattern.test(value) || "Invalid e-mail";
      }
    },
    password: "",
    passwordConfirm: ""
  }),
  methods: {
    valid: function() {
      return this.password === this.passwordConfirm;
    },
    register: function(){
      this.$router.push('/login');
    }
  }
};
</script>