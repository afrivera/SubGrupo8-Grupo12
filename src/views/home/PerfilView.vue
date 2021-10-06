import { mapState } from 'vuex';
<template>
  <v-container >
    <v-form>
        <v-card>
            <v-card-title class="">
                <div class="title-2 red--text">
                    DATOS DE USUARIO
                </div>
            </v-card-title>
            <v-col>
                <v-card-text>
                    <v-text-field id="inputName" name="name"  label="Nombre completo" >
                    </v-text-field>
                    <v-text-field id="inputUsername" name="username" disabled label="Usuario" v-model="userData.name">
                    </v-text-field>
                    <v-text-field  id="inputEmail" name="email" disabled label="Correo electrónico" v-model="userData.email">
                    </v-text-field>
                    <v-text-field id="inputProfile" name="profile" disabled
                                  label="rol" v-model="userData.rol">
                    </v-text-field>
                </v-card-text>
            </v-col>
        </v-card>
    </v-form>
   
  </v-container>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'PerfilView',
    computed:{
      ...mapState(['userDB'])
    },
    data(){
      return {
        userData:[]
      }
    },
    mounted(){
      this.getUser();
    },
    methods:{
      getUser(){
        const {_id} = this.userDB.data
        this.axios.get(`/user/${_id}`)
          .then(res=>{
            this.userData = res.data;
            console.log(this.userData);
          })
          .catch(e=>{
            console.log(e.response);
          })

      }
    }

}
</script>

<style>

</style>