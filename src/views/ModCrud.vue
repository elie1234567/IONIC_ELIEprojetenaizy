<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Modifier un utilisateur</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <form @submit.prevent="updateCrud">
        <ion-card>
          <ion-item>
            <ion-label position="stacked">Nom:</ion-label>
            <ion-input type="text" v-model="crud.nom" id="nom" required></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Prénom:</ion-label>
            <ion-input type="text" v-model="crud.prenom" id="prenom" required></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Contact:</ion-label>
            <ion-input type="text" v-model="crud.contact" id="contact" required></ion-input>
          </ion-item>
          <ion-button expand="full" type="submit">Enregistrer</ion-button>
        </ion-card>
      </form>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';
import api from '@/service/api';

export default {
  name: 'ModCrud',
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
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
      crudId: null,
    };
  },
  created() {
    this.crudId = this.$route.params.crudId;
    this.fetchCrud();
  },
  methods: {
    fetchCrud() {
      api.getCrud(this.crudId)
        .then((response) => {
          this.crud = response.data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    updateCrud() {
      if (!this.crud.contact) {
        alert('Veuillez saisir un contact valide');
        return;
      }
      api.updateCrud(this.crudId, this.crud)
        .then((response) => {
          console.log("Update response:", response);
          this.$router.push({ name: 'CrudList' });
        })
        .catch((error) => {
          console.error("Error updating data:", error);
        });
    },
  },
};
</script>

<style scoped>
ion-card {
  padding: 20px;
  margin: 20px;
}
ion-button {
  margin-top: 20px;
}
</style>
