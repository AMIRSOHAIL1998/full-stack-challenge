import { Knex } from 'knex';
import path from 'path';

const knexConfig: Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, '../../src/database.sqlite3'), // Adjust based on where the SQLite file is
  },
  useNullAsDefault: true,
  migrations: {
    directory: path.resolve(__dirname, '../../src/database/migrations'), // Ensure this path is correct
  },
  seeds: {
    directory: path.resolve(__dirname, '../../src/database/seeds'), // Ensure seeds path is correct
  },
};

export default knexConfig;
