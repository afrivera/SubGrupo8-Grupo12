<template>  
    <v-app >
        <v-container class="fill-heigth" fluid  >
            <v-row align="center" justify="center">
                <v-col cols="12" sm="6" md="5">
                    <router-view name="allLog"></router-view>

                </v-col>

            </v-row>

        </v-container>
 </v-app>

<!--   -->
</template>

vue <script>
export default {
    name: 'LytAuth'
}
</script>

<style scoped>
.logo{
    background: url('/src/assets/logo.png');
    background-size: cover;
    background-position: center center;
}
</style>
