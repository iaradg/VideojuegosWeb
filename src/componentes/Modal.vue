<template lang="html">

  <section class="src-componentes-modal">
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="formularioJuegoNuevo" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="formularioJuegoNuevo">¿Te gustaria que haya mas juegos? Contanos cual!</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
                  <!-- ACA VA EL FORM -->
                  <!-- ACA VA EL FORM -->
                  <Formulario />
                  <!-- ACA VA EL FORM -->
                  <!-- ACA VA EL FORM -->
              <button type="button" class="btn btn-primary" data-dismiss="modal">Save changes</button>
        
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
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

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-modal {

  }
</style>
