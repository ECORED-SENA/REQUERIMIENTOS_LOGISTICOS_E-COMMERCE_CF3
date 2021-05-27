<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 3
      .h3 Plataformas de comercio financiera

    p.mb-4 A medida que las transacciones en línea siguen aumentando y se convierten en una parte importante de la economía mundial, la capacidad de aceptar pagos en línea adquiere mayor importancia para las empresas. El crecimiento del gasto en Internet, junto con la necesidad imperiosa de transacciones seguras, aumenta la importancia de los sistemas de pago en línea.
    .cajon.color-secundario.p-4.mb-5
      p Los sistemas de pago en línea pueden definirse en términos generales como los medios y procesos en la realización de transacciones en línea; sin embargo, esta descripción puede ampliarse para las conexiones monetarias en línea entre vendedores, compradores, instituciones financieros e intermediarios. Estos sistemas existen desde hace años, pero ahora se están convirtiendo en omnipresentes con el uso cada vez más común desde Internet, pues algunas de las ventajas que ofrecen son mayor eficiencia del flujo de caja, transacciones garantizadas, reducción de costos, mayor protección de la información sensible y protección del proveedor de pagos. Dado que el fraude es una preocupación frecuente.

    .h6.mb-5.text-center Planificación estratégica
    .row.mb-5.justify-content-center
      .col-lg-11.align-self-center
        figure
          img(
            src='@/assets/curso/tema3/img1.svg',
            alt='Planificacion estrategica'
          )

    .h6.mb-2 Comportamiento del comercio electrónico por pandemia en Colombia
    .row.mb-5.justify-content-center
      .col-lg-5.align-self-center
        figure
          img(
            src='@/assets/curso/tema3/img2.svg',
            alt='Comportamiento del comercio electrónico'
          )
      .col-lg-7.align-self-center
        P.mb-4 En los últimos tiempos, dígase desde el año 2020, desde la declaratoria del Covid-19 la economía a nivel mundial ha sufrido grandes cambios en la forma como se adquieren los productos, siendo una gran parte el comercio electrónico la elección más usada por consumidores y vendedores. Cientos de usuarios han optado por este medio como una vía de proseguir con el comercio de manera fiable y segura.
        p.mb-4 El sector más beneficiado son las grandes superficies, gracias a su respuesta oportuna en atender la demanda y en uso de las diferentes plataformas para acercamiento con los consumidores.
        .cajon.color-acento-contenido.p-4.mb-5
          p La nueva forma de comprar y la gestión optada por las empresas en el uso del comercio electrónico, suple las nuevas necesidades de los compradores compitiendo con tecnología moderna, servicio al cliente y seguridad en las operaciones lo que hace que los clientes tengan una manera diferente de consumo a través de los diferentes canales digitales.

    .h6.mb-2 Pasarelas de pago en el mercado
    .row.mb-4.justify-content-center
      .col-lg-7.align-self-center
        P.mb-4 Una pasarela de pago, también es conocida como procesador o procesador de tarjetas de crédito o cuenta débito; conecta el sitio web y el carro de la compra del comerciante, el banco adquirente (comerciante) y el banco emisor (titular de la tarjeta). La pasarela de pago gestiona todos los mensajes de comunicación entre estas entidades en el proceso y la liquidación del pago, siendo este, el eslabón clave de una transacción en línea. Las pasarelas más reconocidas en Colombia son:
        .row.entre-espacio.mb-5
          .col-auto.align-self-center
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Placetopay Evertec
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | PayU
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | EpayCo
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Zonapagos (zona Virtual)
              li 
                .lista-ol--cuadro__vineta
                  span 5
                | Pagos Inteligentes

          .col-auto.align-self-center
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 6
                | Wompi
              li 
                .lista-ol--cuadro__vineta
                  span 7
                | PayZen
              li 
                .lista-ol--cuadro__vineta
                  span 8
                | Mercado Pago
              li 
                .lista-ol--cuadro__vineta
                  span 9
                | Stripe en Colombia

      .col-lg-5.align-self-center
        figure
          img(
            src='@/assets/curso/tema3/img3.svg',
            alt=' Pasarelas de pago en el mercado'
          )
    p.mb-5 Actualmente en las plataformas que ofrece el mercado, no hay límite para ofrecer productos, sin embargo la cantidad de información afecta la estructura y puede influir en la velocidad de carga de las páginas y afectar la experiencia de los usuarios.
    .h6.mb-5.text-center Flujo de actividades de pasarela de pagos
    .row.mb-5.justify-content-center
      .col-lg-12.align-self-center
        figure
          img(
            src='@/assets/curso/tema3/img4.svg',
            alt='Flujo de actividades de pasarela de pagos'
          )
    p.mb-5 En la actualidad existen dos clases de pasarelas para realizar los pagos, modelo gateway y modelo agregador. La principal diferencia está dada por el encargado de recaudar los dineros de las compras realizadas por los usuarios finales; así los recaudos, en la pasarela, son de relación de adquirencia en el modelo agregador, siendo entre este y el banco, mientras que en el modelo gateway, la relación es entre el banco y el comercio. Atendiendo a lo anterior, en el modelo Gateway el dinero llega a las cuentas del comercio que vende el producto o servicio, mientras que en el modelo agregador, el dinero llega a las cuentas bancarias de la pasarela y ésta posteriormente las transfiere a las cuentas del comercio. En el siguiente cuadro, se evidencian otras diferencias entre los modelos gateway y agregador de las pasarelas de pago.

    .row.mb-4.justify-content-center
      .col-lg-10.align-self-center
        .tabla-b.mb-5 
          table
            caption Tabla 2: Modelos gateway y agregadorg
            thead.text-center
              tr
                th.text-center(
                  style='width: 50%; background-color: #7b3cee; color: white; padding: 1rem 0.5rem'
                ) Modelo gateway
                th(
                  style='width: 50%; background-color: #7b3cee; color: white; padding: 1rem 0.5rem'
                ) Modelo agregador
            tbody.text-center
              tr
                th.text-center(style="font-weight: normal; font-size: 16px;") Dinero en cuentas propias
                td Dinero en cuentas propias	Dinero en cuentas de pasarela de pagos
              tr
                th.text-center(style="font-weight: normal; font-size: 16px;") Afiliación al sistema financiero
                td Afiliación al sistema financiero	No requiere de afiliación al sistema financiero
              tr
                th.text-center(style="font-weight: normal; font-size: 16px;") Costo por transacción con un mínimo mensual
                td Costo porcentual más la transacción. No existe un cargo fijo mensual
              tr
                th.text-center(style="font-weight: normal; font-size: 16px;") Se debe realizar administración del dinero
                td El dinero se recauda en la pasarela de manera directa
              tr
                th.text-center(style="font-weight: normal; font-size: 16px;") Opera a través del sistema financiero
                td Opera a través del sistema financiero

    .cajon.color-secundario.p-4.mb-5
      p Además de conocer los beneficios que se tienen desde los modelos gateway y agregador, es importante conocer las pasarelas de pago y la relación de las tarifas en el modelo agregador para una visión de los costos en su implementación.

    .row.mb-4.justify-content-center
      .col-lg-10.align-self-center
        .tabla-b.mb-5 
          table
            caption Tabla 3: Tarifas de transacciones
            thead.text-center
              tr
                th.text-center(
                  style='width: 30%; background-color: #7b3cee; color: white; padding: 1rem 0.5rem'
                ) Empresa
                th(
                  style='width: 70%; background-color: #7b3cee; color: white; padding: 1rem 0.5rem'
                ) Tarifas de las transacciones en modelo agregador
            tbody
              tr
                th.text-center(style="font-weight: normal; font-size: 16px;") Placetopay Evertec
                td Varían de acuerdo al monto recaudado o al medio de pago elegido. Generalmente es 3.5% + $1.050 (mínimo $3.000 pesos) sobre el valor de la venta, aunque esta tarifa podría bajar según las especificaciones de tu negocio.
              tr
                th.text-center(style="font-weight: normal; font-size: 16px;") PayU
                td Si vendes menos de $100 millones al mes, la tarifa es 3,49% + $900. En caso de superar esa cifra de ventas, hay flexibilidad para renegociar los precios.
              tr
                th.text-center(style="font-weight: normal; font-size: 16px;") EpayCo
                td 
                  | Esta pasarela tiene dos tarifas dependiendo de si tienes o no cuenta en Davivienda: Otros bancos: 2.99 % + $900 por transacción exitosa.

                  br
                  br
                  | Cuenta en Davivienda: 2.68 % + $900 por transacción exitosa con cuatro retiros gratis al mes.
              tr
                th.text-center(style="font-weight: normal; font-size: 16px;") Zona Pagos
                td No especifican los precios en su web.

              tr
                th.text-center(style="font-weight: normal; font-size: 16px;") Pagos Inteligentes
                td 3.39% + $1.000 COP para negocios Online o 3.39% + $100 COP para puntos de venta. Si las ventas son superiores a $10 millones al mes, este valor puede renegociarse.
              tr
                th.text-center(style="font-weight: normal; font-size: 16px;") Wompi
                td 
                  | Su tarifa depende de la frecuencia con la que pondrán el dinero en tu cuenta: Diario: 2,85% + $800 + IVA
                  br
                  br
                  |Semanal: 2,75% + $700 + IVA
                  br
                  br
                  |Mensual: 2,65% + $700 + IVA
                  br
                  br
                  |Es importante anotar que el IVA en esta pasarela y en las demás es sobre el valor de la tarifa.
              tr
                th.text-center(style="font-weight: normal; font-size: 16px;") Stripe
                td 
                  |Como es una pasarela internacional, el cobro de la parte no variable es en dólares: 2.9 % + USD0.30
                  br
                  br
                  |Se pueden diseñar paquetes personalizados, para reducir el costo. Tienen descuentos por volumen, tasas específicas por país, descuentos por varios productos y tarifas de intercambio.

    .h6.mb-3 Procedimiento pagos pasarela
    p.mb-5 : la pasarela de pago cumple una función importante durante el proceso de pago, es quien genera la autorización de la compra o venta, la información del sistema de pago del sitio web del comerciante es enviada a la pasarela de pago por el carrito de la compra que verifica la información de la tarjeta y envía una solicitud al banco del titular de la tarjeta para que ésta sea cargada. Si los datos de la entidad financiera son válidos y los fondos del cliente son suficientes, envía una aprobación a la pasarela de pago, que a su vez se comunica con el carrito de la compra y confirma la autorización de la compra. La pasarela de pago inicia entonces una liquidación del pago (transferencia de fondos) para permitir la transferencia de fondos de la cuenta de la tarjeta de crédito del cliente a la cuenta bancaria del comerciante.

    .h6.text-center.mb-5 Esquema funcionamiento
    .row.mb-5.justify-content-center
      .col-lg-10.align-self-center
        figure
          img(
            src='@/assets/curso/tema3/img5.svg',
            alt='Esquema funcionamiento'
          )
    p.mb-4 La Superintendencia de industria y comercio (s,f,) establece los pasos para las transacciones de pago :

    .tarjeta.tarjeta--gris.p-4.mb-5
      PasosB.color-acento-contenido
        .row(titulo='Pasos')
          .col-md-4
            figure
              img(src='@/assets/curso/tema3/img6.svg', alt='pendiente')
          .col-md-8.mb-4.mb-md-0.align-self-center
            p Se ingresa a la plataforma e-comercio y el comprador escoge los productos, selecciona opción de pago donde la página del proveedor direcciona a la pasarela de pagos.

        .row(titulo='Pasos')
          .col-md-4
            figure
              img(src='@/assets/curso/tema3/img7.svg', alt='pendiente')
          .col-md-8.mb-4.mb-md-0.align-self-center
            p En la web ya ubicada en pasarela de pagos, el comprador suministra la información del medio de pago y el sistema lo terminar proceso acorde a sistema escogido.

        .row(titulo='Pasos')
          .col-md-4
            figure
              img(src='@/assets/curso/tema3/img8.svg', alt='pendiente')
          .col-md-8.mb-4.mb-md-0.align-self-center
            p Estos pasos identifican las redes bancarias y dan paso a la aceptación de la transacción acorde medio seleccionado en el punto 2.

        .row(titulo='Pasos')
          .col-md-4
            figure
              img(src='@/assets/curso/tema3/img9.svg', alt='pendiente')
          .col-md-8.mb-4.mb-md-0.align-self-center
            p El sistema financiero genera aprobación o declinación de la transacción efectuada.

        .row(titulo='Pasos')
          .col-md-4
            figure
              img(src='@/assets/curso/tema3/img10.svg', alt='pendiente')
          .col-md-8.mb-4.mb-md-0.align-self-center
            p El sistema envía contestación al banco por medio de la pasarela de pagos.

        .row(titulo='Pasos')
          .col-md-4
            figure
              img(src='@/assets/curso/tema3/img11.svg', alt='pendiente')
          .col-md-8.mb-4.mb-md-0.align-self-center
            p La pasarela de pagos genera comunicación informando a las partes del resultado de la operación.

        .row(titulo='Pasos')
          .col-md-4
            figure
              img(src='@/assets/curso/tema3/img12.svg', alt='pendiente')
          .col-md-8.mb-4.mb-md-0.align-self-center
            p Una vez aceptada la operación se abona en la entidad financiera referenciada por el vendedor.

    figure.mb-5
      .video
        iframe(
          width='734',
          height='413',
          src='https://www.youtube.com/embed/Vmg0zJX69Qc',
          title='YouTube video player',
          frameborder='0',
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
          allowfullscreen
        )
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
