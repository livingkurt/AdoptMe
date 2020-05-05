import axios from 'axios';

export default {
  get_pets: function () {
    return axios.get('/api/pets');
  },
  get_pet: function (pet_id) {
    return axios.get('/api/pet/' + pet_id);
  },
  post_pet: function (pet_data) {
    return axios.post('/api/pet', pet_data);
  },
  update_pet: function (pet_id, pet_data) {
    return axios.put('/api/pet/' + pet_id, pet_data);
  },
}
