<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>CRUD List</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item v-for="crud in cruds" :key="crud.id">
          <ion-label>
            <h2>Nom: {{ crud.nom }}</h2>
            <h3>Prénom: {{ crud.prenom }}</h3>
            <p>Contact: {{ crud.contact }}</p>
          </ion-label>
          <ion-button color="danger" @click="deleteCrud(crud.id)">Delete</ion-button>
          <ion-button @click="editCrud(crud.id)">Modifier</ion-button>
        </ion-item>
      </ion-list>
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button @click="goToAddPage">
          <ion-icon name="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton, IonFab, IonFabButton, IonIcon } from '@ionic/vue';
import api from '@/service/api';

export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonFab,
    IonFabButton,
    IonIcon
  },
  data() {
    return {
      cruds: [],
    };
  },
  created() {
    this.fetchCruds();
  },
  methods: {
    fetchCruds() {
      api.getCruds().then((response) => {
        this.cruds = response.data;
      });
    },
    deleteCrud(id) {
      api.deleteCrud(id).then(() => {
        this.fetchCruds();
      });
    },
    goToAddPage() {
      this.$router.push({ name: 'AddCrud' });
    },
    editCrud(id) {
      this.$router.push({ name: 'ModCrud', params: { crudId: id } });
    },
  },
};
</script>

<style scoped>
ion-item {
  --padding-start: 10px;
  --inner-padding-end: 10px;
}

ion-button {
  margin-left: 10px;
}

ion-fab-button {
  --background: #3880ff;
}

ion-fab-button ion-icon {
  font-size: 24px;
}
</style>
