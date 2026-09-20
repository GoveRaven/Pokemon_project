import { defineConfig } from 'orval';

export default defineConfig({
  pokeapi: {
    input:
      'https://raw.githubusercontent.com/PokeAPI/pokeapi/refs/heads/master/openapi.yml',
    output: {
      target: './src/generated',
      mode: 'tags-split',
      client: 'fetch',
      baseUrl: 'https://pokeapi.co',
    },
  },
});
