<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción
    
    .row.mb-4.justify-content-center
      .col-lg-5.align-self-center
        figure
            img(src='@/assets/curso/intro1.svg', alt='Marketing')      
      .col-lg-7.align-self-center
        p.mb-4 El mundo está ahora en línea. De todas las herramientas modernas de marketing, los canales digitales y los medios sociales se convierten en los más nombrados, interactivos y esenciales. Para ser eficaz en el marketing digital, se necesita una estrategia. El uso de tecnologías para ayudar a las actividades que la integran para mejorar el conocimiento de los clientes y sus necesidades. Cualquier campaña de marketing eficaz los incluirá en su estrategia. El marketing digital puede denominarse como un enfoque, una estrategia o un ejercicio de branding, mediante el uso de plataformas digitales. En este sentido se convierte en el desarrollo de la marca, el producto o el servicio en línea.
        .cajon.color-acento-contenido.p-4.mb-4
          p Actualmente se considera que el marketing digital es la parte más importante, por lo que ha crecido rápidamente en los últimos años, ya que cada vez más empresas se dan cuenta de la importancia de una buena presencia en línea.

    p.mb-5 Ahora bien, en el tema de comercio electrónico, se ha convertido en un tema popular para la investigación desde principios de la década de 1990. Se centra en diferentes áreas: aplicaciones, servicios, marketing, estrategia, internet, extranets y tecnologías, por nombrar sólo algunas. Sin embargo, a pesar de esta atención al comercio electrónico, sigue habiendo confusión sobre lo que es. Por ello, el objetivo del estudio de este componente es conocer los modelos de comercio electrónico y ver si es posible desarrollar un modelo verdaderamente dinámico para profesionales, empresarios y usuarios a partir de la implementación de un marketing digital y lo que ello involucra. 

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
