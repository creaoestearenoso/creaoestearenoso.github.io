import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const novedades = defineCollection({
  loader: glob({ base: './src/content/novedades', pattern: '**/*.md' }),
  schema: z.object({
    titulo: z.string(),
    fecha: z.coerce.date(),
    resumen: z.string(),
  }),
});

export const collections = { novedades };
