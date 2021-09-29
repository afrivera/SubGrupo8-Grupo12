<template>
        <v-card class="elevation-0 __b-20">
          <v-card-text>
          <v-container fluid>
            <v-row>
              <v-col cols="12" class="text-center">
                
                <h3 class="headline">
                    <v-btn color="primary" icon :to="{name:'login'}">
                    <v-icon>mdi-arrow-left-thick</v-icon>
                </v-btn>
                  Set Password
                </h3>        
                </v-col>
            </v-row>
            <v-row align="center">
              <v-col cols="12" class="align-center">
                <v-form @submit.prevent="resetPassword">
                  <v-text-field v-model="user.password" id="inputPassword"
                                  :append-icon="showPass.new?'mdi-eye':'mdi-eye-off'"
                                  :type="showPass.new ?'text':'password'"
                                  name="password" label="Nueva contraseña"
                                  @click:append="showPass.new=!showPass.new"
                                  autocomplete="new-password">
                    </v-text-field>
                    <v-text-field v-model="user.confirmPassword" id="inputConfirmPassword"
                                  :append-icon="showPass.confirm?'mdi-eye':'mdi-eye-off'"
                                  :type="showPass.confirm ?'text':'password'"
                                  name="password_confirmation" label="Confirmar contraseña"
                                  @click:append="showPass.confirm=!showPass.confirm"
                                  autocomplete="new-password">
                    </v-text-field>
                    <div class="d-flex justify-start mt-2" >
                        <v-btn type="submit" color="primary" rounded>Set Password</v-btn>
                        
                    </div>

                  
                </v-form>
              </v-col>
            </v-row>
          </v-container> 
        </v-card-text>
        </v-card>
     
</template>

<script>
export default {
    name:'SetInitialPassword',
    data(){
      return {
        user:{
          password:null,
          confirmPassword:null
        },
        showPass:{
          new: false,
          confirm: false
        }
      }
      
    },
    methods:{
      resetPassword(){
        console.log("contraseñas", this.user);
      }
    }

}
</script>

<style>

</style>