import { Knex } from 'knex';

export const up = async (knex: Knex): Promise<void> => {
  await knex.schema.createTable('users', (table) => {
    table.string('id').notNullable().primary();
    table.string('email').notNullable();
    table.string('name').notNullable();
    table.enu('type', ['admin', 'user']).notNullable().defaultTo('user');
    table.string('password').notNullable();
    table.datetime('created_at').defaultTo(knex.fn.now());
    table.datetime('updated_at').defaultTo(knex.fn.now());
    table.datetime('deleted_at');
  });
};

export const down = async (knex: Knex): Promise<void> => {
  await knex.schema.dropTable('users');
};
