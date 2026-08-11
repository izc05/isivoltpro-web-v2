# Sistema de iluminación viva — IsiVoltPro Web V2

## Objetivo

La iluminación no funciona como decoración ni como efecto de espectáculo. Debe hacer que una instalación técnica parezca viva, activa y bajo control sin distraer del contenido principal.

## Principios

- Movimiento lento y asíncrono.
- Nada de parpadeos bruscos.
- Pocas zonas activas al mismo tiempo.
- Luz cálida para espacios físicos; azul IsiVoltPro solo para monitorización.
- Sin glow exagerado ni estética cyberpunk.
- En móvil se reduce la cantidad de capas.
- `prefers-reduced-motion` produce un estado estático completo.
- Las animaciones se pausan si la pestaña queda en segundo plano.

## Hero

Implementado en `src/components/home/HeroSection.astro` y `src/styles/home-lighting.css`.

Capas actuales:

1. `hero-light--plant`: respiración cálida suave.
2. `hero-light--room`: ciclo de reducción de intensidad lento.
3. `hero-light--service`: segunda respiración desfasada.
4. `hero-light--cool`: reflejo técnico azulado muy tenue.
5. `hero-monitor--a` y `hero-monitor--b`: puntos de monitorización discretos.

En tablet y móvil se eliminan progresivamente las capas menos importantes.

## Cierre

La escena final usa únicamente dos zonas de luz y un punto técnico, con duraciones mayores que en el Hero. Su función es transmitir calma y control.

## Ecosistema / cutaway pendiente

La siguiente pieza visual debe diseñarse expresamente para soportar máscaras de iluminación reales. No se añadirá una imagen genérica solo para poder animarla.

El cutaway definitivo deberá incluir claramente:

- Zona HVAC / cubierta técnica.
- Sala eléctrica o cuadros.
- Bombeo / hidráulica.
- Una o dos salas secundarias visibles.
- Separación física suficiente entre zonas para que las máscaras no se mezclen.
- Composición sin texto ni interfaces incrustadas.

Sobre esa imagen se prepararán aproximadamente cinco máscaras de luz independientes y dos o tres puntos de monitorización.

## Criterio de aprobación

El usuario no debería pensar “qué animación más llamativa”. La sensación correcta es: “esta instalación parece estar funcionando de verdad”.
