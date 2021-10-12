import Vue from 'vue'
import VueRouter from 'vue-router'
import LytAuth from '../layouts/LytAuth.vue'
import Login from '../views/login/Login.vue'
import ForgotPassword from '../views/login/ForgotPassword.vue'
import ResetPassword from '../views/login/ResetPassword.vue'
import SetInitialPassword from '../views/login/SetInitialPassword.vue'
import SignUp from '../views/login/SignUp.vue'
import index from '../store/index'
import Home from '../views/home/Home.vue'
import PerfilView from '../views/home/PerfilView.vue'
import AddBook from '../views/home/AddBook.vue'
import EditBook from '../views/home/EditBook.vue'
import ViewBook from '../views/home/ViewBook.vue'
import MyBook from '../views/home/MyBook.vue'
import LytSPA from '../layouts/LytSPA.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    component: LytAuth,
    children:[
      {
        name: 'login',
        path: '/login',
        components:{
          allLog: Login
        }        
      },
      {
        name: 'ForgotPassword',
        path: '/forgot-password',
        components:{
          allLog: ForgotPassword
        }
      },
      {
        name: 'ResetPassword',
        path: '/reset-password',
        components:{
          allLog: ResetPassword
        }
      },
      {
        name: 'SetInitialPassword',
        path: '/set-initial-password',
        components:{
          allLog: SetInitialPassword
        }
      },
      {
        name: 'SignUp',
        path: '/sign-up',
        components:{
          allLog: SignUp
        },
      },
      {
        name: 'about', 
        path: '',
        components:{
          allLog: About
        }
      }
    ]
  },
  {
    path: '/',
    component: LytSPA,
    meta: {requireAuth: true},
    children:[
      {
        name: 'home',
        path: '/home',
        components:{
          allPages: Home
        }    
      },
      {
        name: 'PerfilView',
        path: '/perfil',
        //component:() => import(/* webpackChunkName: "PerfilView" */ '../views/home/PerfilView.vue'),
        components:{
          allPages: PerfilView
        }   
      },
      {
        name: 'AddBook',
        path: '/add-book',
        components:{
          allPages: AddBook
        }  
      },
      {
        name: 'MyBook',
        path: '/my-book',
        components:{
          allPages: MyBook
        }   
      },
      {
        name: 'ViewBook',
        path: '/view-book/:id',
        components:{
          allPages: ViewBook
        } 
      },
      {
        name: 'edit-book',
        path: '/edit-book/:id',
        components:{
          allPages: EditBook
        } 
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
  const routeProtect = to.matched.some(record=> record.meta.requireAuth);
  if(routeProtect && index.state.token ===''){
    next({name: 'login'});
  }else{
    next();
  }

})

export default router
