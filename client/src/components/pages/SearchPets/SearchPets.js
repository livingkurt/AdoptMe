import React, { useEffect, useState } from 'react'
import { Section, FlexContainer, CardContainer } from '../../ContainerComponents/index'
import { Title } from '../../UtilityComponents/index'
import API from '../../../utils/API'

const SearchPets = () => {

  // Initialize State
  const [pets_state, set_pets_state] = useState([])

  // On Load get all pets in database
  useEffect(() => {
    get_pets()
  }, [])

  // Get all pets and set state
  const get_pets = async () => {
    try {
      const res = await API.get_pets()
      set_pets_state(res.data)

    }
    catch (err) {
      console.log(err);
    }
  }
  // Loop over pets array and display them on the screen
  return (
    <Section>
      <Title styles={{ fontSize: "40px", textAlign: "center", width: "100%" }}>Search Pets</Title>
      <FlexContainer styles={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
        {pets_state.map((pet, index) => {
          return <CardContainer key={index} state={pet} />
        })}
      </FlexContainer>

    </Section>
  )
}

export default SearchPets

