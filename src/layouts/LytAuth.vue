<template>    
    <v-app >                
        <v-app-bar app class="black ">
            <v-row >
                <v-img  max-width="200" src="../assets/LogoNoFondo800px.png" alt="BookXchange"></v-img>
            </v-row>             
            <v-tabs dark centered class=" ml-n9" color="indigo" >
                <v-tab color="text--indigo" v-for="link in links" :key="link" v-text="link.title" :to="link.route">
                    {{ link }}
                </v-tab>
            </v-tabs>
        </v-app-bar >

        <v-main  fluid class="logo" > 
            <v-row align="center" justify="center">
                <v-col cols="12" sm="6" md="5">
                    <router-view name="allLog"></router-view>
                </v-col>
            </v-row>                
        </v-main>

        <v-footer>
            <FooterView/>
        </v-footer>

    </v-app>

</template>

vue <script>
import FooterView from './shared/FooterView.vue'

export default {
    data: () => ({
      links: [
        {
            title: 'Acerca de Nosotros',
            route: '/about'
        }, 
        {
            title: 'Registrate',
            route: 'login'
        }
      ]
      
    }),

    name: 'LytAuth',
    
    components:{
        FooterView
    }
}
</script>

<style scoped>
.logo{
    
    background-image: url('../assets/Background.png');
    background-size: cover;
    background-position: center center;
}
</style>
