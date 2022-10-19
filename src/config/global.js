export default {
  global: {
    componenteFormativo: 'Diseño de productos mobiliarios',
    descripcionCurso:
      'Este componente desarrolla los aspectos y temáticas para el diseño, dibujo y modelado desde los principales softwares de dibujo mecánico y de diseño de piezas, necesarios para una etapa de producción. Se revisarán de manera general las principales consideraciones en torno a la calidad y principios de la preproducción de productos mobiliarios. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal-1.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['imagen-principal'],
        imagen: require('@/assets/curso/portada/imagen-banner-principal.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Diseño de producto',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Principales softwares utilizados en el diseño de mobiliarios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Tecnologías 4.0 utilizadas en el diseño de mobiliarios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Operaciones con sólidos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Introducción a la calidad y la pre-producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Normas aplicables al diseño, fabricación de mobiliario',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Elaboración de procedimientos para ensamble de mobiliario',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Modelado tridimensional: tipos y técnicas empleadas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Calidad en diseño, fabricación y mantenimiento de mobiliario',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Diseño de producto',
      referencia:
        'Alarcón, F,. Albarracín, J,.García, J,. (2004). Tema 2 Diseño del producto, Diseño de sistemas productivos y logísticos. En Problemas resueltos de diseño de sistemas productivos y logísticos (pp. 1-53). Departamento de Organización de Empresas, E.F. y C. ',
      tipo: 'Curso 04 / 05',
      link:
        'http://personales.upv.es/jpgarcia/LinkedDocuments/2DisennodeProducto.pdf',
    },
    {
      tema: 'Operaciones con sólidos',
      referencia:
        'Revatta, J,. (2016).. Dibujo para diseño de ingeniería II. Universidad Continental. ',
      tipo:
        'Documento con herramientas y conceptos para el dibujo de ingeniería.',
      descarga:
        'https://repositorio.continental.edu.pe/bitstream/20.500.12394/2209/1/DO_FIN_EE_MT_UC0223_20162.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Atributo',
      significado:
        'cualidad o característica propia de una persona o una cosa, especialmente algo que es parte esencial de su naturaleza.',
    },
    {
      termino: 'CAD',
      significado: 'Diseño Asistido por Computador.',
    },
    {
      termino: 'CAM',
      significado: 'Fabricación Asistida por Computador.',
    },
    {
      termino: 'CSG',
      significado: 'Geometría Sólida Constructiva.',
    },
    {
      termino: 'Consecuente',
      significado:
        'resultado de lo que se ha expresado previamente o se deduce de ello.',
    },
    {
      termino: 'Estandarización',
      significado: 'acción de estandarizar.',
    },
    {
      termino: 'Explosionado',
      significado:
        'dibujo esquemático o técnico de un objeto, que muestra la relación o el orden de ensamblaje de varias partes.',
    },
    {
      termino: 'Fidelización',
      significado: 'acción de fidelizar.',
    },
    {
      termino: 'Inherente',
      significado:
        'elemento esencial y permanente en un ser o en una cosa, que no se puede separar de él por formar parte de su naturaleza y no depender de algo externo.',
    },
    {
      termino: 'Módulo',
      significado:
        'elemento con función propia concebido para poder ser agrupado de distintas maneras con otros elementos constituyendo una unidad mayor.',
    },
    {
      termino: 'Nativo digital',
      significado:
        'persona que ha crecido en la era digital, en lugar de haber adquirido familiaridad con los sistemas digitales.',
    },
    {
      termino: 'Organoléptica',
      significado: 'que se percibe con los sentidos.',
    },
    {
      termino: 'Ostentoso',
      significado: 'que muestra un lujo y riqueza excesivos.',
    },
    {
      termino: 'Transversal',
      significado:
        'que está atravesado de una parte a otra de una cosa de manera perpendicular a su dimensión longitudinal.',
    },
    {
      termino: 'Versatilidad',
      significado: 'cualidad o condición de versátil.',
    },
  ],
  referencias: [
    {
      referencia:
        'Graitec (2018, noviembre 21). 10 razones para utilizar Fusion 360. Graitec 2ACAD-ARKTEC. ',
      link: 'https://www.2acad.es/10-razones-para-utilizar-fusion-360/',
    },
    {
      referencia:
        'Marchanteeste, A. (2022, mayo 10). TinkerCAD: ¡Te contamos todo lo que necesitas saber! 3D natives el sitio web de la impresión 3D.',
      link: 'https://www.3dnatives.com/es/tinkercad-software-200420202/',
    },
    {
      referencia: 'McNeel (2022). Características. Rhinoceros.',
      link: 'https://www.rhino3d.com/features/ ',
    },
    {
      referencia:
        'Normas de calidad en las industrias de la madera y mueble. (s.f.).',
      link: 'http://www.aemcm.net/archivos/normas_calidad.pdf',
    },
    {
      referencia:
        'Quispe, I., (2022, agosto 02). ¿Qué es AutoCAD y para qué sirve? ARCUX.',
      link: 'https://arcux.net/blog/que-es-autocad-y-para-que-sirve/',
    },
    {
      referencia:
        'Solano, L., Vigo, M., Puig, A., (2001) Funciones en el modelado de sólidos y paradigmas de diseño. Secció d’Informàtica Gràfica. Departament de Llenguatges i Sistemes Informàtics Universitat Politècnica de Catalunya. 1-11. ',
      link: '',
    },
    {
      referencia: 'Workana (s.f.). ¿Qué es SketchUp? Workana.com.',
      link: 'https://i.workana.com/glosario/sketchup/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
