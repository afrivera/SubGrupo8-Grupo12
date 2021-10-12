<template>
    <v-container>
        <h1>Hola Mundo desde edit</h1>
        <v-form>
        <v-btn  @click="actualizarLibro" name></v-btn>
        </v-form>
    </v-container>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'edit-book',
    data(){
        return{
            book:{},
            botones:null
        }
    },
    computed:{
        ...mapState(['userDB', 'token'])
    },
    methods:{
        async actualizarLibro(){
            let config = {
                headers:{
                    token:this.token
                }
            }
            await this.axios.put(`book/${this.$route.params.id}`, /* aqui va el nombre del formulario --->*/ this.book, config)
                .then(res=>{
                    // console.log(response);
                    console.log(res.data);
                    // this.$router.push({ name: 'home' , params:{message: res.data.message} })
                })
                .catch(e=> console.log(e)) 
        }

       
    } ,
    async created(){
        const response = await this.axios.get(`book/edit/${this.$route.params.id}`)
        this.book = response.data     
        console.log('el formulario debe contener los datos siguientes a excepción de userId y _id:');
        console.log(this.book);
        console.log('Los unicos modificable son: statusDescription(no aparece): en este campo se debe describir brevemente el estado del libro');
        console.log("en el campo bookStatus debe tener solo estas opciones:\n ['Disponible', 'Proceso de Intercambio', 'Intercambiado'] ");
        // console.log(this.userDB.data._id);

    }

}
</script>

<style>

</style>