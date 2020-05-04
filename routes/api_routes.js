const Pets = require("../models/pet");
// const axios = require("axios");
// const mongojs = require('mongojs')

// Export API Routes to Express
module.exports = function (app) {


  app.get('/api/pets', async (req, res) => {
    // console.log({ "api_routes.js - get all": req.body })
    try {
      const request = await Pets.find({})
      // Send the request back to the front end
      res.send(request)
    }
    catch (err) {
      console.log(err);
    }
  })
  app.get('/api/pet/:id', async (req, res) => {
    // console.log({ "api_routes.js - get all": req.body })
    try {
      // const request = await Pets.find({}).sort({ x: 1 });
      const request = await Pets.findOne({ _id: req.params.id })
      // Send the request back to the front end
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
      })
      // Send the request back to the front end
      res.send(request)
    }
    catch (err) {
      console.log(err);
    }
  })

}
