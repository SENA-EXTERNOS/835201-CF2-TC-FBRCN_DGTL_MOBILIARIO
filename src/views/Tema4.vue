<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Operaciones con sólidos

    .tarjeta.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-2
          img(src="@/assets/curso/temas/T4/img-1.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.md-5 Para iniciar el desarrollo u operaciones con sólidos es importante identificar el concepto de sólidos primitivos; estos son los generados a partir de bases o parámetros geométricos de figuras geométricas, es decir de 2 dimensiones.
              p.md-5 En función del tipo de programa empleado para el diseño, ya sea <i>Autocad</i> 2D o 3D, <i>Fusion</i> 360, <i>Rhinoceros</i>, <i>Tinkercad</i> o cualquier otro, los sólidos básicos sobre los cuales se llevan a cabo las operaciones son:


    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .fcg.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/T4/img-2.svg' alt='AvatarTop')
        h2.text-center Prisma rectangular:
        p.text-center.mb-5 Compuesto por una base y altura.
        br

      .fcg.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/T4/img-3.svg' alt='AvatarTop')
        h2.text-center Cilindro:
        p.text-center.mb-5  Compuesto por un área circular o elíptica en su base y altura.

      .fcg.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/T4/img-4.svg' alt='AvatarTop')
        h2.text-center Cono:
        p.text-center.mb-5  Cuenta con un área de tipo circular o elíptica, altura y área de tapa superior.

      .fcg.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/T4/img-5.svg' alt='AvatarTop')
        h2.text-center Esfera:
        p.text-center.mb-5  Compuesta por un radio proyectado en el espacio.

      .fcg.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/T4/img-6.svg' alt='AvatarTop')
        h2.text-center Pirámide:
        p.text-center.mb-5 Cuenta con una base de área poligonal y altura.

      .fcg.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/T4/img-7.svg' alt='AvatarTop')
        h2.text-center Aro:
        p.text-center Proyección en el espacio de una circunferencia o elipse con un radio hueco en el centro.

    p.mb-5 Dentro de las principales operaciones con sólidos que se pueden trabajar en programas de diseño y dibujo mecánico se encuentran:

    .row.mb-5
      .col-lg-9.mb-4
        TabsA.color-secundario.mb-5
          .tarjeta.fce.p-4(titulo="Barridos")
            p Con esta operación se crean objetos con volumen en el espacio partiendo de una figura plana o geométrica en el plano; a esta figura dependiendo el programa a utilizar se le conoce como perfil de barrido o boceto. El barrido, se hace en una dirección, la cual se realiza hacia donde se le conoce como curva de barrido. Dentro de esta operación resaltan dos en particular;
            ul.lista-ul.mb-5
              li
                i.lista-ul__vineta
                | Barrido por traslación: en este caso la curva de barrido o dirección es rectilínea.
              li
                i.lista-ul__vineta
                | Barrido por rotación: en este caso el desplazamiento o curva de barrido se lleva a cabo con base a un ángulo determinado respecto a un eje, es decir, a lo largo de una curva en forma de circunferencia, elipse o arco.

          .tarjeta.fce.p-4(titulo="Operaciones <br> booleanas")
            p Consiste en la creación de nuevos cuerpos a partir de la intersección o interacción de varios de los mismos. Las intersecciones producidas generan áreas o volúmenes en común requeridas en el diseño de piezas o componentes.


          .tarjeta.fce.p-4(titulo="Recubrimientos")
            p Consiste en generar superficies a partir de puntos o segmentos de cuerpos sobre los cuales se establece una capa; como su nombre lo indica en un recubrimiento.

          .tarjeta.fce.p-4(titulo="Redondeados")
            p También conocida como biselado, consiste en la sustitución de vértices o aristas de cuerpos por curvas o superficies suaves; dicho de otra manera, consiste en suavizar los bordes de las figuras.



          .tarjeta.fce.p-4(titulo="Secciones")
            p También denominada corte, consiste en la segmentación o corte de cuerpos mediante planos transversales a partir de los cuales se obtienen secciones de un cuerpo o figuras planas poligonales.


          .tarjeta.fce.p-4(titulo="Estiramientos")
            p Consiste en la elongación o estiramiento de las caras o partes de una figura o cuerpo hasta un punto determinado en el espacio en el que estas se deforman proporcionalmente.

      .col-lg-3.md-5
        figure(data-aos='fade-right')
          img(src='@/assets/curso/temas/T4/img-8.png', alt='')





    .tarjeta.p-4.p-md-5.mb-5.fondo1.color-gris(data-aos="fade-down")
      .row.justify-content-end.align-items-center
        .col-md-5.order-md-first.order-sm-last
          p.py-5 En este ejemplo se observa cómo mediante la operación de corte con un plano inclinado en la parte superior de la figura se obtiene una boca más estilizada del recipiente diseñado.

        .col-md-6.mb-4.mb-md-0.order-md-last.order-sm-first
          figure
            img(src="@/assets/curso/temas/T4/img-10.png")






</template>

<script>
export default {
  name: 'Tema4',
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
