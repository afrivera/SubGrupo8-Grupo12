<template >
  <v-card class="elevation-6 __b-20" >
          <v-card-text>
            <v-container fluid>
              <v-row>
                <v-col cols="12" class="text-center">
                  <h3 class="headline">
                    BOOKXCHANGE
                  </h3>
                  <h4 class="subtitle-1 mb-3">
                    Registro
                  </h4>
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
                      <v-btn text color="primary" class="text-none px-2 __btn-login-text" @click="goToLogin()">
                        Iniciar
                      </v-btn>
                      <v-spacer />
                      <v-btn color="primary" class="text-none px-2" type="submit">
                        Registrarse
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
      }
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
        })
        .catch(e=>{
          console.log(e.response);
        })

    },
    goToLogin() {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>