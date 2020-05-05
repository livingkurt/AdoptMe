// React
import React from 'react'
import { Link } from "react-router-dom";
// Components
import { Section, FlexContainer } from '../../ContainerComponents/index'
import { Title, ButtonWord } from '../../UtilityComponents/index'


const Home = () => {

  const handle_button_click = () => {
    console.log("click")
  }

  return (
    <Section styles={{ margin: "150px 500px 0px 500px" }}>
      <Title styles={{ fontSize: "40px", textAlign: "center", width: "100%", margin: "0px" }}>Welcome to AdoptMe</Title>
      <Title styles={{ fontSize: "30px", textAlign: "center", width: "100%", margin: "0px" }}>A place where you can be united with a long lost friend</Title>
      <FlexContainer styles={{ justifyContent: "center" }}>
        <img src="dog_man_1.jpg" height="400px" alt="dogs" />
      </FlexContainer>
      <FlexContainer styles={{ justifyContent: "center" }}>
        <Link to="/createpet"><ButtonWord styles={{ fontSize: "16px", marginRight: 10 }} on_click_function={handle_button_click}>Create Pet</ButtonWord></Link>
        <Link to="/searchpets"><ButtonWord styles={{ fontSize: "16px" }} on_click_function={handle_button_click}>Search Pets</ButtonWord></Link>
      </FlexContainer>
    </Section>
  )
}

export default Home

