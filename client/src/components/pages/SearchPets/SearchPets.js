import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import { Section, FlexContainer, CardContainer } from '../../ContainerComponents/index'
import { Title } from '../../UtilityComponents/index'
import API from '../../../utils/API'

const Profile = (props) => {
  let params = useParams();


  // const pet_id = params.id
  const [pets_state, set_pets_state] = useState([])

  useEffect(() => {
    get_pets()
  }, [])

  const get_pets = async () => {
    try {
      const res = await API.get_pets()
      set_pets_state(res.data)

    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <Section>
      <Title styles={{ fontSize: "50px", textAlign: "center", width: "100%" }}>Search Pets</Title>
      <FlexContainer styles={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
        {pets_state.map((pet, index) => {
          return <CardContainer key={index} state={pet} />
        })}
      </FlexContainer>

    </Section>
  )
}

export default Profile

