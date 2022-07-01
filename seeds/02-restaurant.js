/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('restuarant').insert([
    {name: 'mahad',location:"Hodan",owner_id :"1"},
    {name: 'faarax',location:"Wadajir",owner_id :"2"},
    {name: 'deeq',location:"Yaqshid",owner_id :"3"}
  ]);
};
