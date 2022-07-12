<template>

  <section class="src-componentes-inicio">

    <div v-if="this.$store.state.juegoActual === null" class="jumbotron">
      <h2>VIDEOJUEGOS WEB DISPONIBLES</h2>
      <p>Dentro de esta sección podrás visualizar la lista de videojuegos disponibles dentro de la página. Selecciona un juego de tu gusto, al clickearlo te redireccionará hacia una página con la información del juego, y dentro de la misma podrás presionar el botón IR AL JUEGO para comenzar a jugar</p><hr>
        
      <Modal />
      
      <div class="container-fluid">
        <input type="text" class="form-control bg-dark" v-model="criterioDeBusquedaNombre" placeholder="Ingrese el nombre del juego que desee buscar">
        <div class="galeria">
          <article class="card" v-for="(juegoRecorrido,index) in this.juegosFiltrados" :key="index" >         
            <div class="button-container">
              <div v-if="(juegoRecorrido.vista !== '')">
                <img class="portada" :src="juegoRecorrido.portada1" :alt="juegoRecorrido.nombre" @click="accederVista(juegoRecorrido)">
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
      <VistaJuego />
    </div>

  </section>

</template>

<script>

  import Modal      from './Modal.vue'
  import VistaJuego from './VistaJuego.vue'

  export default  {
    name: 'src-componentes-inicio',
    props: [],
    mounted () {
      this.cargarJuegos()
    },
    components:{
      VistaJuego,
      Modal,
    },
    data () {
      return {
        // url : 'https://6286f9227864d2883e7c4e53.mockapi.io/listaJuegos/',
        // juegos: this.$store.state.juegos,
        criterioDeBusquedaNombre:   '',
        idActual: 0,
        mostrar: this.$store.state.formularioVisible,
      }
    },
    methods: {

      cargarJuegos(){
       this.$store.dispatch('cargarJuegos') // Genera los juegos en pantalla
      },
      borrarJuego(id){
        this.$store.dispatch('borrarJuego', id) //borra el juego segun id
      },
      accederVista(juegoRecibido){
        this.$store.dispatch('setJuego', juegoRecibido)
      },    
      cadenaLimpia(cadena){
        return this.quitarAcentos(cadena.toLowerCase())
      },
      quitarAcentos(cadena){
        const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
        return cadena.split('').map( letra => acentos[letra] || letra).join('').toString();	
      },              
      cadenaIncluye(cadena1,cadena2){
        return this.cadenaLimpia(cadena1).includes(this.cadenaLimpia(cadena2))
      },
    },
    computed: {
      juegosFiltrados() {
        return this.$store.state.juegos.filter((juego) => {
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
    background: linear-gradient(to bottom right, red 0%,green 40%,blue 90%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    background-attachment: fixed;
    border-radius: 20px;
    padding: 20px ;
  }

  .galeria{
    display: grid;
    grid-auto-rows: 11rem;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 0.5fr));
    margin-top: 1.5rem;
  }

  .card{
    background-color: #040336;
    border-radius: 20px;
    height: 9rem;
    width: 14rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-self: center;
  }

  .portada{
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
</style>
