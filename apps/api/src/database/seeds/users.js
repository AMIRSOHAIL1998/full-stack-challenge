// users.js (Seed file)
const bcrypt = require('bcrypt');

async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del();

  const hashedPassword = await bcrypt.hash('123@password', 10);

  // Inserts seed entries
  await knex('users').insert([
    {
      id: 1,
      name: 'Amir 1',
      email: 'amir1@gmail.com',
      type: 'user',
      password: hashedPassword,
    },
    {
      id: 2,
      name: 'Amir 2',
      email: 'amir2@gmail.com',
      type: 'user',
      password: hashedPassword,
    },
  ]);
}

// Export the seed function
module.exports = { seed };
