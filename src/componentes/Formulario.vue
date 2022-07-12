<template>

  <section class="src-componentes-formulario">
      <vue-form :state="formState" @submit.prevent="enviar()">
        
        <!--CAMPO Y VALIDACIONES-->

        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            class="form-control"
            name="nombre" 
            autocomplete="off"
            v-model.trim="formData.nombre"
            required 
            :minlength="minNombre"
            :maxlength="maxNombre"
          />
    
          <field-messages name="nombre" show="$dirty">
            <div slot="required"    class="alert alert-danger mt-1"> Campo requerido</div>
            <div slot="minlength"   class="alert alert-danger mt-1"> Minimo {{minNombre}} caracteres</div>
          </field-messages>
        </validate>

        <br>

        <!--CAMPO Y VALIDACIONES-->

        <validate tag="div">
          <label for="descripcion">Descripcion</label>
          <input
            type="text"
            id="descripcion"
            class="form-control"
            name="descripcion" 
            autocomplete="off"
            v-model.trim="formData.descripcion"
            :minlength="minDesc"
            :maxlength="maxDesc"
          />
    
          <field-messages name="descripcion" show="$dirty">
            <div slot="required"    class="alert alert-danger mt-1"> Campo requerido</div>
            <div slot="minlength"   class="alert alert-danger mt-1"> Minimo {{minDesc}} caracteres</div>
            <div slot="minlength"   class="alert alert-danger mt-1"> Maximo {{maxDesc}} caracteres</div>
          </field-messages>
        </validate>

        <br>

        <!--CAMPO Y VALIDACIONES-->

        <validate tag="div">
          <label for="url">URL</label>
          <input
            type="text"
            id="url"
            class="form-control"
            name="url" 
            autocomplete="off"
            v-model.number="formData.url"
            required
          />
    
          <field-messages name="url" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
          </field-messages>
        </validate>

        <br>

        <!--CAMPO Y VALIDACIONES-->

        <validate tag="div">
          <label for="portada1">FOTO PORTADA (opcional)</label>
          <input
            type="text"
            id="portada1"
            class="form-control"
            name="portada1" 
            autocomplete="off"
          />
    
          <field-messages name="portada1" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
          </field-messages>
        </validate>

        <br>
        <div class="ContenedorBoton">
          <button class="btn btn-primary" :disabled="formState.$invalid" >ENVIAR</button>
        </div>
      </vue-form>

  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-formulario',
    props: [],
    mounted () {
    },
    data () {
      return {
        formState: {

        },
        formData: this.getInitialData(),
        minNombre: 3,
        maxNombre: 25,
        minDesc: 25,
        maxDesc: 120,
        url: 'https://6286f9227864d2883e7c4e53.mockapi.io/listaJuegos/',      
      }
    },
    methods: {
      getInitialData(){
        return {
          nombre:       null,
          descripcion:  null,
          portada1:     'https://www.biworldwide.com/globalassets/es-co/solutions-es/juegos-virtuales/biw-game-arcade_hero.png?width=720&height=630&mode=crop&scale=both',
          portada2:     'https://www.biworldwide.com/globalassets/es-co/solutions-es/juegos-virtuales/biw-game-arcade_hero.png?width=720&height=630&mode=crop&scale=both',
          portada3:     'https://www.biworldwide.com/globalassets/es-co/solutions-es/juegos-virtuales/biw-game-arcade_hero.png?width=720&height=630&mode=crop&scale=both',
          cantMG:       0,

        }
      },
      async enviar(){
        try {
          let juegoIngresado = {...this.formData}
          await this.axios.post(this.url, juegoIngresado, {'content-type':'application/json'} )
        }
        catch(error) {
          console.error('Error en postUsuario', error.message)
        }
        this.formData = this.getInitialData()
        this.formState._reset()
        location.reload()
        // this.$store.dispatch('cerrarFormulario') // --> no funciona

      },
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  label{
    color: rgb(0, 0, 0)
  }
  .ContenedorBoton{
    text-align: right;
  }
</style>
