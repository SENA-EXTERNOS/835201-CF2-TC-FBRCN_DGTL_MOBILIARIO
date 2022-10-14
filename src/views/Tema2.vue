<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Principales softwares utilizados en el diseño de mobiliarios 

    .row.mb-7.md-5
      .col-md-5.mb-3.mb-md-0(data-aos='fade-right')
        figure
          img(data-aos='fade-right')(src='@/assets/curso/temas/T2/img-1.svg', alt='Obrero')

      .col-md-5
        p.mb-5 Los softwares para el mercado del dibujo mecánico y diseño de productos utilizados en la industria del mobiliario le permiten al diseñador crear a partir de planos o esquemas en dos dimensiones productos en tres dimensiones; esto mediante procesos de transformación y modelado, así como también la recreación de simulaciones en ambientes o espacios en los que se proyecta que sea utilizado el producto.
        p.mb-5 Es importante indicar que, de acuerdo con el tipo o clase de programa utilizado en el diseño de mobiliarios existen requerimientos mínimos que deben cumplir los equipos de cómputo en los cuales se trabajará. Para esto se recomienda visitar el sitio web de cada uno y revisar los requisitos mínimos del equipo.
        .bloque-texto-b.color-secundario.p-5
          .bloque-texto-b__texto

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
