<template>
    
    <v-app >        
        <v-app-bar app class="blue darken-3" >
            <v-col >
                <v-img  max-width="200" contain src = "../assets/LogoFondo800px.jpg"></v-img>
            </v-col>
            
            <Menu/>
        </v-app-bar >

        <v-main  fluid class="logo" >        
            <v-row align="center" justify="center">
                <v-col cols="12" sm="6" md="5">
                    <router-view name="allLog"></router-view>
                </v-col>
            </v-row>
        <FooterView/>
        </v-main>
    </v-app>

</template>

vue <script>
import FooterView from './shared/FooterView.vue'
import Menu from '../components/Menu.vue'

export default {
    name: 'LytAuth',
    components:{
        FooterView,
        Menu        
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
