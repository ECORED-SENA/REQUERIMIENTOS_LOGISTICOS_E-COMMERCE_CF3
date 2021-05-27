export default {
  global: {
    componenteFormativo:
      'Marketing y estrategias, pasarelas de pago y normativa para e-commerce',
    descripcionCurso:
      'El marketing digital es el método para hacer negociaciones a nivel global, posee una variedad de herramientas de contacto inmediato con cualquier persona en cualquier lugar del mundo y las redes pueden crear negociaciones utilizando diversos sistemas para captar clientes creando negocios exitosos en cualquier lugar del mundo, analizando ideas y potenciarlas con técnicas de mercadeo es por eso que en este componente se exponen los principales elementos para conocimiento profundo del marketing, sus pasarelas y  normatividad vigente.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/BANNER.svg'),
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
        titulo: 'Comercio marketing digital',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Estrategias de e-commerce',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Plataformas de comercio financiera',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Medidas de seguridad medios electrónicos (Leyes y normas vigentes en seguridad informática)',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      /*{
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },*/
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
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Astrid Lili Puerta',
        cargo: 'Experta temática',
        centro: 'Centro Agropecuario de Buga',
        regional: 'Regional valle',
      },
      {
        nombre: 'Javier Enrique Santana',
        cargo: 'Experto temático',
        centro: 'Centro de Gestión Industrial',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Michael Andrés Cortés Caro',
        cargo: 'Experto temático',
        centro: 'Ministerio de Ambiente y Desarrollo Sostenible',
      },
      {
        nombre: 'Mauricio Jiménez Fajardo',
        cargo: 'Experto temático',
        centro: 'Ministerio de Ambiente y Desarrollo Sostenible',
      },
      {
        nombre: 'Manuel Alejandro Garzón Cárdenas',
        cargo: 'Experto temático',
        centro: 'Deutsche Gesellschaft für',
        regional: 'Internationale Zusammenarbeit (GIZ)',
      },
      {
        nombre: 'Liliana Victoria Morales Gualdrón',
        cargo: 'Diseñador instruccional',
        centro: 'Centro para la Industria y la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Carlos Andrés Rodríguez',
        cargo: 'Evaluador instruccional',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Revisora de estilo',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Integración de recursos y pruebas',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: ['Adriana Rincón Avendaño', 'Eulises Orduz Amezquita'],
        cargo: 'Diseño web y Producción Audiovisual',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo Front-End',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Brayan Stiven Pinto Diaz',
        cargo: ['Desarrollo front-end', 'Validación de recursos'],
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Herradón, A. (2009). Marketing electrónico para pymes. México: Alfaomega',
    },
    {
      referencia:
        'Ortega, L, (2015). Proyecto de investigación: ingeniería técnica en informática de Gestión e-commerce y pago seguro. Obtenido de:',
      link: 'https://docplayer.es/17430090-E-commerce-y-pago-seguro.html',
    },
    {
      referencia: 'Banco República, (2021) Pasarelas de pago. Obtenido de:',
      link:
        'https://www.banrep.gov.co/es/node/40991#:~:text=En%20Colombia%20a%C3%BAn%20no%20se,tarjeta%20cr%C3%A9dito%2C%20transferencias%20electr%C3%B3nicas%2C%20siendo',
    },
    {
      referencia:
        'Meléndez, Martha. (2018) El Marketing digital transforma la gestión de Pymes en Colombia. Obtenido de:',
      link:
        'https://www.redalyc.org/jatsRepo/4096/409658132001/html/index.html',
    },
    {
      referencia:
        'Betancur, C. (2021) Comparación de pasarelas de pago en Colombia. BTODigital. Obtenido de:',
      link:
        'https://btodigital.com/comparacion-de-pasarelas-de-pago-en-colombia/c',
    },
    {
      referencia:
        'Ministerio de tecnologías de la información y las comunicaciones, 2010. Resolución 202 de 2010. Obtenido de:',
      link:
        'https://normograma.mintic.gov.co/mintic/docs/resolucion_mintic_0202_2010.htm ',
    },
  ],
  glosario: [
    {
      termino: 'Comercio electronico',
      significado:
        'Relaciona las situaciones suscitadas por toda relación de índole comercial, sea o no contractual, estructurada a partir de la utilización de uno o más mensajes de datos o de cualquier otro medio similar.',
    },
    {
      termino: 'Contenido',
      significado:
        'Información generada bajo cualquier modo o forma de expresión, que puede ser distribuida por cualquier medio y es parte de un mensaje que el sistema de transferencia o medio no examina ni modifica, salvo para conversión durante el transporte de este. (Ministerio TIC,2010)',
    },
    {
      termino: 'PSE',
      significado:
        'Forma de pago utilizado en Colombia, se dice que es la forma más confiable en línea y su objetivo es interactuar con las empresas o personas para vender o recibir dinero por medio de Internet.',
    },
  ],
  complementario: [
    {
      texto: 'Pasarela de pagos',
      tipo: 'Comunicación',
      link: 'https://www.banrep.gov.co/es/node/40991',
    },
    {
      texto:
        'Corrales, 2019. Conoce 16 de las mejores herramientas del Marketing Digital para potenciar tu estrategia online',
      tipo: 'Blog',
      descarga:
        'https://rockcontent.com/es/blog/herramientas-de-marketing-digital/',
    },
    {
      texto:
        'Observatorio e-commerce, 2018. Manual	de buenas prácticas de las pasarelas de pago en Colombia ',
      tipo: 'Manual',
      link:
        'https://www.observatorioecommerce.com.co/wp-content/uploads/2018/10/Manual-Buenas-Practicas-Pasarelas.pdf',
    },
    {
      texto: 'Cámara de representantes, (2021). Pasarelas de pagos.',
      tipo: 'Proyecto de ley',
      descarga:
        'https://www.camara.gov.co/por-medio-del-cual-se-regula-la-operacion-de-las-pasarelas-de-pagos-en-colombia',
    },
  ],
}
