/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("owners",(table)=>{
        table.increments("id").primary().unsigned().notNullable(),
        table.string("name"),
        table.string("email"),
        table.date("created"),
        table.date("updated ")
      }).createTable("restuarant",tbl=>{
        tbl.increments("id").primary().unsigned().notNullable(),
        tbl.string("name"),
        tbl.string("location"),
        tbl.integer("owner_id").unsigned().notNullable().references("id").inTable("owners")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
    
      })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
