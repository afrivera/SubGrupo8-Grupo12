<template>
  <v-container fluid>
    <v-row align-content="center" justify="center">
      <v-col >
        <h1>Ingresar datos del libro</h1>
        <v-form
          ref="form"
          v-model="valid"
          @submit.prevent="addBook()"
          >
          <v-text-field
            v-model="formulario.title"
            label="titulo del Libro"
            required
          ></v-text-field>

          <v-text-field
            v-model="formulario.isbn"
            label="ISBN"

            required
          ></v-text-field>
          <v-text-field
            v-model="formulario.author"
            label="Autor"
            required

          ></v-text-field>

          <v-text-field
            v-model="formulario.imgStatus"
            label="Cargar Imagenes"

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

        </v-form>
      </v-col>
    </v-row>

    <v-row class="mt-5">
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
      <v-col sm="5" class="pa-3" max-width="350" v-for="({imageLinks={thumbnail:'http://www.culturamas.es/wp-content/uploads/2015/11/libro.jpg'}, title, authors=['Desconocido'], description, industryIdentifiers=['Desconocido']} , index) in books" :key="index">
        <v-card class="pa-2" >
          
          <v-img :src="imageLinks.thumbnail" max-height="200" contain>
          </v-img>
          

          <v-card-title>
            {{title.substring(0,40)}}
          </v-card-title>

          <v-card-subtitle v-if="authors">
              Autors: {{authors[0]}} 
          </v-card-subtitle >
          
          <v-card-text >
            ISBN: {{industryIdentifiers[0].identifier}} 
          </v-card-text>

          <v-btn color="success" text @click="selectBook(index)">
            Seleccionar
          </v-btn>

          <v-card-actions>
            <v-btn color="orange darken-2" text>
              Descripción
            </v-btn>

            <v-btn icon @click="show = !show">
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition mode="in-out">
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
    components: {},
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
      formulario : {},
      books:[]
      
    }),
    created(){
      // console.log(this.userDB);
    },

    methods: {
      reset () {
        this.$refs.form.reset()
      },
      async addBook(){
        let config = {
          headers:{
            token:this.token
          }
        }
        await this.axios.post('/new-book', this.formulario, config)
          .then(res=>{
            // console.log(res)
            this.$router.push({ name: 'home', params:{message: res.data.message} })
          })
          .catch(e=>{
            console.log(e.response);
          })
      },
      
      async searchBook(){
        this.books=[];
        const search = this.form.search;
        await axios.get('https://www.googleapis.com/books/v1/volumes?q='+ search +'+title')

        .then (res => {
          // console.log(search);
          const {items} = res.data;
          items.forEach(element => {
           /*  const {title, authors,imageLinks='sin contenido',description='sin descripción',industryIdentifiers=['Desconocido']} = element.volumeInfo
            const {thumbnail='http://www.culturamas.es/wp-content/uploads/2015/11/libro.jpg',} = imageLinks
            const {identifier='desconocido'} = industryIdentifiers
            console.table(title, authors, thumbnail,identifier,description); */
            this.books.push(element.volumeInfo)
            console.log(this.books);
          });
          // console.log(items);
          // this.books = items;
          
        })

        .catch(e=> console.log(e))    
          
      },
      async selectBook(index){
        this.formulario = {}
        const {title, authors,imageLinks='sin contenido',description='sin descripción',industryIdentifiers=['Desconocido'] } = this.books[index];
        const {identifier} = industryIdentifiers[0]
        this.formulario.title = title
        this.formulario.isbn = identifier
        this.formulario.author = authors[0]
        this.formulario.imgStatus = imageLinks.thumbnail
        this.formulario.bookDescription = description
        // this.formulario.push(selecte)
        // console.log(this.formulario);
      }

    },
}
</script>

<style scoped>
  h1{
        font-size: 25px;
    }
</style>