<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Main Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-button expand="full" @click="goToList">Liste des utilisateurs</ion-button>
          </ion-col>
          <ion-col>
            <ion-button expand="full" @click="goToAdd">Ajouter</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
      <router-view></router-view>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonButton } from '@ionic/vue';

export default {
  name: 'MainMenu',
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
  },
  methods: {
    goToList() {
      this.$router.push({ name: 'CrudList' });
    },
    goToAdd() {
      this.$router.push({ name: 'AddCrud' });
    },
  },
};
</script>

<style scoped>
ion-button {
  margin: 10px 0;
}
</style>
