<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Diseño de producto

    .row.mb-7.md-5
      .col-md-5.mb-3.mb-md-0(data-aos='fade-right')
        figure
          img(data-aos='fade-right')(src='@/assets/curso/temas/T1/img-1.png', alt='Obrero')

      .col-md-5
        p.mb-5 En este estudio se desarrollarán las consideraciones y aspectos relacionados al diseño trabajado desde programas computacionales; esto teniendo en cuenta el criterio de calidad y la manera en la cual este concepto permite la fidelización de un mercado.
        p.mb-5 El diseñador o equipo de diseño al momento de iniciar el proceso constructivo mediante un programa computacional de dibujo mecánico o de diseño, se encuentra en lo que puede denominarse como la fase de diseño preliminar; en esta y de la mano de los bocetos o sketches previos, se plasmarán las principales características que conformarán el producto final y se revisan varios aspectos.
        .bloque-texto-b.color-secundario.p-5
          .bloque-texto-b__texto
    
    .row.mb-5.md-5
      .col-md-4.mb-5.mb-md-0
        h3.mb-5 Observe algunos de los aspectos tenidos en cuenta en la fase de diseño preliminar.
        figure
          img(data-aos='fade-right')(src='@/assets/curso/temas/T1/img-2.png', alt='')

      .col-md-8
        LineaTiempoD.color-primario
          .row(numero="1" titulo="La función que realizar")
            .col-md-6.mb-4.mb-md-0
              p.text-small De manera clara y específica quedan establecidas las funciones que desempeñará el producto.

          .row(numero="2" titulo="Costos")
            .col-md-6.mb-4.mb-md-0
              p.text-small En relación con las funciones a realizar, estos deben ser los más bajos posibles.
          

          .row(numero="3" titulo="Tamaño y forma ")
            .col-md-6.mb-4.mb-md-0
              p.text-small Los cuales deben corresponder y estar armonizados con la función a realizar.

          .row(numero="4" titulo="Calidad")
            .col-md-6.mb-4.mb-md-0
              p.text-small Debe estar de la mano y ser siempre consecuente con la función a realizar; para lograrla se debe equilibrar en el proceso que la mayor condición de esta no implique el incrementar los costos de una manera desmesurada, ni que sea tan baja que cause la perdida de interés de los clientes.

          .row(numero="5" titulo="Impacto ambiental")
            .col-md-6.mb-4.mb-md-0
              p.text-small Es una característica fundamental en estos días que garantiza que ni el producto, ni sus componentes o empaque atenten contra el medio ambiente.

          .row(numero="6" titulo="Producción")
            .col-md-6.mb-4.mb-md-0
              p.text-small Hace referencia a los recursos y medios necesarios para la fabricación de cualquier producto.

          .row(numero="7" titulo="Accesibilidad")
            .col-md-6.mb-4.mb-md-0
              p.text-small Es la manera en la cual el cliente adquiere el producto (compra, marketing).

          .row(numero="8" titulo="Recipiente (empaque)")
            .col-md-6.mb-4.mb-md-0
              p.text-small Hace referencia a la manera en la cual el producto va empacado para la venta y el impacto que genera esto en la producción y distribución del mismo.
            
    p.mb-5 Una vez las consideraciones anteriores son establecidas por el diseñador o el equipo de diseño, se da paso a la fase de diseño detallado; en ésta y mediante la interacción y simulación se pueden llevar a cabo los programas de dibujo mecánico, en estos se diseñan, revisan y evalúan las siguientes características:




    .col-10.offset-2.bg-amarillo-claro.borde-der-secundario-19.px-5.py-4.mt-5
      .row
        .col-12.d-none.d-lg-block
          .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5
                .bloque-texto-g__img(data-aos='fade-right')(
                  :style="{'background-image': `url(${require('@/assets/curso/temas/T1/img-3.png')})`}"
                )
                .bloque-texto-g__texto.p-4
                  h3 Modularidad
                  br
                  br 
                  p.mb-5 es el tipo de diseño que mediante la creación e interacción de módulos proporciona al cliente mayor variedad y posibilidad de utilizar un mismo producto. Dentro de sus ventajas se resalta la más ágil programación y planificación de producción, reparación y mantenimiento. El modularidad tiene entre otros objetivos garantizar la estandarización de la producción. 


    .row.mt-5
      .col-10.px-5.py-4
        .row
          .col-12.d-none.d-lg-block
            .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
              .bloque-texto-g__img(data-aos='fade-right')(
                :style="{'background-image': `url(${require('@/assets/curso/temas/T1/img-4.png')})`}"
              )
              .bloque-texto-g__texto.p-4
                h3 Fiabilidad
                br
                br 
                p.mb-5 hace referencia a la condición adecuada y óptima que el producto presenta al momento de ser utilizado. Esta condición debe coincidir con lo establecido en las fases preliminares del proceso de diseño. Las propiedades de calidad de las materias primas y componentes que hacen parte del diseño del producto garantizan por ende en mayor o menor medida esta condición. 


      .col-10.offset-2.bg-amarillo-claro.borde-der-secundario-19.px-5.py-4.mt-5
        .row
          .col-12.d-none.d-lg-block
           .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5
              .bloque-texto-g__img(data-aos='fade-right')(
                :style="{'background-image': `url(${require('@/assets/curso/temas/T1/img-5.png')})`}"
              )
              .bloque-texto-g__texto.p-4
                h3 Seguridad
                br
                br 
                p.mb-5 es la condición que está enfocada en la capacidad que tiene un producto de no afectar la integridad física del usuario o cliente o los bienes físicos dispuestos en el ambiente en el cual será preparado para el uso el producto. Está, por lo general está sujeta a normas legales que pueden variar en función de los mercados en los que se quiera comercializar el producto.





</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
