
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', table => {
    table.increments().primary().index(),
    table.text('post_text'),
    table.timestamp('created_at').defaultTo(knex.fn.now())
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts')
};
