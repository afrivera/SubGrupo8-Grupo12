<template>
    <v-container fluid>        
        <h1>Editar Datos del libro</h1>
        <v-form
        ref="form"
        v-model="valid"
        @submit.prevent="actualizarLibro(book)"        >
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
                
            > Actualizar
            </v-btn>

            <v-btn
                color="error"
                class="mr-4"
                @click="reset"
            > Borrar formulario
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
                    console.log(res.data);
                    this.$router.push({ name: 'home' , params:{message: res.data.message} })
                })
                .catch(e=> console.log(e)) 
        },

        reset () {
        this.$refs.form.reset()
        },
       
    } ,
    async created(){
        const response = await this.axios.get(`book/edit/${this.$route.params.id}`)
        this.book = response.data   
    }

}
</script>

<style scoped>
    h1{
        font-size: 25px;
    }
</style>