import React, { useState } from 'react'
import { Section } from '../../ContainerComponents/index'
import { Form, Title } from '../../UtilityComponents/index'
import { useHistory } from 'react-router-dom';
import API from '../../../utils/API'

const EditProfile = () => {

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
    // history.push({
    //   pathname: '/profile',
    //   id: id
    // })
  }
  return (
    <Section>
      <Title styles={{ fontSize: "40px", textAlign: "center", width: "100%", margin: "0px" }}>Create Pet</Title>
      <Form on_change_input={on_change_input} save_pet={save_pet} />
    </Section>
  )
}

export default EditProfile

