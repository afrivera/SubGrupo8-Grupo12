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
              Atrás
            </h3>        
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="12" class="align-center">
            <v-form>
              <v-text-field label="Email" type="email" outlined dense />
              <v-btn class="text-none px-2 __btn-login-text primary" :to="{name:'login'}" >
                  Send to Email
              </v-btn>          
            </v-form>
          </v-col>
        </v-row>
      </v-container> 
    </v-card-text>
  </v-card>
</template>
<script>
export default {
    name: 'ForgotPassword'
}
</script>