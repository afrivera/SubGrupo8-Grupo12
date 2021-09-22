<template>
  <div class="home">
    <Header/>
      <div class="main">
            <div class="container registro">
                <h2 class="titulo">Registrate</h2>
                <form id="formulario" method="POST">
                    <div class="elemento">
                        <label for="usuario">Usuario</label>
                        <input type="text" id="usuario" name="usuario" required="true">
                    </div>
                    <div class="elemento">
                        <label for="password">Contraseña</label>
                        <input type="password" id="password" name="password" required="true">
                    </div>
                    <div class="elemento">
                        <input type="submit" value="Enviar" />
                    </div>
                </form>
                <div class="login-buttons">
                    <div class="elemento">
                        <button>Inicio de Sesion con Gmail</button>
                    </div>
                    <div class="elemento">
                        <button>loguito</button>
                    </div>
                    <div class="elemento">
                        <button>New User</button>
                    </div>
                </div>
            </div>
            
            <div class="container informulariocion">
                <h2 class="titulo">Quienes somos</h2>
                <p>BooksXchange es una plataformulario de intercambio de libros, podrás seleccionar y
                calificar tus favoritos y cuando alguien acepte alguno de tus libros lo podrás
                intercambiar con los de tu lista de favoritos.</p>
                <iframe width="400" height="200" src="https://www.youtube.com/embed/w47z_wz6XBA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            
        </div>
        <Footer></Footer>
  </div>
</template>

<script>

// @ is an alias to /src
import Header from '@/components/Header' 
import Footer from '@/components/Footer' 

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
.home{
    font-family: 'Glory', sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(#7209b7, #3f37c0);
}
.main {
    display: flex;
    height:max-content;
    align-items: center;
}

.informacion {
    height: auto;
}

.registro {
    height: fit-content;
    
}
.container{   
    margin: 50px auto;
    width: 400px;
    padding: 30px;
    background: rgba(0,0,0,.5);
    border-radius: 10px; 
}
.container h2{
    margin: 0 0 30px;
    padding: 0;
    font-size: 30px;
    color: #4cc9f0;
    text-align: center;
}
.container p{
    margin: 0 0 30px;
    padding: 0;
    font-size: 25px;
    color: #4cc9f0;
    text-align: left;
}
.login-buttons {
    text-align: center;
}
.elemento label{
    color: #4cc9f0;    
}
.elemento input{
    width: 100%;
    padding: 10px 0;
    color: #fff;
    background: transparent;
    border: 1px solid #4cc9f0;
    margin-bottom: 30px;
}

.elemento input[type="submit"]{
    background-color: #f72585;
    border: none;
    letter-spacing: 5px;
    text-transform: uppercase;
    cursor: pointer;
    padding: 15px;
    margin-top: 30px;
}
.elemento button{
    width: 60%;
    margin: 5px;
    padding: 10px 0;
    color: #fff;
    background: #f72585 ;
    border: 1;
    border-bottom: 1px solid #fff;    
}

</style>