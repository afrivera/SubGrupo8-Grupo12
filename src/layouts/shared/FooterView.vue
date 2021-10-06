<template>
  <v-footer dark padless  >
    <v-row class="blue darken-3 white--text text-center">
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="30px" >
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        <strong> MISION TIC 2022 - UNIVERSIDAD TÉCNOLOGICA DE PEREIRA </strong>
      </v-card-text>
    </v-row>
  </v-footer>
</template>

<script>
export default {
    data: () => ({
      icons: [
        'mdi-google-plus',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],      
    }),
  }
</script>

<style scoped>
    footer {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 50px;
       /*  background-color: #8c191d !important; */
    }
</style>