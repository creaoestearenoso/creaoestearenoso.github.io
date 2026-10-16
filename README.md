# Sitio de la zona CREA Oeste Arenoso

Sitio institucional de la zona Oeste Arenoso: grupos, autoridades y contacto. Tres páginas, sin blog ni base de datos.

Publicado en <https://creaoestearenoso.org.ar> (dominio de AACREA, DNS en la cuenta de Cloudflare de la zona).

## De quién es

Este repositorio y la organización que lo contiene pertenecen a la **zona Oeste Arenoso**,
no a una persona. Al cambiar las autoridades de la zona se transfiere la titularidad de la
organización a quien corresponda; no hace falta mover los repositorios.

## Cómo se publica

Astro genera el sitio y GitHub Actions lo publica en GitHub Pages con cada push a `main`.
No hay servidor ni base de datos.

## Desarrollo local

Requiere Node 24.

```sh
npm install
npm run dev     # servidor local en http://localhost:4321
npm run build   # genera dist/
```
