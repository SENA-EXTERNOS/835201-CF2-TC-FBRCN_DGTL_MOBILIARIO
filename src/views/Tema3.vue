<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Tecnologías 4.0 utilizadas en el diseño de mobiliarios

    .row
      .col-xl-8.mb-4
        p.mb-5 Las tecnologías 4.0, o emergentes como también se les conoce han incursionado en todos los campos de la industria para potenciar y maximizar los procesos de diseño, producción, venta y comercialización de productos y/o servicios. La correcta y acertada escogencia de estos tipos de tecnologías permite que se puedan recrear y representar diferentes condiciones en el uso de estos.
        .cajon.color-acento-botones.p-4.mb-4
          p Con respecto a los espacios para el mercado, es importante tener en cuenta que el público o mercado con mayor demanda de productos mobiliarios es el de familias jóvenes o personas entre los 20 y 45 años, rangos de edades que se conocen como <i>“millenials”</i> y <i>“centenials”</i>. Este público en particular es considerado como nativo digital; por eso para ellos las herramientas y estrategias digitales deben maximizar experiencias, vivencias y diseños para así generar un alto impacto e intervenir directamente en la decisión de compra.
        p.mb-5 Los programas o <i>softwares</i> utilizados en el proceso de diseño mobiliario permiten exportar a plataformas o programas para realidad aumentada o virtual. Observe algunas características a continuación.

      .col-xl-4
        figure
          img(data-aos='fade-right')(src='@/assets/curso/temas/T3/img-1.svg', alt='')
  
    h2.mb-3 Realidad aumentada
    p.mb-5 La realidad aumentada como lo indica su nombre; toma elementos construidos de manera digital por el diseñador y los inserta en la visualización que tiene el usuario a través de un dispositivo móvil, aumentando e insertando elementos virtuales o digitales en el espacio físico real. 

    p.mb-5 Conozca algunas características de la realidad aumentada:

    TabsA.color-secundario.mb-5
      .tarjeta.color-secundario.p-4(titulo="PASO 1")
        .row.justify-content-around.align-items-center
          .col-xl-6
            p El uso de dispositivos móviles como tabletas, iPads y celulares permite una rápida visualización de un producto en un espacio físico.

          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/T3/img-2.svg', alt='Texto que describa la imagen')
       
      .tarjeta.color-secundario.p-4(titulo="PASO 2")

        .row.justify-content-around.align-items-center
          .col-xl-6
            p La recreación de productos en la realidad aumentada también se puede lograr a través del reconocimiento de patrones impresos en medios físicos como hojas, planos o libros.

          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/T3/img-3.svg', alt='Texto que describa la imagen')


      .tarjeta.color-secundario.p-4(titulo="PASO 3")
        
        .row.justify-content-around.align-items-center
          .col-xl-6
            p La realidad aumentada ayuda al diseñador a configurar el producto en función del espacio.

          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/T3/img-4.svg', alt='Texto que describa la imagen')

      .tarjeta.color-secundario.p-4(titulo="PASO 4")

        .row.justify-content-around.align-items-center
          .col-xl-6
            p La realidad aumentada se utiliza en muchas industrias como apoyo y herramienta de diseño.

          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/T3/img-5.svg', alt='Texto que describa la imagen')




</template>

<script>
export default {
  name: 'Tema3',
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
