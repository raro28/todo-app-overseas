import Vue from 'vue';
import vuetify from '@/plugins/vuetify';
import VueRouter from 'vue-router';

import App from './App.vue';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Todo from './components/Todo';
import Tasks from './components/Tasks';
import NotesModal from './components/NotesModal';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Todo,
    name: 'todo',
    children: [
      {
        path: 'list/:id',
        components: {tasks: Tasks},
        name: 'tasks',
        children: [
          {
            path: 'tasks/:tid',
            components: {notes: NotesModal},
            name: 'notes'
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  },
  {
    path: '/signup',
    component: Signup,
    name: 'signup'
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
  base: '/'
});

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')