<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card class="card">
        <form @submit.prevent="login">
          <ion-item>
            <ion-label position="floating">Email</ion-label>
            <ion-input v-model="email" type="email" id="email" placeholder="Email" required></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Password</ion-label>
            <ion-input v-model="password" type="password" id="password" placeholder="Password" minlength="8" required></ion-input>
          </ion-item>
          <ion-text color="danger" v-if="passwordError">{{ passwordError }}</ion-text>
          <ion-button expand="full" type="submit" class="btn">Login</ion-button>
        </form>
      </ion-card>
      <router-view></router-view>
    </ion-content>
  </ion-page>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      passwordError: ''
    };
  },
  methods: {
    validatePassword() {
      if (this.password.length < 8) {
        this.passwordError = 'Password must be at least 8 characters long.';
        return false;
      } else {
        this.passwordError = '';
        return true;
      }
    },
    login() {
      if (this.validatePassword()) {
        axios.post('http://localhost:8000/api/login', {
          email: this.email,
          password: this.password
        })
        .then(response => {
          console.log('Login successful', response.data);
          this.$router.push({ name: 'MainMenu' });
        })
        .catch(error => {
          console.error('Login failed', error.response.data);
        });
      }
    }
  }
};
</script>

<style scoped>
.card {
  margin: 20px;
  padding: 20px;
}
</style>
