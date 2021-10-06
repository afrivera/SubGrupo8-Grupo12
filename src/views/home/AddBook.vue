<template>
  <v-container fluid >
      <v-row align-content="center" justify="center">
        <v-col>
          <v-form
          ref="form"
          v-model="valid"
          @submit.prevent="searchBook()"
          >
            <v-text-field
              v-model="form.title"
              placeholder="Título"
              :counter="5"        
              label="Buscar libro"
              required
            ></v-text-field>   

            <!-- <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              type="submit"
            >
              Añadir libro
            </v-btn> -->
            <v-btn type="submit" color="success" class="mr-4">
              Buscar Libro
            </v-btn>

            <v-btn color="error" @click="reset" >
              Limpiar formulario
            </v-btn>

        </v-form>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col sm="4" class="pa-3" max-width="344" v-for="item in books" :key="item">
        <v-card class="pa-1" >
          <v-img src="require('getPhoto')" >
            {{item.volumeInfo.imageLinks.thumbnail}}        
          </v-img>

          <v-card-title>
            {{item.volumeInfo.title}}
          </v-card-title>

          <v-card-subtitle>
              Autors: {{item.volumeInfo.authors}}
          </v-card-subtitle>

          <v-btn color="primary" @click="addBook()">
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
                {{item.volumeInfo.description}}
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
        ...mapState(['token'])
    },
    data: () => ({
      valid: true,
      show: false,
      form:{
          title:'',
          isbn:'',
          author:'',
          imgStatus:''
      },
      books:[]
      
    }),

    mounted() {
      console.log("Hola mundo desde mounted");
    },

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
        const search = this.form.title;
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+ search +'+inauthor')
        //.then (res => res.json())
        .then (res => {
          console.log(search);
          console.log(res.data.items);
          this.books = res.data.items
        })
        .catch(e=> console.log(e))
        
      }
      
    },


}
</script>

<style>

</style>