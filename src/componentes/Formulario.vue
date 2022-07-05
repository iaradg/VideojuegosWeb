<template>

  <section class="src-componentes-formulario">
    <div>
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
          required 
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
        <label for="portada1">URL PORTADA (opcional)</label>
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
  
      <button class="btn btn-success my-3" :disabled="formState.$invalid">ENVIAR</button>
    </vue-form>
    </div>
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
          portada1:     'https://hardzone.es/app/uploads-hardzone.es/2018/08/Pantalla-en-negro-01.jpg',
          portada2:     'https://hardzone.es/app/uploads-hardzone.es/2018/08/Pantalla-en-negro-01.jpg',
          portada3:     'https://hardzone.es/app/uploads-hardzone.es/2018/08/Pantalla-en-negro-01.jpg',
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
      },
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  label{
    color: white
  }
</style>
