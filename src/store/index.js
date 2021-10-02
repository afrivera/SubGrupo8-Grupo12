import Vue from 'vue'
import Vuex from 'vuex'

import index from '../router/index'

//para codificar el jwt
import decode from 'jwt-decode'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',
    userDB:''
  },
  mutations: {
    obtainUser(state, payload){
      state.token = payload;
      if(payload === ''){
        state.userDB =''
      }else{
        state.userDB = decode(payload)
        index.push({name: 'home'})
      }
    }
  },
  actions: {
    saveUser({commit}, payload){
      localStorage.setItem('token', payload);
      commit('obtainUser', payload)
    },
    signOff({commit}){
      commit('obtainUser', '');
      localStorage.removeItem('token');
      router.push({name:'login'})

    },
    readToken({commit}){

      const token = localStorage.getItem('token');
      if(token){
        commit('obtainUser', token);
      }else{
        commit('obtainUser', '');
      }

    }
  },
  getters:{
    isActive: state=>!!state.token
  }
})
