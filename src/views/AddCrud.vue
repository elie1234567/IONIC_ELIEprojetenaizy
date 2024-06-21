<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Ajouter un utilisateur</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Formulaire</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <form @submit.prevent="addCrud">
            <ion-item>
              <ion-label position="floating">Nom</ion-label>
              <ion-input v-model="crud.nom" required></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Prénom</ion-label>
              <ion-input v-model="crud.prenom" required></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Contact</ion-label>
              <ion-input v-model="crud.contact" required></ion-input>
            </ion-item>
            <ion-button expand="full" type="submit">Ajouter</ion-button>
          </form>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';
import api from '@/service/api';

export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton
  },
  data() {
    return {
      crud: {
        nom: '',
        prenom: '',
        contact: '',
      },
    };
  },
  methods: {
    addCrud() {
      api.createCrud(this.crud).then(() => {
        this.$router.push({ name: 'crudlist' });
      });
    },
  },
};
</script>

<style scoped>
ion-button {
  margin-top: 20px;
}
</style>
