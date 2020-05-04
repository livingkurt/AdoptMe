import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { Section } from '../../ContainerComponents/index'
import { Form, Title } from '../../UtilityComponents/index'
import { useHistory } from 'react-router-dom';
import API from '../../../utils/API'

const EditProfile = () => {
  let params = useParams();
  const pet_id = params.id
  useEffect(() => {
    if (pet_id) {
      get_pet()
    }

  }, [])

  const get_pet = async () => {
    try {
      const res = await API.get_pet(pet_id)
      set_pet_state(res.data)

    }
    catch (err) {
      console.log(err);
    }
  }

  let history = useHistory();
  const [pet_state, set_pet_state] = useState({
    pet_name: "",
    species: "",
    breed: "",
    sex: "",
    weight: "",
    age: "",
    location: "",
    fee: "",
  })

  const on_change_input = (e) => {
    // const pet_id = pet_state._id
    const pet_data = e.target.value
    const field_name = e.target.name
    console.log(pet_data, field_name)
    set_pet_state({ ...pet_state, [field_name]: pet_data })
  }

  const save_pet = async (e) => {
    e.preventDefault()
    let id = ""
    try {
      console.log({ "Save Pet": pet_state })
      const res = await API.post_pet(pet_state)
      id = res.data._id
      // console.log(id)
    }
    catch (err) {
      console.log({ "on_change_pet_editor": err });
    }
    console.log(id)
    history.push('/profile/' + id)
  }
  return (
    <Section>
      <Title styles={{ fontSize: "40px", textAlign: "center", width: "100%", margin: "0px" }}>Create Pet</Title>
      <Form state={pet_state} on_change_input={on_change_input} save_pet={save_pet} />
    </Section>
  )
}

export default EditProfile

