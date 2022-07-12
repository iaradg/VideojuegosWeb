<template lang="html">

  <section class="src-componentes-modal">
        <button type="button" class="btn btn-info mb-3" data-toggle="modal" data-target="#formularioNuevoJuego">Recomendanos un juego! </button>
        
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
              </div>
              <!-- <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div> -->
            </div>
          </div>
        </div>
  </section>

</template>

<script lang="js">
  import Formulario from './Formulario'

  export default  {

    name: 'src-componentes-modal',
    props: [],
    mounted () {

    },
    components:{
      Formulario,
    },
    data () {
      return {

      }
    },
    methods: {
      mostrarFormulario(){
        this.$store.dispatch('mostrarFormulario')
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
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