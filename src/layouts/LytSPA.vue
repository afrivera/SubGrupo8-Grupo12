<template>
    <v-app>
            <HeaderView app/>           
        <v-container fluid>
           
            <router-view name="allPages"></router-view>           

        </v-container>
            <FooterView app/>
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