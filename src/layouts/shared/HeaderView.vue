<template>
    <v-app-bar app dark dense src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
        <v-toolbar-title> 
            
         BookXchange            
        </v-toolbar-title>       
        
        <v-spacer></v-spacer>

        <!-- <UserLogged/> -->
        <template v-slot:extension>
            <v-tabs model="optionSelected align-with-title">
                <v-tab v-for="option in options" :key="option.title" v-text="option.title" :to="option.route">
                </v-tab>
                <v-spacer></v-spacer>
                <v-tab>Buscar  <v-icon small>fas fa-search</v-icon></v-tab>  
                <v-btn @click="signOff">salir <v-icon></v-icon></v-btn>   
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
                    title: 'Usuarios',
                    route: '/home'
                },
                {
                    icon: 'user-tag',
                    title: 'perfiles',
                    route: 'perfil'
                },
                {
                    icon: 'user-tag',
                    title: 'Agregar Libro',
                    route: 'add-book'
                }
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