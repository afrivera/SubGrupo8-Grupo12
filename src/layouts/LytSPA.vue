<template>
    <v-app>
        <v-container fluid>
            <HeaderView/>           
           
            <router-view name="allPages"></router-view>           

            <FooterView/>
        </v-container>
    </v-app>
  
</template>

<script>
import HeaderView from './shared/HeaderView.vue'
import FooterView from './shared/FooterView.vue'


export default {
    name:'LytSPA',
    components:{
        HeaderView,
        FooterView        
    }
}
</script>

<style>

</style>