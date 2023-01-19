<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Calidad en diseño, fabricación y mantenimiento de mobiliario
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/T7/c1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Revisemos un elemento clave a la hora de iniciar un proceso de diseño, como es el mantenimiento. Este es el componente en un proceso de diseño que le permite al diseñador, pensar o considerar los puntos de vista de los clientes o usuarios, al momento de tomar la decisión de compra y establecer el tiempo de vida del producto. Observe más contenido al respecto, en el siguiente video:

    .row.mt-5.mb-5
      .col-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 
    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-acento-botones.p-4.mb-4(style="background-color: #e8f9eb ")
          p.mb-0 Recuerde revisar los demás recursos disponibles en el menú principal, estos le permitirán ampliar los conocimientos adquiridos y revisar los que se estudiaron.
  
  
  
  </template>

<script>
export default {
  name: 'Tema7',
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
