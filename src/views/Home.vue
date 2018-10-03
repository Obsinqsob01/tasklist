<template>
  <div>
    <button @click="handleLogin()">Iniciar Sesión con Google</button>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'home',
  methods: {
    handleLogin() {
      let provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider).then(res => {
        alert(`Hola ${res.user.displayName}`)
      }).catch(error => {
        alert(error)
      })
    }
  }
}
</script>
