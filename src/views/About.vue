
<template>  
  <v-app>
    <!-- Must have the app property -->
    <v-app-bar app color="blue"  >
        <v-col >
            <v-img  max-width="200" contain src= "../assets/LogoFondo800px.jpg"></v-img>
        </v-col>        
        <Menu app/>      

    </v-app-bar >

    <v-main>
      Hello World
      
    </v-main>
  </v-app>
</template>

<script>
  import Menu from '../components/Menu.vue'
  export default {
    data: () => ({
      links: [
        'Dashboard',
        'Messages',
        'Profile',
        'Updates',
      ],
      
    }),
    components: {
      Menu
    }
  }
</script>

