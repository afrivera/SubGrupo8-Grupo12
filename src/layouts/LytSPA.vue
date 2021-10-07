<template>
    <v-app>
        <v-container fluid>
            <HeaderView/>
            
            <v-main>
                <router-view name="allPages"></router-view>
            </v-main>

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