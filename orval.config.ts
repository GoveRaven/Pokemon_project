import { defineConfig } from 'orval';

export default defineConfig({
  pokeapi: {
    input: './src/shemas/openapi.yml',
    output: {
      target: './src/generated',
      mode: 'tags-split',
      client: 'fetch',
      baseUrl: 'https://pokeapi.co',
    },
  },
});
