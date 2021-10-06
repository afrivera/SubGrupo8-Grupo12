<template>
    <v-app-bar app dark class="blue darken-3 white--text ">         
        <v-row >
            <v-img  max-width="200" contain src="/src/assets/LogoFondo800px.jpg" alt="BookXchange"></v-img>
        </v-row> 
        
        <!-- <UserLogged/> -->
        <template v-slot:extension>
            <v-tabs model="optionSelected align-with-title">
                <v-tab v-for="(option, index) in options" :key="index" v-text="option.title" :to="option.route">
                </v-tab>
                <v-spacer></v-spacer>
                <v-tab>Buscar  <v-icon small>fas fa-search</v-icon></v-tab>  
                <v-tab><v-btn @click="signOff" text>salir <v-icon>mdi-logout</v-icon></v-btn>   </v-tab>
            </v-tabs>
        </template>   
    </v-app-bar>
    
</template>

<script>
//import UserLogged from '../userLogged/UserLogged.vue'
import { mapActions } from 'vuex'

export default {
    name: 'HeaderView',
    data(){
        return{
            optionSelecte:0,
            options:[
                {
                    icon: 'mdi-account',
                    title: 'Inicio',
                    route: '/home'
                },
                {
                    icon: 'user-tag',
                    title: 'Agregar Libro',
                    route: 'add-book'
                },
                {
                    icon: 'user-tag',
                    title: 'Mis libros',
                    route: 'my-book'
                },
                {
                    icon: 'user-tag',
                    title: 'Mi Perfil',
                    route: 'perfil'
                },
            ],
        }
    },/* ,
    components:{
        UserLogged
    } */
    methods:{
        ...mapActions(['signOff'])
    }

}
</script>

<style>

</style>