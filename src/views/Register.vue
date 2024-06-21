<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Register</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card class="card">
        <form @submit.prevent="register">
          <ion-item>
            <ion-label position="floating">Name</ion-label>
            <ion-input v-model="name" type="text" id="name" placeholder="Name" required></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Email</ion-label>
            <ion-input v-model="email" type="email" id="email" placeholder="Email" required></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Password</ion-label>
            <ion-input v-model="password" type="password" id="password" placeholder="Password" minlength="8" required></ion-input>
          </ion-item>
          <ion-text color="danger" v-if="passwordError">{{ passwordError }}</ion-text>
          <ion-button expand="full" type="submit" class="btn">Register</ion-button>
        </form>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import axios from 'axios';
import Login from '@/views/Login.vue';
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      passwordError: '',
      registrationSuccessful: false
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
    register() {
      if (this.validatePassword()) {
        axios.post('http://localhost:8000/api/register', {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then(response => {
          console.log('Registration successful', response.data);
          this.registrationSuccessful = true;
        })
        .catch(error => {
          console.error('Registration failed', error.response.data);
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
