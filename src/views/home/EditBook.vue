<template>
    <v-container fluid>        
        <h1>Editar Datos del libro</h1>
        <v-form
        ref="form"
        v-model="valid"
        @submit.prevent="actualizarLibro()"
        >
            <v-text-field
                v-model="book.title"
                label="titulo del Libro"
                required
            ></v-text-field>

            <v-text-field
                label="ISBN"
                v-model="book.isbn"
                required
            ></v-text-field>
            <v-text-field
                label="Autor"
                required
                v-model="book.author"
            ></v-text-field>

            <v-select
            v-model="book.bookStatus"
            :items="items"
            label="Status">
            </v-select>

            <v-textarea
                label="Descripción"
                v-model="book.bookDescription"
            ></v-textarea>

            <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                type="submit"
            >
                Actualizar
            </v-btn>

            <v-btn
                color="error"
                class="mr-4"
                @click="reset"
            >
                Borrar formulario
            </v-btn>

        </v-form>        
    </v-container>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'edit-book',
    data: ()=> {
        return{
            valid: true,
            book:{},
            botones:null,
            items:['Disponible', 'Proceso de intercambio', 'Intercambiado'],
            formulario:{}
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
        },
        reset () {
        this.$refs.form.reset()
        },
       
    } ,
    async created(){
        this.formulario = {};
        const response = await this.axios.get(`book/edit/${this.$route.params.id}`)
        this.book = response.data
        /* this.formulario.title = this.book.title
        this.formulario.author = this.book.author
        this.formulario.isbn = this.book.isbn
        this.formulario.status = this.book.bookStatus
        this.formulario.description = this.book.bookDescription */
        // console.log(this.status);
        // console.log('el formulario debe contener los datos siguientes a excepción de userId y _id:');
        //console.log('formulario:', this.formulario);
        // console.log('Los unicos modificable son: statusDescription(no aparece): en este campo se debe describir brevemente el estado del libro');
        // console.log("en el campo bookStatus debe tener solo estas opciones:\n ['Disponible', 'Proceso de Intercambio', 'Intercambiado'] ");
        // console.log(this.userDB.data._id);

    }

}
</script>

<style scoped>
    h1{
        font-size: 25px;
    }
</style>