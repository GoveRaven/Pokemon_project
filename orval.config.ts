import { defineConfig } from 'orval';

export default defineConfig({
  pokeapi: {
    input:
      'https://raw.githubusercontent.com/PokeAPI/pokeapi/refs/heads/master/openapi.yml',
    output: {
      target: './src/generated/pokeapi.ts',
      client: 'fetch',
      baseUrl: 'https://pokeapi.co',
    },
  },
});
