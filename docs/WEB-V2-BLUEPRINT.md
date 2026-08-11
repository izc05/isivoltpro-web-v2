# IsiVoltPro Web V2 — Blueprint de producto, imagen y motion

## 1. Objetivo

La Home no intenta explicar todo IsiVoltPro. Su trabajo es producir tres sensaciones en menos de 10 segundos:

1. **Impacto** — esto es una plataforma seria para instalaciones reales.
2. **Claridad** — entiendo qué conecta: activos, trabajo, mantenimiento y recursos.
3. **Confianza** — parece un producto industrial profesional, no una demo futurista.

La explicación profunda vive en las subpáginas.

---

## 2. Arquitectura pública

### Home `/`
Presentación comercial y puerta de entrada.

### Ecosistema `/ecosistema/`
Explica arquitectura y relaciones:
`Cliente → Instalación → Activo → Incidencia → OT → Mantenimiento → Histórico`.
Módulos laterales: Herramientas, Inventario, Preinspecciones BT, Recursos, Documentación y especialidades.

### Aplicaciones `/aplicaciones/`
Biblioteca de producto por estado:
- Operativas: Herramientas QR/NFC, IsiVoltPro OT.
- Beta: Preinspecciones BT.
- Desarrollo/roadmap: Activos, Inventario, Mantenimiento, RITE, PCI, Legionella, Documentación, cálculos y utilidades.

### Mantenimiento `/mantenimiento/`
Tres modos de trabajo:
- Correctivo.
- Preventivo.
- Reglamentario.

### Recursos `/recursos/`
Centro técnico: documentación, guías, artículos y materiales.

### Empresa `/empresa/`
Propósito, filosofía de producto, ingeniería y confianza.

### Contacto `/contacto/`
Solicitud de demo/piloto y contacto técnico.

---

## 3. Home — secuencia exacta

### Escena 01 — HERO / IMPACTO
**Mensaje:** `Toda tu instalación. Un solo sistema.`

**Imagen necesaria:**
- Sala técnica fotorrealista 16:9 / 21:9.
- Bombas + tuberías + cuadro/control + profundidad arquitectónica.
- Zona izquierda oscura y limpia para titulares.
- Sin personas.

**Motion:**
- Imagen: scale `1.05 → 1` en ~1.6 s.
- Eyebrow: fade/translate 16 px.
- Titular: reveal escalonado por líneas, 120–150 ms entre líneas.
- CTA: aparece después del titular.
- Scroll cue: punto azul que recorre una línea vertical.
- Parallax posterior: máximo 70 px; únicamente pointer fine.

**Móvil:**
- Sin parallax.
- Imagen reencuadrada hacia equipos.
- Titular máximo ~17vw.
- CTA apiladas.

### Escena 02 — OSCURO → CLARO
**Mensaje:** `Del activo al histórico, en una secuencia clara.`

**Paleta:** blanco roto `#F4F6F9`.

**Flujo:**
`Activo → Incidencia → OT → Histórico`

**Motion:**
- El fondo claro entra inmediatamente al cruzar el hero.
- Heading fade-up 30 px.
- Los cuatro nodos entran en cascada.
- Línea/flechas pueden dibujarse en desktop.

### Escena 03 — PRODUCTOS REALES
Tres grandes paneles, no una cuadrícula densa.

1. Herramientas QR/NFC — Operativa.
2. IsiVoltPro OT — Operativa.
3. Preinspecciones BT — Beta.

**Imagen necesaria:**
- Capturas reales de las aplicaciones cuando estén disponibles.
- Desktop/tablet para OT.
- Móvil para QR/NFC y BT.
- Fondo neutro y limpio.

**Motion:**
- Reveal de panel completo.
- Imagen con zoom máximo 2.5% al hover.
- Fase posterior: sticky product, si el rendimiento lo permite.

### Escena 04 — ECOSISTEMA RESUMIDO
**Mensaje:** `Todo lo que tu instalación necesita. En un solo lugar.`

Solo seis entradas visibles:
- Activos
- OT
- Mantenimiento
- Herramientas
- Inventario
- Especialidades

**Motion:**
- Lista se revela al scroll.
- Hover desplaza 8 px y aumenta contraste.
- Sin “constelación” compleja en Home.

### Escena 05 — SECTORES
**Mensaje:** `Un mismo estándar, en cada sector.`

Sectores:
- Hospitales.
- Industria.
- Edificios.
- Infraestructura.

**Imágenes necesarias:**
1. Hospital moderno / planta técnica hospitalaria.
2. Planta industrial.
3. Edificio terciario de alta calidad.
4. Infraestructura/túnel/estación/instalación pública.

**Motion:**
- Parallax máximo 35 px en fondo.
- Tarjetas translúcidas discretas.
- Mobile: imagen estática y tarjetas verticales.

### Escena 06 — CIERRE
**Mensaje:** `Tu instalación. Bajo control.`

**Imagen necesaria:** otra instalación potente distinta al hero, preferiblemente bombas o sala eléctrica con composición horizontal.

**CTA:**
- Solicitar demo.
- Explorar ecosistema.

---

## 4. Paleta

- Graphite: `#07111C`
- Graphite secondary: `#0D1724`
- White: `#FFFFFF`
- Off-white: `#F4F6F9`
- Text dark: `#101820`
- Steel muted: `#9DA9B8`
- IsiVoltPro blue: `#206DFF`
- Blue light: `#7AA4FF`

Regla: **oscuro para impacto, claro para explicación, oscuro para cierre**.

---

## 5. Principios de motion

1. El motion debe ayudar a comprender, no decorar.
2. Distancias cortas: 16–34 px para reveals.
3. Duraciones 600–900 ms.
4. Parallax muy limitado.
5. Sin animación automática continua en móvil.
6. `prefers-reduced-motion` siempre produce versión estática completa.
7. Evitar Three.js/WebGL en fase 1.
8. Si más adelante añadimos WebGL, debe existir fallback de imagen estática.

---

## 6. Imágenes definitivas a producir

### Prioridad A — necesarias para Home
- `hero-installation-v2.webp` — 2400×1500 aprox.
- `closing-installation-v2.webp` — 2200×1400.
- `sector-hospital.webp`.
- `sector-industry.webp`.
- `sector-building.webp`.
- `sector-infrastructure.webp`.
- screenshots reales de Herramientas, OT y BT.

### Prioridad B — subpáginas
- Cutaway técnico del ecosistema.
- Activo real con etiqueta QR/NFC.
- Técnico usando móvil/tablet (solo si aporta credibilidad).
- Cuadro eléctrico / UTA / bombas / PCI / ACS.
- Documentación/plano técnico en contexto.

### Tratamiento común
- Nada de stock genérico de “persona con casco sonriendo”.
- Imagen arquitectónica, precisa y limpia.
- Colores ligeramente desaturados.
- Contraste controlado.
- Azul IsiVoltPro como acento, nunca como neón excesivo.

---

## 7. Implementación técnica recomendada

- Astro para páginas estáticas y componentes.
- CSS propio + JavaScript pequeño.
- Imágenes AVIF/WebP responsive.
- Sin framework JS pesado para la Home.
- GitHub Actions: build, enlaces, accesibilidad básica y preview artifact.
- GitHub Pages solo después de validar rama/PR.

---

## 8. Criterio de aprobación del Hero

No se construye más complejidad si el Hero no cumple:
- El concepto se entiende sin scroll.
- El titular se lee en < 3 segundos.
- La imagen parece infraestructura real de alto nivel.
- No parece videojuego/cyberpunk.
- CTA principal obvia.
- En 390 px no corta el titular ni tapa el equipo clave.
