<template>
  <v-footer dark padless class="mt-10" >
    <v-row class="blue darken-3 white--text text-center">
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >          
          <a :href="icon.url" :target="icon.target">
            <v-icon size="30px">{{ icon.name }}</v-icon>
          </a>
          
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
          url: "https://github.com/afrivera/SubGrupo1-Grupo59",
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
    a:link{
      text-decoration: none;
    }
    footer {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 50px;
        background-color: #8c191d !important;
    }
</style>