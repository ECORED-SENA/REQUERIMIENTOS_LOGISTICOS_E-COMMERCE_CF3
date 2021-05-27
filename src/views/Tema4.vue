<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        .h3 4
      .h3 Medidas de seguridad medios electrónicos (Leyes y normas vigentes en seguridad informática)
    
    p.mb-4 Debido al constante avance de la tecnología, la seguridad informática en las empresas se ha convertido en un componente fundamental de manera que la información es considerada un bien sustancial, es decir un activo del negocio que requiere ser protegido de forma sistémica y segura para evitar cualquier tipo de fraude.

    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema4/img1.svg', alt='comercio electronico') 
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p A medida que los delincuentes electrónicos se vuelven más hábiles en sus métodos, la industria necesita desarrollar nuevos métodos y procedimientos para garantizar la seguridad de sus clientes e información en línea. Por ejemplo, para combatir este problema, algunas empresas de tarjetas de crédito proporcionan ahora números de tarjeta de crédito temporales. Estos números pueden ayudar a aumentar la confianza del consumidor en el comerciante porque el número real de la tarjeta no se revela. Muchos bancos exigen más información que un nombre de usuario y una contraseña para proteger las cuentas en línea debido a la suplantación de identidad y otras estafas.

    p.mb-5 Los proveedores de pagos en línea deben actualizar continuamente sus medidas de seguridad y antifraude para mantener la integridad de las transacciones. Las empresas que proporcionan sistemas de transacción en línea seguros y fiables para los comerciantes deberían aumentar la confianza de los consumidores y facilitar el crecimiento del comercio electrónico.

    .h6.mb-4 Protección de transacciones financieras
    p.mb-4 Es importante que el negocio virtual garantice, desde el principio, una pasarela de pagos segura que cuente con una buena infraestructura antifraude de manera que se minimice alguna probabilidad de pérdida económica del negocio-online. Para garantizar que la pasarela es confiable, se han implementado unas medidas mínimas de seguridad como son:

    .row.mb-4.justify-content-center
      .col-lg-7.align-self-center
        .row.mb-0.p-4
          .col-auto.align-self-center
            ul.fa-ul
              li.mb-4 #[span.li--clr.fa-li #[i.fas.fa-chevron-right]] #[strong Código de tres dígitos CVV:] visibles en la parte posterior de la tarjeta junto a la banda magnética. Que no puede ser la única medida de seguridad porque cualquier persona que tenga acceso a la tarjeta la puede visualizar fácilmente.
              li.mb-4 #[span.li--clr.fa-li #[i.fas.fa-chevron-right]]#[strong Sistema de seguridad 3DSecure:] originado por Visa y/o MasterCard, quienes asumen la responsabilidad de una posible reclamación por fraude a la entidad que emitió la tarjeta. Este sistema 3DSecure permite identificar el verdadero titular de la tarjeta a través de un PIN que solo conoce el propietario de la tarjeta. Este número de PIN depende de las reglas de seguridad que tenga la entidad bancaria, que generalmente son tres:
              li
                ul.fa-ul
                  li.mb-2 #[span.li--clr.fa-li #[i.fas.fa-atom]] El número PIN que es el mismo que solicitan los cajeros cuando se hace cualquier operación (clave personal).
                  li.mb-2 #[span.li--clr.fa-li #[i.fas.fa-atom]] El número PIN especial suministrado directamente por el banco al cliente (clave asignada).
                  li #[span.li--clr.fa-li #[i.fas.fa-atom]] El número PIN enviado a través de un mensaje al MSM de un único uso (clave dinámica).
      .col-lg-5.align-self-center
        figure
          img(
            src='@/assets/curso/tema4/img2.svg',
            alt=' Protección de transacciones'
          )

    p.mb-5 Es así que la implementación adecuada de este sistema de seguridad, puede reducir sustancialmente las acciones fraudulentas de cualquier pasarela de pagos, pero tampoco en su totalidad, porque al igual que va creciendo el negocio online, crecen también los riesgos del sitio o la ciberdelincuencia.

    TabsA.color-acento-contenido.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-secundario.p-4(titulo="Riesgos")
        p De  igual manera que ha venido creciendo el desarrollo de nuevos  servicios  o negocios por  internet, asimismo se ha ido incrementado la vulnerabilidad del sistema como objeto de robo de información confidencial,  con propósitos de fraude, estafas o  jaqueo, entre otras formas de ciberdelincuencia, afectando los intereses de empresas o personas naturales, razón por la cual se debe priorizar la protección de la red en todo momento,  para evitar que no ocurra cualquier riesgo que ponga en tela de juicio la seguridad del negocio.

      .tarjeta.color-secundario.p-4(titulo="Sistemas de protección")
        p Frente a los riesgos de fraude cibernéticos, los operadores de las pasarelas de pago responsables del servicio deben acoger una serie de medidas de protección y seguridad que implementen todos los mecanismos posibles para detectar y evitar cualquier ataque de ciberdelincuencia. Algunas de las medidas de protección o seguridad que deben implementar los operadores de las pasarelas de pago como los certificados TLS en sus siglas en inglés Transport Layer Security. Este protocolo no sólo proporciona confidencialidad en la información, también garantiza su integridad. Para ello se vale de un código de autenticación de mensaje (MAC, Message Authentication Code), el cual calcula mediante una función hash con una clave secreta que sólo conocen el emisor y el receptor de la comunicación. De esta forma, si un sólo bit de toda la información es modificado, el MAC será totalmente diferente y ambas partes podrían saber en ese punto que la información ha sido modificada.
    
      .tarjeta.color-secundario.p-4(titulo="Copias de seguridad")
        p Los operadores de pasarelas de pago también pueden hacer uso del backup que consiste en una copia de los datos originales que se realiza con el fin de disponer de un sistema de respaldo en caso de pérdida, deterioro o robo de información. Este sistema puede hacer que una pasarela de pago que se ha visto afectada por un fallo de seguridad pueda recuperar su actividad diaria.

      .tarjeta.color-secundario.p-4(titulo="Ley y normatividad vigente")
        p Además de las medidas de seguridad, es obligatorio que el negocio online tenga claro y cumpla con todas las medidas de carácter legal. En la actualidad en Colombia no se ha expedido una regulación específica sobre las condiciones de operación en las pasarelas de pago, no obstante, considerando que a través de él sigue así de una parte que permite a los clientes el pavo con instrumentos como tarjetas de débito crédito transferencias electrónicas entre otras siendo la puerta de entrada para los pagos. En la actualidad se encuentra en debate ante la cámara de representantes el proyecto ley por medio de la cual se regula la operación de las pasarelas de pagos en Colombia














</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
