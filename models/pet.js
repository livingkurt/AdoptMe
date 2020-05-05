
const mongoose = require('mongoose');
const { Schema } = mongoose;

const petSchema = new Schema({
  pet_name: {
    type: String,
  },
  species: String,
  breed: String,
  sex: String,
  weight: String,
  age: String,
  location: String,
  fee: String,
  image: Object
});

const Pet = mongoose.model('Pet', petSchema);


module.exports = Pet;