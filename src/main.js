import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'                              

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyAoPCV7j7_6FelNucn145FJ1xOKx-C_V30",
  authDomain: "tasklist-b105a.firebaseapp.com",
  databaseURL: "https://tasklist-b105a.firebaseio.com",
  projectId: "tasklist-b105a",
  storageBucket: "",
  messagingSenderId: "966784454663"
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
