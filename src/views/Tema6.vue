<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Modelado tridimensional: tipos y técnicas empleadas

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/T6/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El modelado en 3D reúne muchos tipos de técnicas, desde las más sencillas; las cuales se revisarán en esta sección, hasta las más complejas; empleadas en procesos constructivos de industrias como la aeroespacial, el transporte y la bioquímica.

    .row.justify-content-around.align-items-center.md-5 
      .col-xl-8.mb-4
        .cajon.color-acento-botones.p-4.mb-4
          p Para el modelamiento en tres dimensiones en cualquier programa de dibujo o diseño es fundamental el manejo de las operaciones con sólidos, así como el entendimiento tanto estático como dinámico de las piezas que componen el producto, pues en el estallido del producto se animan las piezas y componentes que hacen parte del conjunto del mismo.
      .col-xl-4
        img(src="@/assets/curso/temas/T6/img-2.svg")


    p.md-5 El uso de las técnicas para el modelado 3D depende de la versatilidad, dominio y manejo que posea el diseñador al momento de construir de manera virtual un producto; es por esto que para el tema se revisarán modelados en 3 dimensiones con un video ilustrativo de los programas vistos antes.
      br
      br
      |Este es un ejemplo del empleo de un software de dibujo mecánico como Solid Edge, su interfaz es similar a otros como Solid Works o Inventor.

    .row.mt-5.mb-5
      .col-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 
  
  


    .row.md-5
      .col-xl-6.mb-4
        figure
          img(data-aos='fade-right')(src='@/assets/curso/temas/T6/img-3.svg', alt='')

      .col-xl-6
        .bloque-texto-h.color-secundario.p-4
          .bloque-texto-b__texto
            p.mb-5 Cuando se refiere a la animación y modelado en 3D desde el punto de vista del diseño como tal, por lo general el diseñador utiliza las herramientas propias del programa de diseño o de dibujo mecánico para crear los atributos y propiedades en función de los materiales de las piezas que componen el producto diseñado. Durante el proceso de explosionado se pueden crear animaciones sencillas en las cuales se observa cómo se ensamblan o acoplan las piezas unas con otras. Si el diseño del producto en su uso es de tipo dinámico, es posible también asignar patrones para el movimiento en conjunto del diseño, por ejemplo; el movimiento de una mecedora o la apertura de un gabinete.
        .row.mt-5
          .col-lg-12
            a.anexo.mb-4.mb-lg-2.mr-3-custom(href="https://www.youtube.com/watch?v=081CcHl10Gw" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p <b>Enlace web.</b> Para ver un ejemplo relacionado a este tema, haga click

    
    .row.mt-5
      .col-xl-8.mb-4
        p.mb-5 Si, por el contrario, lo que se pretende es mostrar la relación o interacción y manera en la cual el producto diseñado interactúa o contrasta con un espacio o ambiente determinado de manera dinámica, las acciones o técnicas de modelado en tres dimensiones son mucho más complejas y específicas y por lo general requieren la participación de diseñadores o animadores expertos que combinan los diseños de productos elaborados con otros programas o plataformas de animación más avanzados. Por lo general esta posibilidad de animación en tres dimensiones se utiliza con fines de muestra final o de marketing, para lo cual no es necesario o indispensable en cualquier caso que el diseñador o dibujante de productos mobiliarios maneje este tipo de recursos o técnicas avanzadas en la animación o modelado tridimensional.
        .row
          .col-lg-12
            a.anexo.mb-4.mb-lg-2.mr-3-custom(href="https://www.youtube.com/watch?v=X9kGlpIlJCo" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p <b>Enlace web.</b> Para ver un ejemplo relacionado a este tema, haga click


      .col-xl-4
        figure
          img(data-aos='fade-right')(src='@/assets/curso/temas/T6/img-4.svg', alt='')

      
    .tarjeta.color-primario.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/T6/img-5.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-small El campo del modelado en tres dimensiones es muy amplio; además del diseño de mobiliario existen muchos campos de acción y empresas que se especializan exclusivamente en esta área.  
            .col-sm-auto
              a.boton.color-acento-botones.texto-black(href="https://www.youtube.com/watch?v=6peY45wSpKQ&ab_channel=Makerslab" target="_blank")
                span Enlace web
                i.fas.fa-link
        
  
  
  
  </template>

<script>
export default {
  name: 'Tema6',
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
