import { Knex } from 'knex';
import path from 'path';

const knexConfig: Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, '../../dist/database.sqlite3'), // Adjust path based on the directory structure
  },
  useNullAsDefault: true,
  migrations: {
    directory: path.resolve(__dirname, 'migrations'), // Ensure migrations path is correct
  },
  seeds: {
    directory: path.resolve(__dirname, 'seeds'), // Ensure seeds path is correct
  },
};

export default knexConfig;
