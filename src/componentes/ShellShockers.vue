<template>

  <section class="src-componentes-shell-shockers">
    <div class="jumbotron">

      <div class="container-fluid contenedorGeneral">
        <h1><label>{{juego.nombre}}</label></h1>
        <hr>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="w-50 portada" :src="juego.portada1" alt="Slide1">
            </div>
            <div class="carousel-item">
              <img class="w-50 portada" :src="juego.portada2" alt="Slide2">
            </div>
            <div class="carousel-item">
              <img class="w-50 portada" :src="juego.portada3" alt="Slide3">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <hr>
        <!-- <img class="portada" :src="juego.portada" :alt="juego.nombre" :style="{'border-radius': '20px', 'margin-left':'20'}"> -->
        <div class="container-fluid">
          <h5>DESCRIPCION</h5>
          <p>{{ juego.descripcion }}</p>
          <hr>
            <div class="row">
              <div class="col-6">
                <button class="btn btn-success botonJugar" @click="goToGame()">IR AL JUEGO</button>
              </div>
              <div class="col-6">
                <div class="alert alert-warning calificacion">
                  <label>El juego seleccionado aún no ha sido calificado.</label>
                  <button class="btn btn-warning" onclick="alert('En un futuro este botón, te derivará a un formulario, el cual te permitirá calificar el juego.')">CALIFICAR</button>
                  <button class="btn btn-danger"  onclick="alert('En un futuro este botón, te derivará a un formulario, el cual te permitirá reportar el juego.')">REPORTAR</button>
                </div><br>
              </div>
            </div>
        </div>
      </div>

    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-shell-shockers',
    props: [],
    mounted () {
      this.obtenerJuegoById(1)
    },
    data () {
      return {
        url : 'https://6286f9227864d2883e7c4e53.mockapi.io/listaJuegos/',
        juego: {
        }
      }
    },
    methods: {
      async obtenerJuegoById(id){
        try {
        let {data:juego} = await this.axios.get(this.url+id)
        console.log(juego)
        this.juego = juego;
        }
        catch(error) {
          console.error('Error en goToGame', error.message)
        }
      },
      goToGame(){
        window.open(this.juego.url, '_blank');
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">

  .jumbotron {
    /*background: linear-gradient(to bottom right, red 0%,green 40%,blue 90%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    background: #283456;
    color: white;
  }

  .contenedorGeneral{
    background:#202a46;
    background-attachment: fixed;
    border-radius: 20px;
    padding: 20px;
    border-style: solid;
    border-color: #1a2238;
  }


  .calificacion{
    box-sizing: content-box;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    background-color: rgb(66, 66, 66);
    border-radius: 20px;
    position:relative;
    padding: 10px;
    float: right;
    width: 100%;
    justify-content: center;    
  }

  label{
    text-transform: uppercase;
    color: rgb(222, 202, 255);
    font-size: 1em;
    line-height: 1;
  }

  button{
    color:white;
  }

  .botonJugar{
    width: 100%;
    height: 4rem;
  }

  .calificacion button{
    position: relative;
    margin-left: 0.5em;
    bottom: 0.2em;
  }



  .descripcion{
    margin-top: 1rem;
  } 



  h1{
    padding: 2px;
    text-transform: uppercase;
    text-align: center;
  }

  hr {
    background-color: white;
  }  

  .carousel-inner{
    text-align: center;
    background-color: black;
  }

  .portada{
    border-radius: 20px;
    border-style: solid;
    max-width: 1000px;
  }
</style>
