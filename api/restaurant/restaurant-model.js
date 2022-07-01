// const db = require("../../data/dbConfig");
const db = require("../../data/dbConfig");

module.exports ={
    find,
    findById,
    findByOwner,
    add,
    remove,
    update
}

function find(){
    let rows = db("restuarant");


    return rows;
}
function findById(id){
    return db("restuarant").where({id}).first()
}
function findByOwner(owner_id){
    return db("restuarant").where({owner_id});
}

async function add(retuarant){
    const [id] = await db("restuarant").insert(retuarant);
    return findById(id);

}

function remove(id){
    return db("restuarant").where({id}).del();
}
async function update(id,changes){
    const restaurant = await db("restuarant").where({id}).update(changes,"*");
    if (restaurant) {
        return findById(id);
    }
    return restaurant;

    //  return findById(id);
}