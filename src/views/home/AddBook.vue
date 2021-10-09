<template>
  <v-container fluid>

    <v-row align-content="center" justify="center" no-gutters>
      <v-col>
        <h1>Ingresar datos del libro</h1>
        <v-form
          ref="form"
          v-model="valid"
          @submit.prevent="addBook()"
          >
          <v-text-field
            v-model="form.title"
            :counter="10"
            
            label="titulo del Libro"
            required
          ></v-text-field>

          <v-text-field
            v-model="form.isbn"
            label="ISBN"
            required
          ></v-text-field>
          <v-text-field
            v-model="form.author"
            label="Autor"
            required
          ></v-text-field>
          <v-text-field
            v-model="form.imgStatus"
            label="Cargar Imagenes"
            required
          ></v-text-field>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            type="submit"
          >
            Añadir libro
          </v-btn>

          <v-btn
            color="error"
            class="mr-4"
            @click="reset"
          >
            Borrar formulario
          </v-btn>

          <!-- <v-btn
            color="warning"
            @click="resetValidation"
          >
            Reset Validation
          </v-btn> -->
        </v-form>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col >
        <v-form
          ref="form"
          v-model="valid"
          @submit.prevent="searchBook()"
          >
            <h1>Buscar datos del libro</h1>
            <v-text-field
              v-model="form.search"
              placeholder="Título, autor"
              :counter="50"        
              label="Buscar libro"
              required
            >
              <v-icon slot="append">mdi-magnify</v-icon> 
            </v-text-field>   

            <v-btn type="submit" color="secondary" class="mr-5">
              Buscar Libro
            </v-btn>
        </v-form>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col sm="5" class="pa-3" max-width="350" v-for="({volumeInfo:{imageLinks='sin valor', title, authors, description, industryIdentifiers} }, index) in books" :key="index">
        <v-card class="pa-2" >
          
          <v-img v-if="imageLinks.thumbnail" :src="imageLinks.thumbnail" max-height="200" contain>                
          </v-img>
          <v-img v-else src="http://www.culturamas.es/wp-content/uploads/2015/11/libro.jpg" max-height="200" contain>                
          </v-img>

          <v-card-title>
            {{title}}
          </v-card-title>

          <v-card-subtitle>
              Autors: {{authors[0]}} 
          </v-card-subtitle >
          
          <v-card-subtitle >
            ISBN: {{industryIdentifiers[0].identifier}} 
          </v-card-subtitle>

          <v-btn color="success" @click="addBook()">
            Añadir libro
          </v-btn>

          <v-card-actions>
            <v-btn color="orange darken-2" text>
              Descripción
            </v-btn>

            <v-btn icon @click="show = !show">
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text class="py-0 ma-2">
                {{description}}
              </v-card-text>
            </div>
          </v-expand-transition>
          
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapState} from 'vuex'
import axios from 'axios'

export default {
    name: 'AddBook',
    computed:{
        ...mapState(['token', 'userDB'])
    },
    data: () => ({
      valid: true,
      show: false,
      form:{
          title:'',
          isbn:'',
          author:'',
          imgStatus:'',
          search:''
      },
      books:[]
      
    }),
    created(){
      // console.log(this.userDB);
    },

   /*  mounted() {
      console.log("Hola mundo desde mounted");
    }, */

    methods: {
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      addBook(){
        let config = {
          headers:{
            token:this.token
          }
        }
        this.axios.post('/new-book', this.form, config)
        .then(res=>{
          console.log(res.data);
            this.$router.push({ name: 'home' })
        })
        .catch(e=>{
          console.log(e.response);
        })
      },
      
      searchBook(){
        const search = this.form.search;
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+ search +'+title')
        //.then (res => res.json())
        .then (res => {
          console.log(search);
          const {items} = res.data;
          console.log(items);
          this.books = items;
        })
        .catch(e=> console.log(e))        
      }
      
    },
}
</script>

<style>

</style>