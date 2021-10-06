<template>
  <v-card class="elevation-3 __b-20" >
    <v-card-text>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" class="text-center">
            <h3 class="headline " >
              Iniciar Sesión
            </h3>
            <div class="mt-2">
              <v-btn class="red white--text" >
                <v-icon small >mdi-google-plus</v-icon>
                  Iniciar con Google
              </v-btn>              
            </div> 
            <div class="mt-2">
              <h3 class="headline">
              o Registrate
            </h3>
            </div>
          </v-col>
          <v-row align="center">
            <v-col cols="12" class="align-center">
              <v-form @submit.prevent="submit">
                <v-text-field v-model="form.email" label="Correo" type="email"  dense required/>
                <v-text-field 
                  id="password"
                  v-model="form.password"
                  label="Contraseña"
                  dense
                  :append-icon="visible ? 'mdi-eye-off':'mdi-eye'"
                  :type="visible ? 'text' : 'password'"
                  @click:append="()=> (visible =!visible)"                  
                />
                
                <div class="d-flex">
                  <v-row>
                    <v-col>
                      <v-btn color="primary" cols="12" class="text-none px-2" dense @click="goToSignup()">
                        Iniciar Sesión
                      </v-btn>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col>
                      <v-btn color="secondary" class="text-none px-2 __btn-login-text" dense :to="{name:'ForgotPassword'}">Olvide mi Contraseña</v-btn>
                    </v-col>
                  </v-row>
                  
                  
                </div>
                <div class="d-flex mt-5">
                  <span> ¿No tienes una cuenta?
                    <v-btn  text color="primary" class="text-none px-2 __btn-login-text" :to="{name:'SignUp'}">
                    Crear Cuenta
                  </v-btn>
                  </span>                                                    
                </div>                            
                                                
              </v-form>
              <v-alert type="error" dismissible v-if="msg !=''">{{msg}}</v-alert>

            </v-col>

          </v-row>
        </v-row>
      </v-container>
    </v-card-text>

  </v-card>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name:'Login',
    data() {
        return {
          visible: false,
          form: {
              email: '',
              password: ''
          },
          msg: ''
        }
    },
    
    methods: {
      ...mapActions(['saveUser']),
      goToSignup() {
          this.axios.post('/login', this.form)
            .then(res=>{
              console.log(res.data);
              const token = res.data.token;
              this.saveUser(token);
          })
            .catch(e=>{
              console.log(e.response);
              this.msg = e.response.data.msg
            })
      }


      /* this.$router.push({ name: 'SignUp' })
      },
      async login() {
        console.log(this.form); */
      /* try {
          const { data } = await this.axios.post('/login', this.form)
          this.$store.dispatch('save_token', data.data)
          this.$router.push({ name: 'admin' })
      } catch (e) {
          console.log(e)
      } */
        
    }
}
</script>

