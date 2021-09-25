<template>
     <nav class="header">
            <div class="imagen-logo">
                <router-link to="/" class="top-bar-link"> <img src="../assets/logo.png" alt=""></router-link>
            </div>
            <div class="menu">
                <ul>
                    <li><router-link to="/" class="top-bar-link">Home</router-link></li>
                    <li><router-link to="/perfil" class="top-bar-link">Perfil</router-link></li>
                    <li><router-link to="/mi-lista" class="top-bar-link">Mi Lista</router-link></li>
                    <li><router-link to="buscar" class="top-bar-link">Buscar</router-link></li>
                </ul>
            </div>
        </nav>
</template>

<style scoped>
.header{
    display: flex;
    padding: 20px 30px;
    height: 80px;
    background-color: #212529;
    justify-content: space-between;
    align-items: center;
    font-size: 25px;
}

.header ul{
    display: flex;
}

.header li {
    padding-right: 20px;
    list-style: none;
}

.header li a {
    color: #4cc9f0;
    text-decoration: none;
}
.imagen-logo img{
    height:80px ;
}
</style>