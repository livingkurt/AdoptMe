import axios from 'axios';

export default {
  // Get all Pets
  get_pets: function () {
    return axios.get('/api/pets');
  },
  // Get One Pet by ID
  get_pet: function (pet_id) {
    return axios.get('/api/pet/' + pet_id);
  },
  // Post One Pet
  post_pet: function (pet_data) {
    return axios.post('/api/pet', pet_data);
  },
  // Update One Pet by ID
  update_pet: function (pet_id, pet_data) {
    return axios.put('/api/pet/' + pet_id, pet_data);
  },
}
