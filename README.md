# Sitio de la zona CREA Oeste Arenoso

Sitio institucional de la zona Oeste Arenoso: grupos, autoridades, coordinación y novedades.

Publicado en <https://creaoestearenoso.github.io>.

## De quién es

Este repositorio y la organización que lo contiene pertenecen a la **zona Oeste Arenoso**,
no a una persona. Al cambiar las autoridades de la zona se transfiere la titularidad de la
organización a quien corresponda; no hace falta mover los repositorios.

## Cómo se publica

Astro genera el sitio y GitHub Actions lo publica en GitHub Pages con cada push a `main`.
No hay servidor ni base de datos.

## Cómo se carga una novedad

Crear un archivo markdown en `src/content/novedades/`, por ejemplo `jornada-ganadera.md`:

```markdown
---
titulo: "Jornada ganadera en Trenque Lauquen"
fecha: 2026-10-02
resumen: "Una línea contando de qué se trata."
---

El texto de la nota, en markdown.
```

El nombre del archivo es la dirección de la nota (`/novedades/jornada-ganadera`).

## Desarrollo local

Requiere Node 24.

```sh
npm install
npm run dev     # servidor local en http://localhost:4321
npm run build   # genera dist/
```
