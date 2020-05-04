import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useHistory } from 'react-router-dom';
import { Section, FlexContainer } from '../../ContainerComponents/index'
import { Title, Label, ButtonWord } from '../../UtilityComponents/index'
import API from '../../../utils/API'

const Profile = (props) => {
  let history = useHistory();
  let params = useParams();
  const pet_id = params.id
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
  // console.log(pet_state)

  useEffect(() => {
    get_pet()
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

  const handle_edit_pet = () => {
    history.push("/editprofile/" + pet_id)
  }

  return (
    <Section>
      <Title styles={{ fontSize: "50px", textAlign: "center", width: "100%" }}>Pet Profile</Title>
      <FlexContainer styles={{ flexDirection: "column" }}>
        <Label>Pet Name</Label>
        <Label>{pet_state.pet_name}</Label>
        <Label>Species</Label>
        <Label>{pet_state.species}</Label>
        <Label>Breed</Label>
        <Label>{pet_state.breed}</Label>
        <Label>Sex</Label>
        <Label>{pet_state.sex}</Label>
        <Label>Weight</Label>
        <Label>{pet_state.weight}</Label>
        <Label>Estimated Age</Label>
        <Label>{pet_state.age}</Label>
        <Label>Location</Label>
        <Label>{pet_state.location}</Label>
        <Label>Adoption Fee</Label>
        <Label>{pet_state.fee}</Label>
        <ButtonWord on_click_function={handle_edit_pet}>Edit Pet</ButtonWord>
      </FlexContainer>

    </Section>
  )
}

export default Profile

