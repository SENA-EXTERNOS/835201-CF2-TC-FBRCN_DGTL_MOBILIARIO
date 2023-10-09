<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Introducción a la calidad y la pre- producción

    p.md-5 Como se ha observado la calidad es una propiedad inherente a todos los productos y servicios; la mayor o menor presencia de ésta en los productos aumenta o disminuye el precio final del mismo hacia el cliente, pero garantiza mayor durabilidad y fidelización. En muchos casos, es importante a partir de las técnicas de mercadeo y el tipo de mercado al que se le quiera apuntar con un producto que varíe la calidad.
    p.md-5 Todas estas consideraciones relativas a la calidad son muy importantes pues en el proceso de preproducción se encuentran definidos todos los elementos, componentes, partes y atributos que un producto va a tener partiendo de su diseño.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/T5/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En la fase de preproducción ya deben estar establecidos todos los procedimientos; es decir las actividades que hacen parte de la cadena de valor y producción de un producto mobiliario desde el diseño hasta su comercialización.

    Separador

    #t_5_1.titulo-segundo.color-acento-botones
      h2 5.1 Normas aplicables al diseño, fabricación de mobiliario



    .tarjeta.p-4.p-md-5.mb-5
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          p.md-5 En esta sección se enunciarán de manera muy general algunas de las normas más básicas que abarcan el dibujo y diseño de partes y piezas de mobiliario. Se recomienda al estudiante con asesoría del instructor revisar la aplicabilidad de estas dentro de los procesos constructivos deseados a elaborar.
          p.md-5 Es importante tomar como marco de referencia el mercado al cual se espera llegar con el producto ya que, en función de estos, existen requisitos reglamentarios para el diseño y pruebas de calidad o resistencia, las cuales condicionan la posibilidad de venta.

        .col-md.col-lg-6
          img(src="@/assets/curso/temas/T5/img-2.svg")

    Separador

    #t_5_2.titulo-segundo.color-acento-botones
      h2 5.2 Elaboración de procedimientos para ensamble de mobiliario

    .tarjeta.p-4.p-md-5.mb-5
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src="@/assets/curso/temas/T5/img-3.svg")

        .col-md.col-lg-6
          p.md-5 Los procedimientos que determinan o establecen la manera en la cual un ensamble debe ser ejecutado pueden llegar a ser muy diversos y complejos, por eso no se revisará una norma en particular; sin embargo, sí es importante para el diseñador que las instrucciones que permitan el ensamble de su producto sean escritas o representadas de la manera más sencilla y entendible por cualquier persona
            br
            br
            |Analice algunas generalidades para el procedimiento de ensamble de mobiliario en la siguiente infografía y tenga en cuenta algunas normas:

    ImagenInfograficaB.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/T5/img-4.svg', alt='Texto que describa la imagen')

      div(x="10%" y="20%" tooltip="Normas de diseño" numero="+")
        .row.justify-content-around.align-items-center
          .col-md.col-lg-3
            img(src="@/assets/curso/temas/T5/img-5.png")
          .col-8.col-sm-6.col-md-9.mb-4.mb-md-0
            .h5.mb-2 Normas de diseño.
            p Algunas de las normas internacionales más utilizadas para el diseño de mobiliario corresponden a las utilizadas en dibujo técnico, la ingeniería y el diseño, entre ellas se encuentran:
            ul.lista-ul.mb-5
              li
                i.lista-ul__vineta
                | ISO 128-1:2008 “Dibujo técnico. Principios generales de presentación”
              li
                i.lista-ul__vineta
                | ASME Y14.1002017 “Prácticas de dibujo de ingeniería”



      div(x="10%" y="96%" tooltip="Normas de seguridad en la fabricación" numero="+")
        .row.justify-content-around.align-items-center
          .col-md.col-lg-3
            img(src="@/assets/curso/temas/T5/img-7.png")
          .col-8.col-sm-6.col-md-9.mb-4.mb-md-0
            .h5.mb-2 Normas de seguridad en la fabricación.
            p En Colombia se resalta una condición normativa en particular de cumplimiento obligatorio para todas la empresas, organizaciones y trabajadores a nivel de seguridad en el trabajo y también existen normas asimilables que son utilizadas para garantizar las condiciones seguras en los lugares de trabajo:
            ul.lista-ul.mb-5
              li
                i.lista-ul__vineta
                | Decreto 1072 de 2015: campo de aplicación y política de seguridad y salud en el trabajo en el SG-SST; establece las condiciones mínimas que se requieren en los lugares de trabajo para la seguridad y salud en el trabajo.
              li
                i.lista-ul__vineta
                | ISO 45001:2018: sistema de gestión de la seguridad y salud en el trabajo; es una norma de carácter internacional que provee los lineamientos a las empresas interesadas en mejorar su desempeño en la salud y seguridad en el trabajo.



      div(x="58%" y="20%" tooltip="Normas para la fabricación y ensayos." numero="+")
        .row.justify-content-around.align-items-center
          .col-md.col-lg-3
            img(src="@/assets/curso/temas/T5/img-6.png")
          .col-8.col-sm-6.col-md-9.mb-4.mb-md-0
            .h5.mb-2 Normas para la fabricación y ensayos.
            p La aplicabilidad y uso de normas orientadas a la fabricación, así como a las pruebas de resistencia de los mobiliarios varían y dependen de los países en donde se produzcan o donde se quieran comercializar los productos; en este caso se tienen algunas como:
            ul.lista-ul.mb-5
              li
                i.lista-ul__vineta
                | UNE-EN 1021-1:1994 MOBILIARIO “Valoración de la inflamabilidad del mobiliario tapizado.”
              li
                i.lista-ul__vineta
                | UNE 11016:1989 ARMARIOS Y MUEBLES SIMILARES. “Métodos de ensayo para determinar la resistencia estructural”
              li
                i.lista-ul__vineta
                | UNE 11017:1989 ARMARIOS Y MUEBLES SIMILARES. “Métodos de ensayo para determinar la estabilidad”
              li
                i.lista-ul__vineta
                | UNE 11023-1:1992 ARMARIOS Y MUEBLES SIMILARES PARA USO DOMESTICO Y PÚBLICO. “Características funcionales y especificaciones”

      div(x="58%" y="96%" tooltip="Ensamble de mobiliario" numero="+")
        .row.justify-content-around.align-items-center
          .col-md.col-lg-3
            img(src="@/assets/curso/temas/T5/img-8.png")
          .col-8.col-sm-6.col-md-9.mb-4.mb-md-0
            .h5.mb-2 Ensamble de mobiliario.
            p En la elaboración de un procedimiento para ensamble de mobiliario, este debe ser de la forma más clara y sencilla posible de tal manera que le permita al cliente entender cómo unir partes y piezas de manera rápida y sencilla mediante la utilización de la menor cantidad de herramientas o accesorios posibles. Los programas de diseño y dibujo mecánico cuentan con opciones de explosionado de partes que son utilizados por los diseñadores para la creación de procedimientos y paso a paso en el ensamble.


  </template>

<script>
export default {
  name: 'Tema5',
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
