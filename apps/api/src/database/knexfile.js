// knexfile.js
const knexConfig = {
  client: 'sqlite3',
  connection: {
    filename: 'apps/api/src/database.sqlite3', // Adjust relative path from knexfile.js to the database
  },
  useNullAsDefault: true,
  migrations: {
    directory: './migrations', // Adjust path for migrations folder
  },
  seeds: {
    directory: './seeds', // Adjust path for seeds folder
  },
};

export default knexConfig;
