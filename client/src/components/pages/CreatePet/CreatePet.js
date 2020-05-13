// React
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router";
// Components
import { Section } from '../../ContainerComponents/index'
import { Form, Title } from '../../UtilityComponents/index'
import { useHistory } from 'react-router-dom';
// Utils
import API from '../../../utils/API'

const CreatePet = () => {

  // Assign Params to variable
  let params = useParams();

  let history = useHistory();

  const pet_id = params.id

  // On Load if there is a pet id make request to the database with that key
  useEffect(() => {
    if (pet_id) {
      get_pet()
    }

  }, [])

  // Initalize State
  const [pet_state, set_pet_state] = useState({
    pet_name: "",
    species: "",
    breed: "",
    sex: "",
    weight: "",
    age: "",
    location: "",
    fee: "",
    image: ""
  })

  // Get Single Pet from Database
  const get_pet = async () => {
    try {
      const res = await API.get_pet(pet_id)
      set_pet_state(res.data)

    }
    catch (err) {
      console.log(err);
    }
  }

  // When the user types in the inputs it will update the state with the field associated with that input
  const on_change_input = (e) => {
    const pet_data = e.target.value
    const field_name = e.target.name
    set_pet_state({ ...pet_state, [field_name]: pet_data })
  }

  // When user submits form post data to database and redirect to the new pet profile
  const save_pet = async (e) => {
    e.preventDefault()
    let id = ""
    try {
      const res = await API.post_pet(pet_state)
      id = res.data._id
    }
    catch (err) {
      console.log({ "save_pet": err });
    }
    history.push('/profile/' + id)
  }

  const handle_cancel = () => {
    history.push("/searchpets")
  }

  return (
    <Section>
      <Title styles={{ fontSize: "40px", textAlign: "center", width: "100%", margin: "0px" }}>Create Pet</Title>
      <Form setState={set_pet_state} state={pet_state} on_change_input={on_change_input} handle_cancel={handle_cancel} submit={save_pet} />
    </Section>
  )
}

export default CreatePet

