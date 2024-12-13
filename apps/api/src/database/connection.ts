import knex, { Knex } from 'knex'; // Import knex and its types
import knexConfig from './knexfile'; // Import knex configuration from knexfile.ts (or knexfile.js)

const db: Knex = knex(knexConfig); // Initialize knex with the config

export default db; // Export the knex instance for usage in other files
