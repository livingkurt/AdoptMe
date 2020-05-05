// React
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router";
// Components
import { Section } from '../../ContainerComponents/index'
import { Form, Title } from '../../UtilityComponents/index'
import { useHistory } from 'react-router-dom';
// Utils
import API from '../../../utils/API'

const EditProfile = () => {

  // Assign Params to variable
  let params = useParams();

  let history = useHistory();

  const pet_id = params.id

  // On Load if there is a pet id make request to the database with that key
  useEffect(() => {
    get_pet()
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
  const update_pet = async (e) => {
    e.preventDefault()
    try {
      const res = await API.update_pet(pet_id, pet_state)
    }
    catch (err) {
      console.log({ "update_pet": err });
    }
    history.push('/profile/' + pet_id)
  }

  const handle_cancel = () => {
    history.push("/profile/" + pet_id)
  }


  return (
    <Section>
      <Title styles={{ fontSize: "40px", textAlign: "center", width: "100%", margin: "0px" }}>Edit Pet</Title>
      <Form setState={set_pet_state} state={pet_state} handle_cancel={handle_cancel} on_change_input={on_change_input} submit={update_pet} />
    </Section>
  )
}

export default EditProfile

