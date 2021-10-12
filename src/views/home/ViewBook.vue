<template>
  <v-container>
      <v-row no-gutters>
          <v-col sm="8" md="10"  lg="8" class="pa-4 mx-auto">
              <v-card class="pa-2" max-height="600">
                  <v-img max-height="300" contain :src="book.imgStatus"></v-img>
                  <v-card-actions class="pb-0">
                      <v-row class="mt-1 mx-1" >
                          <v-col>
                              <v-btn small outlined color="primary" >{{book.bookStatus}}</v-btn>
                          </v-col>
                          <v-col sm="10" class="d-flex justify-end" v-if="buttons">
                              <v-btn 
                                color="success" text
                                @click="goEdit()"
                              >Editar</v-btn>
                              <v-btn color="red" text @click="deleteBook()">Borrar</v-btn>
                          </v-col>
                      </v-row>
                  </v-card-actions>
                  <v-card-subtitle class="headline">
                      <h3>{{this.book.title}}</h3>
                  </v-card-subtitle>
                  <v-card-text class="gray--text">
                      {{this.book.bookDescription}}
                  </v-card-text>

              </v-card>

          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState(['token', 'userDB'])
    },
    data(){
        return{
            book: {},
            buttons:null

        }
    },
    methods:{
        async deleteBook(){
            let config = {
                headers:{
                    token:this.token
                }
            }
            await this.axios.delete(`book/${this.$route.params.id}`, config)
                .then(res=>{
                    // console.log(response);
                    // console.log(res.data);
                    this.$router.push({ name: 'home' , params:{message: res.data.message} })
                })
                .catch(e=> console.log(e)) 

        },
        goEdit(){
            this.$router.push({
                name:'edit-book', 
                params:{id:this.book._id}
            })
        },
        async mostrarBotones(){
            const response = await this.axios.get(`book/edit/${this.$route.params.id}`)
            this.book = response.data
            // console.log(this.book);
            // console.log(this.userDB.data._id);
            if (this.book.userId=== this.userDB.data._id) {
                this.buttons = true
            }
        }
    
    },
    async created(){
        /* const response = await this.axios.get(`book/edit/${this.$route.params.id}`)
        this.book = response.data
        // console.log(this.book); */
        this.mostrarBotones();
    }
}
</script>

<style>

</style>