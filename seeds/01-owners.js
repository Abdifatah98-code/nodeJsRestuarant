/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
 return await knex('owners').insert([
  {name: 'mahad',email:"mahad@gmail.com",created:"2022-04-20",updated:"2022-03-04"},
  {name: 'faarax',email:"faarax@gmail.com",created:"2022-06-22",updated:"2022-02-13"},
  {name: 'deeq',email:"deeq@gmail.com",created:"2022-05-11",updated:"2022-09-27"}
  ]);
};
