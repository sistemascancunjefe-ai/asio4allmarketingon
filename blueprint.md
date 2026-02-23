# Blueprint de Migración de AsioMarketing.com a Astro

## 1. Visión General del Proyecto

Este documento detalla la propuesta de migración completa del sitio web asiomarketing.com a Astro.js. El objetivo principal es transformar el sitio de una arquitectura basada en React (Next.js) a una solución moderna, server-first, que aproveche la Arquitectura de Islas de Astro para mejorar drásticamente el rendimiento, la optimización para motores de búsqueda (SEO) y la experiencia del usuario.

## 2. Estado Actual de la Aplicación (Pre-Migración)

### 2.1. Diagnóstico Técnico: El "Estado de Deuda" Actual

El sitio actual de asiomarketing.com, construido con Next.js, presenta varias deficiencias que impactan negativamente en el rendimiento y la seguridad:

*   **Infraestructura Expuesta y Lenta:** Uso directo de S3 (us-east-1) sin CloudFront para video y assets, lo que provoca latencia en regiones como México y expone nombres de buckets internos, un riesgo de seguridad.
*   **Inflación del DOM:** El ticker de ofertas duplica texto en el HTML, aumentando el tiempo de parseo.
*   **SEO Deficiente:** Múltiples etiquetas H1, falta de datos estructurados (JSON-LD) y ausencia de archivos fundamentales como `robots.txt` y `sitemap.xml`.
*   **Media sin Optimizar:** Imágenes sin formatos de nueva generación (WebP/AVIF) ni carga diferida (lazy loading), resultando en un LCP (Largest Contentful Paint) "pobre" de 3-5 segundos.

### 2.2. Stack Actual

*   **Framework:** Next.js (React)
*   **Despliegue:** (Inferido de los problemas de S3)

## 3. Propuesta de Arquitectura (Post-Migración)

### 3.1. Arquitectura Propuesta

Se propone una migración a Astro.js, aprovechando la "Arquitectura de Islas" para un rendimiento superior.

*   **Framework Principal:** Astro.js
*   **UI Frameworks para Islas:** React, Vue, Solid, Svelte, Preact (según necesidad para interactividad específica).
*   **Edge Computing:** Cloudflare Edge (para optimización de assets y CDN).
*   **Módulos de Rendimiento:** Integración de módulos WebAssembly (WASM) para tareas computacionalmente intensivas.

### 3.2. Ventajas de Astro

*   **Rendimiento Extremo:** Generación de HTML estático con JavaScript mínimo por defecto.
*   **Experiencia de Desarrollador:** Facilidad para integrar múltiples frameworks de UI.
*   **SEO Mejorado:** Estructura de HTML limpia y optimizada para rastreadores.
*   **Core Web Vitals:** Objetivos de LCP, FID y CLS significativamente mejorados.

## 4. Roadmap de Migración

La migración se dividirá en 3 sprints principales:

1.  **Sprint 1: Design System & Componentes Estáticos:**
    *   Definición y creación de un Design System básico en Astro.
    *   Migración de componentes estáticos (ej. header, footer, navegación) a componentes `.astro`.
    *   Configuración de estilos (ej. Tailwind CSS).
2.  **Sprint 2: Páginas Estáticas:**
    *   Migración de las páginas principales de contenido estático (ej. Home, Acerca de, Servicios) a Astro.
    *   Implementación de fetched data desde el frontmatter de Astro.
    *   Optimización de imágenes y media.
    *   Configuración de SEO básico (meta tags, robots.txt, sitemap.xml).
3.  **Sprint 3: Islas Dinámicas e Integraciones:**
    *   Identificación y migración de las partes interactivas del sitio a "islas" con frameworks UI (ej. carruseles, formularios, contadores).
    *   Implementación de directivas `client:` para hidratación parcial.
    *   Integración de Cloudflare Edge.
    *   Exploración e integración de módulos WASM si es necesario.

## 5. Estimaciones de Performance

*   **LCP Esperado:** Reducción significativa, apuntando a menos de 2.5 segundos.
*   **Bundle Size Reduction:** Reducción drástica del tamaño del bundle JavaScript.
*   **Core Web Vitals Target:** Optimización para alcanzar puntuaciones excelentes en todas las métricas.

## 6. Breaking Changes y Riesgos

*   **Posibles Breaking Changes:** Refactorización de la estructura de rutas, cambios en la gestión de estados para componentes interactivos.
*   **Plan de Rollback:** Mantener la versión actual de Next.js desplegada como contingencia durante cada sprint.

## 7. Comparación de Stack: React (Next.js) vs Astro

| Característica         | Next.js (React)                                    | Astro.js                                                 |
| :--------------------- | :------------------------------------------------- | :------------------------------------------------------- |
| **Arquitectura**       | Server-Side Rendering (SSR) o Static Site Generation (SSG) con hidratación completa | Server-First, "Arquitectura de Islas" con hidratación parcial |
| **JavaScript por defecto** | Envía JS para toda la página                       | Cero JS por defecto, solo el necesario para islas interactivas |
| **Rendimiento**        | Bueno, pero puede sufrir con JS innecesario         | Excelente, optimizado para Core Web Vitals             |
| **SEO**                | Bueno                                              | Superior, HTML estático y limpio                         |
| **Flexibilidad UI**    | Principalmente React                               | Permite múltiples frameworks UI (React, Vue, Svelte, etc.) |
| **Curva de Aprendizaje** | Media (si ya conoces React)                        | Baja (para conceptos básicos), Media (para optimización avanzada) |

---

## 8. Plan y Pasos para la Solicitud Actual

La solicitud actual es la creación de este `blueprint.md` para iniciar la planificación de la migración. Los pasos futuros se centrarán en la ejecución del roadmap descrito en la Sección 4.
