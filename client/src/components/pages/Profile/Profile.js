import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import { useHistory } from 'react-router-dom';
import { Section, FlexContainer } from '../../ContainerComponents/index'
import { Title, Label, ButtonWord } from '../../UtilityComponents/index'
import API from '../../../utils/API'

const Profile = () => {
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
        <Title styles={{ fontSize: 18 }}>Pet Name</Title>
        <Label>{pet_state.pet_name}</Label>
        <Title styles={{ fontSize: 18 }}>Species</Title>
        <Label>{pet_state.species}</Label>
        <Title styles={{ fontSize: 18 }}>Breed</Title>
        <Label>{pet_state.breed}</Label>
        <Title styles={{ fontSize: 18 }}>Sex</Title>
        <Label>{pet_state.sex}</Label>
        <Title styles={{ fontSize: 18 }}>Weight</Title>
        <Label>{pet_state.weight}</Label>
        <Title styles={{ fontSize: 18 }}>Estimated Age</Title>
        <Label>{pet_state.age}</Label>
        <Title styles={{ fontSize: 18 }}>Location</Title>
        <Label>{pet_state.location}</Label>
        <Title styles={{ fontSize: 18 }}>Adoption Fee</Title>
        <Label>{pet_state.fee}</Label>
        <ButtonWord on_click_function={handle_edit_pet}>Edit Pet</ButtonWord>
        {/* <img src={pet_state.image} alt="image"></img> */}
      </FlexContainer>

    </Section>
  )
}

export default Profile

