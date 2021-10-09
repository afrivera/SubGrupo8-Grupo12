<template>
    <v-container fluid>
      <v-row no-gutters>
        <v-col sm="4" class="pa-3" v-for="(book, index) in books" :key="index">
                  
          <v-card
            class="pa-1"
            max-width="344"        
          >
            <v-img
              :src='book.imgStatus'
              height="200px"
              contain
            ></v-img>

            <v-card-title class="headline">
              {{book.title}}
            </v-card-title>

            <v-card-subtitle>
              {{book.author}}
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="orange lighten-2"
                text
              >
                Explore
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn
                icon
                @click="show = !show"
              >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text class="py-0">
                  {{book.isbn}}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
      </v-col>
      </v-row>
    </v-container>
</template>
  

<script>
  

  export default {
    name: 'Home',

    components: {           
    },
    data: () => ({
      show: false,
      books:[]
    }),
    created(){
      this.bookList()
    },
    methods:{
      bookList(){
        this.axios.get('/book')
          .then(res=>{
            console.log(res.data);
            this.books = res.data; 
          })
          .catch(e=>{
            console.log(e.response);
          })
      }
    }
  }
</script>
