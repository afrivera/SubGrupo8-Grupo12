<template >
  <v-card class="elevation-6 __b-20">
    <v-card-text>
      <v-container fluid>
        <v-row>
          <v-col cols="12" class="text-center" color="primary">
            <h1 class="headline" >
              Registro
            </h1>
            <h3 >
              <v-btn color="primary" icon :to="{name:'login'}">
                <v-icon>mdi-arrow-left-thick</v-icon>
              </v-btn>
              Atrás
            </h3>             
          </v-col>
        </v-row>
        
        <v-row align="center" justify="center">
          <v-col cols="6" class="align-center">
            <v-form @submit.prevent="signup()">
              <v-text-field v-model="form.name" label="Name" type="text" outlined dense />
              <v-text-field v-model="form.email" label="Email" type="email" outlined dense />
              <v-text-field
                id="password"
                v-model="form.password"
                label="Password"
                outlined
                dense
                :append-icon="visibility ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visibility ? 'text' : 'password'"
                @click:append="() => (visibility = !visibility)"
              />
              <div class="d-flex">
                <v-btn color="primary" type="submit" class="text-none px-2 __btn-login-text">
                  Registrarse
                </v-btn>
                <v-spacer />
                <v-btn color="secondary" class="text-none px-2" :to="{name:'login'}">
                  Cancelar
                </v-btn>
              </div>              
            </v-form>
          </v-col>
          
          <v-col cols="6">
            <v-container>
              <v-img src="@/assets/logo.jpeg" content-class="" alt="Logo" position="center center" />

            </v-container>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="12" >
            <v-alert             
              dismissible
              :type="mensaje.color"
              v-if="mensaje.texto !=''">{{mensaje.texto}}
            </v-alert>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
  
</template>

<script>
export default {
  data() {
    return {
      visibility: false,
      form: {
        name: '',
        email: '',
        password: ''
      },
      mensaje: {color: '', texto: ''},
    }
  },
  methods: {
    async signup() {
      /* try {
        const { data } = await this.axios.post('/signup', this.form)
        this.$store.dispatch('save_token', data.data)
        this.$router.push({ name: 'admin' })
      } catch (e) {
        console.log(e)
      } */
      //console.log(this.form);
      this.axios.post('/new-user', this.form)
        .then(res=>{
          console.log(res.data);
          this.mensaje.color="success"
          this.mensaje.texto="Usuario Creado con Exito"
        })
        .catch(e=>{
          console.log(e.response);
          this.mensaje.color="error"
          this.mensaje.texto= e.response.data.msg
        })

    },
    goToLogin() {
      this.$router.push({ name: 'login' })
    },
  }
}
</script>

<style scoped>
.headline {
  font-size: 30px;
}
</style>

