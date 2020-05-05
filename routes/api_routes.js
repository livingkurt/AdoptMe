const Pets = require("../models/pet");

module.exports = function (app) {
  app.get('/api/pets', async (req, res) => {
    try {
      const request = await Pets.find({})
      res.send(request)
    }
    catch (err) {
      console.log(err);
    }
  })
  app.get('/api/pet/:id', async (req, res) => {
    try {
      const request = await Pets.findOne({ _id: req.params.id })
      res.send(request)
    }
    catch (err) {
      console.log(err);
    }
  })
  app.post('/api/pet', async (req, res) => {
    console.log({ "API.s": req.body })
    try {
      const request = await Pets.create({
        pet_name: req.body.pet_name,
        species: req.body.species,
        breed: req.body.breed,
        sex: req.body.sex,
        weight: req.body.weight,
        age: req.body.age,
        location: req.body.location,
        fee: req.body.fee,
        image: req.body.image,
      })
      res.send(request)
    }
    catch (err) {
      console.log(err);
    }
  })

}
