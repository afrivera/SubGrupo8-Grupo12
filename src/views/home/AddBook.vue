<template>
  <v-container fluid >
      <h1>vista del addbook</h1>
      <v-row align-content="center" justify="center">
          <v-col>

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

    <v-checkbox
      
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      type="submit"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
  </v-form>
          </v-col>
      </v-row>
      
       
  </v-container>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'AddBook',
    computed:{
        ...mapState(['token'])
    },
    data: () => ({
      valid: true,
      form:{
          title:'',
          isbn:'',
          author:'',
          imgStatus:''
      }
      
    }),

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
      
    },


}
</script>

<style>

</style>