// connection.ts (or connection.js if using JavaScript)
import knex from 'knex';
import knexConfig from './knexfile'; // Assuming knexfile contains your database configuration

const db = knex(knexConfig); // Initialize knex with the config

export default db;
