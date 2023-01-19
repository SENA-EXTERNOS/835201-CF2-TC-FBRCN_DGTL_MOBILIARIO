<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .tarjeta.p-4.p-md-5.mb-5.fondo1.color-gris(data-aos="fade-down")
      .row.justify-content-end.align-items-center
        .col-md-5.order-md-first.order-sm-last
          p.py-3 Apreciado aprendiz, bienvenido a este componente formativo, donde se estudiará el desarrollo del proceso de fabricación digital de mobiliario, adquirir las herramientas y habilidades básicas de los principales programas para el diseño mecánico, dibujo de piezas, partes y componentes, además de las funciones básicas y operaciones que permitan generar propuestas para el cliente. También se revisará la manera en la cual las tecnologías 4.0 aportan en el proceso de diseño y visualización de productos, para la generación de un mayor impacto en los mercados y clientes potenciales.
            br
            br
            |En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

        .col-md-6.mb-4.mb-md-0.order-md-last.order-sm-first(data-aos='fade-right')
          figure
            img(src="@/assets/curso/temas/introduccion/img-1.svg")

    
            .row.mt-5
    .col-12
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
