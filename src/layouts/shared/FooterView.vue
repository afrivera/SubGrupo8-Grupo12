<template>

  <v-footer app dark padless >
    <v-row class="black white--text text-center">
      <v-card-text>
        <v-btn
          v-for="(icon, index) in icons"
          :key="index"
          class="mx-4 white--text"
          icon
          :href="icon.url" :target="icon.target"
        >          
          <v-icon size="30px">
            {{ icon.name }}
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
        {
          name:'mdi-google-plus',
          url: "https://sites.google.com/view/booksxchange/inicio",
          target: '_blank'
        },
        {
          name: 'fab fa-github',
          url: "",
          target: '_blank'        
        },
        {
          name: 'mdi-linkedin',
          url: "",
          target: '_blank'
        },
        
        {
          name: 'mdi-instagram',
          url: "",
          target: '_blank'
        }
      ],      
    }),
  }
</script>

<style scoped>
    footer {
        position: relative;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 50px;
    }
</style>