exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
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

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
