<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Principales #[em software] utilizados en el diseño de mobiliarios
      

    .row.md-5
      .col-xl-6.mb-4(data-aos='fade-right')
        figure
          img(data-aos='fade-right')(src='@/assets/curso/temas/T2/img-1.png', alt='Obrero')

      .col-xl-6
        .bloque-texto-q.color-secundario.p-4
          .bloque-texto-b__texto
            p.mb-5 Los software para el mercado del dibujo mecánico y diseño de productos utilizados en la industria del mobiliario, le permiten al diseñador crear a partir de planos o esquemas en dos dimensiones, productos en tres dimensiones; esto mediante procesos de transformación y modelado, así como también la recreación de simulaciones en ambientes o espacios, en los que se proyecta que el producto se va a utilizar.
              br
              br
              |Es importante indicar que, de acuerdo con el tipo o clase de programa utilizado en el diseño de mobiliarios, existen requerimientos mínimos que deben cumplir los equipos de cómputo en los cuales se trabajará. Para esto, se recomienda visitar el sitio web de cada uno y revisar los requisitos mínimos del equipo.
        

    p.md-5 En esta infografía se presentan algunos de los principales programas o #[em software] más utilizados en el diseño de mobiliario, con sus características más representativas: 


    ImagenInfograficaB.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/T2/img-2.png', alt='')

      div(x="23%" y="23%" tooltip="Autodesk Fusion 360" numero="+")
        .row.justify-content-around.align-items-center
          .col-md.col-lg-3
            img(src="@/assets/curso/temas/T2/img-3.png")
          .col-8.col-sm-6.col-md-9.mb-4.mb-md-0
            .h5.mb-2 Autodesk Fusion 360.
            p.md-5 Es una herramienta integral de diseño de productos se empieza por el diseño para llegar al mejor concepto de este. Luego se pasa a la ingeniería de producción utilizando fácilmente el diseño conceptual. Finalmente, se prepara el diseño para la fabricación utilizando CAM integrado de 2 y 3 ejes o utilizando la utilidad de impresión 3D para la fabricación aditiva. Todo, en una sola plataforma. 
            p.md-5 Fusion 360 incluye un modelado directo y flexible en tiempo real, así como un modelado paramétrico basado en características, permite generar rápidamente alternativas de diseño de alto rendimiento desde una sola idea. 
            p.md-5 Se debe resaltar que con el diseño generativo no hay una solución única; en cambio hay potencialmente miles de grandes soluciones. Se puede analizar el diseño bajo diferentes condiciones utilizando diferentes materiales, cargas y restricciones. Además, se pueden realizar estudios de estrés térmico y no lineal. (Graitec, 2018). 

      div(x="32%" y="66%" tooltip="Sketchup" numero="+")
        .row.justify-content-around.align-items-center
          .col-md.col-lg-3
            img(src="@/assets/curso/temas/T2/img-4.png")
          .col-8.col-sm-6.col-md-9.mb-4.mb-md-0
            .h5.mb-2 Sketchup.
            p.mb-5 Es un modelador 3D; es decir, un software destinado a la creación y desarrollo de modelos y diseños 3D. Su amplia variedad de recursos permite elaborar múltiples formas y volúmenes para componer proyectos tridimensionales de ambientes y objetos más realistas e insertados en el contexto donde serán presentados o construidos en el mundo físico. <i>Sketchup</i> se ha convertido en una valiosa herramienta para arquitectos, ingenieros civiles, diseñadores de interiores, de exteriores y de productos o manufacturas, teniendo en cuenta que sus modelos 3D optimizan la presentación comercial y ofrecen una mejor percepción visual a clientes y consumidores.
            p.mb-5 En <i>Sketchup</i> el usuario puede descargar varios modelos 3D de productos del mundo real, desde la biblioteca de <i>Sketchup</i> (3D <i>Warehouse</i>) se encuentra una gran variedad de ítems de mobiliario, iluminación, decoración, elementos de oficina, entre otros. Con la inclusión de estos objetos es posible crear ambientes realistas, incluso sin contar con las herramientas de la versión profesional (Workana (s/f).

      div(x="56%" y="78%" tooltip="TinkerCAD" numero="+")
        .row.justify-content-around.align-items-center
          .col-md.col-lg-3
            img(src="@/assets/curso/temas/T2/img-5.png")
          .col-8.col-sm-6.col-md-9.mb-4.mb-md-0
            .h5.mb-2 TinkerCAD.
            p.mb-5 Es una colección online que incluye herramientas de software de Autodesk y que permite a los usuarios principiantes crear modelos 3D. Este software CAD se basa en una geometría sólida constructiva (CSG) que permite a los usuarios crear modelos complejos mediante la combinación de objetos más simples. Como resultado, este software de modelado 3D es fácil de usar y actualmente lo utilizan miles de personas; tanto maestros, como niños, aficionados y diseñadores ya que una de sus ventajas es que es gratis. TinkerCAD es una buena alternativa a otros softwares de modelado 3D como SketchUp o Fusion360.
            p.mb-5 El software de TinkerCAD permite agregar circuitos electrónicos a los diseños 3D para crear objetos con luz y movimiento.; el resultado final incluso se puede simular en el software para verificar cómo responderán los componentes en la vida real. Otra capacidad que tiene es la de transformar un diseño 3D en modelos de ladrillo construibles, similar a la creación de legos.
            p.mb-1 Marchanteeste, A., (10 de mayo de 2022). TinkerCAD: 
            p.mb-2 ¡Te contamos todo lo que necesitas saber!.3D natives el sitio web de la impresión 3D. 
            a(:href="obtenerLink('https://www.3dnatives.com/es/tinkercad-software-200420202/')" target="_blank")

      div(x="80%" y="68%" tooltip="Rhino" numero="+")
        .row.justify-content-around.align-items-center
          .col-md.col-lg-3
            img(src="@/assets/curso/temas/T2/img-6.png")
          .col-8.col-sm-6.col-md-9.mb-4.mb-md-0
            .h5.mb-2 Rhino.
            p.mb-5 En este programa se pueden crear, editar, analizar, documentar, renderizar y animar elementos en superficies y sólidos, geometría de subdivisión, nubes de puntos y mallas poligonales. No hay límite de complejidad, grado o tamaño a parte del que posea su hardware.  Dentro de las características especiales se encuentran ilimitadas herramientas de modelado 3D de forma libre.
            p.mb-5 Con Rhino se puede modelar cualquier forma imaginable con la precisión necesaria para el diseño, los prototipos, la ingeniería, el análisis y la fabricación de cualquier producto desde la aviación hasta la joyería; el programa además tiene compatibilidad con la mayoría de los programas de diseño, dibujo, ingeniería, prototipado, análisis, renderizado, animación e ilustración, plataforma de desarrollo para cientos de productos 3D especializados.
            p.mb-2 McNeel (2022). Características. Rhinoceros. 
            a(:href="obtenerLink('https://www.rhino3d.com/features/')" target="_blank")

      div(x="88%" y="23%" tooltip="AutoCAD" numero="+")
        .row.justify-content-around.align-items-center
          .col-md.col-lg-3
            img(src="@/assets/curso/temas/T2/img-7.png")
          .col-8.col-sm-6.col-md-9.mb-4.mb-md-0
            .h5.mb-2 AutoCAD.
            p.mb-5 Es el programa por defecto que muchos arquitectos usan para diseñar; bocetos, dibujos, planos, estructuras y piezas que deben cumplir con ciertos parámetros solicitados por los clientes. Además, AutoCAD es un programa multifacético que permite desarrollar proyectos de índole arquitectónico, industrial, mecánicos, de diseño gráfico y de ingeniería. Gracias a la posibilidad de visualizar los diseños en 2D y 3D AutoCAD es uno de los programas de diseño digital de líderes del mercado.
            p.mb-5 Este permite crear diseños bidimensionales y tridimensionales ya que permite la elaboración de piezas elaboradas con la estrategia de dibujo técnico complejo y cuenta con una galería de objetos predeterminados con los cuales se puede trabajar en el diseño de cualquier tipo de pieza o estructura. El programa además cuenta con una interfaz accesible y de funciones específica para que el profesional se familiarice rápidamente y entienda cómo usar el software; en este se pueden crear todo tipo de diseño de planos, bocetos, dibujos, estructuras y piezas de carácter parametrizado y sirve para diseñar las piezas, dibujos y formas que se requieran para el desarrollo de sistemas mecánicos e industriales (Quispe, 2022).
 


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
