<template>

  <section class="src-componentes-inicio">
    <div v-if="idActual=='0'" class="jumbotron">
      <div>
        <h2>VIDEOJUEGOS WEB DISPONIBLES</h2>
        <p>Dentro de esta sección podrás visualizar la lista de videojuegos disponibles dentro de la página. Selecciona un juego de tu gusto, al clickearlo te redireccionará hacia una página con la información del juego, y dentro de la misma podrás presionar el botón IR AL JUEGO para comenzar a jugar</p><hr>
     
           
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-info mb-3" @click="mostrarFormulario()" data-toggle="modal" data-target="#formularioNuevoJuego">
              Recomendanos un juego!
            </button>

                    <div v-show="mostrar"> 
                      <!-- Modal -->
            <div class="modal fade" id="formularioNuevoJuego" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Formulario de Juego Nuevo</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <Formulario />
                  ...
                  <br>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
      
      <div class="container-fluid">
        <input type="text" class="form-control bg-dark" v-model="criterioDeBusquedaNombre" placeholder="Ingrese el nombre del juego que desee buscar">
        <div class="galeria">
          <article class="card" v-for="(juegoRecorrido,index) in this.juegosFiltrados" :key="index" >         
            <div class="button-container">
              <div v-if="(juegoRecorrido.vista !== '')">
                <img class="portada" :src="juegoRecorrido.portada1" :alt="juegoRecorrido.nombre" @click="accederVista(juegoRecorrido.id)">
              </div>
              <button class="btn btn-sm ml-3 mt-3" @click="borrarJuego(juegoRecorrido.id)">x</button> 
            </div>
          </article>
        </div>
          <h3 v-if="!juegosFiltrados.length" class="alert alert-danger">
            ERROR: No se encontraron resultados.
          </h3>
      </div>
    </div>
    <div v-else>
      <VistaJuego :idRecibida="idActual"/>
    </div>
  </section>

</template>

<script>

  // import Modal      from './Modal.vue'
  import VistaJuego from './VistaJuego.vue'
  import Formulario from './Formulario'

  export default  {
    name: 'src-componentes-inicio',
    props: [],
    beforeMount () {
      this.cargarJuegos()
    },
    components:{
      VistaJuego,
      //Modal,
      Formulario,
    },
    data () {
      return {
        url : 'https://6286f9227864d2883e7c4e53.mockapi.io/listaJuegos/',
        juegos: [
        ],
        criterioDeBusquedaNombre:   '',
        idActual: 0,
        mostrar: this.$store.state.formularioVisible,
      }
    },
    methods: {
      /* ------------------------------ */
      /*         API REST : GET         */
      /* ------------------------------ */
      async cargarJuegos() {
        this.mostrar = false;
        this.idActual = 0;
        try {
          let {data:juegosApi} = await this.axios(this.url)
          for (var i = 0; i < (juegosApi.length); i++){
            this.juegos.push(juegosApi[i])
          }
        }
        catch(error) {
          console.error('Error en getJuegos', error.message)
        }
      },
      cadenaIncluye(cadena1,cadena2){
        return this.cadenaLimpia(cadena1).includes(this.cadenaLimpia(cadena2))
      },
      /* ------------------------------ */
      /*       API REST : DELETE        */
      /* ------------------------------ */
      async borrarJuego(id) {
        console.log('borrarJuego', id)

        try {
          let {data:juego} = await this.axios.delete(this.url+id)
          console.log('AXIOS DELETE juego', id)

          let index = this.juegos.findIndex(game => game.id == juego.id)
          if(index == -1) throw new Error('juego no encontrado')
          console.log(index)
          this.juegos.splice(index,1)
        }
        catch(error) {
          console.error('Error en borrarJuego', error.message)
        }        
      },
      cadenaLimpia(cadena){
        return this.quitarAcentos(cadena.toLowerCase())
      },
      quitarAcentos(cadena){
        const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
        return cadena.split('').map( letra => acentos[letra] || letra).join('').toString();	
      },              
      accederVista(id){
        this.idActual = id;
      },    
    
    mostrarFormulario(){
      this.$store.dispatch('mostrarFormulario')
    }
    },
    computed: {
      juegosFiltrados() {
        return this.juegos.filter((juego) => {
          let nombreJuego      = `${juego.nombre}`
          let busquedaNombre   = this.criterioDeBusquedaNombre;
          let coincide         = true;

          if(busquedaNombre.length >= 3){                    
              //nombreJuego = (this.cadenaLimpia(nombreJuego).includes(this.cadenaLimpia(this.criterioDeBusquedaNombre))) && (this.cadenaLimpia(registroSegunDNI).includes(this.cadenaLimpia(this.criterioDeBusquedaDNI)) && (this.cadenaLimpia(registroSegunCorreo).includes(this.cadenaLimpia(this.criterioDeBusquedaCorreo))))
              coincide = ((this.cadenaIncluye(nombreJuego, busquedaNombre)))       
              }
          return coincide
      });
    },
    }   
}
</script>

<style scoped lang="css">
    
  .jumbotron {
    background-color: #283456;
    color: white;
  }

  hr {
    background-color: #bbb;
  }

  .form-control{
    border: 1px solid #00623b;
    color: white;
  }

  .container-fluid{
    /* background-color: rgba(14, 13, 82,0.8); */
    background: linear-gradient(to bottom right, red 0%,green 40%,blue 90%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    background-attachment: fixed;
    border-radius: 20px;
    padding: 20px ;
  }

  .galeria{
    display: grid;
    /*grid-template-columns: 3fr 1fr;*/
    grid-auto-rows: 11rem;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 0.5fr));
    margin-top: 1.5rem;
  }

  .card{
    background-color: #040336;
    border-radius: 20px;
    /* height: 150px;
    width: 270px; */
    height: 9rem;
    width: 14rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-self: center;
  }

  .portada{
    /* height: 150px;
    width: 270px; */
    height: 9rem;
    width: 14rem;
    border-radius: 20px;
    border-style: groove;
    margin-left: -1.5px;
    margin-top: -1.5px;

  }
  .card:hover{
    height: 10.5rem;
    width: 15.5rem;
  }

  .portada:hover{
    height: 10.5rem;
    width: 15.5rem;
  }

  .button-container{
    display:inline-block;
    position:relative;
    height: 9rem;
    width: 14rem;
  }

  .button-container button {
    position: absolute;
    border-radius: 3em;
    padding:1em 1.5em;
    bottom:7em;
    right:13em;
  }

  .button-container button:hover {
    color:rgba(255, 255, 255, 100%);
  }

  .button-container:hover .portada{
    height: 10.5rem;
    width: 15.5rem;
  }
  .modal-header {
    padding:9px 15px;
    border-bottom:1px solid #eee;
    background-color: #0480be;
    -webkit-border-top-left-radius: 5px;
    -webkit-border-top-right-radius: 5px;
    -moz-border-radius-topleft: 5px;
    -moz-border-radius-topright: 5px;
     border-top-left-radius: 5px;
     border-top-right-radius: 5px;
 }
 .modal-body{
  text-emphasis-color: black;
 }

</style>

