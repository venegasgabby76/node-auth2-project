
exports.up = function(knex) {
  return knex.schema
  .createTable("users" , tbl => {
      tbl.increments();
      tbl.string("username", 35).unique().notNullable();
      tbl.string("password", 35).notNullable();
      tbl.string("department",35).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExsists("users");
};
