// React
import React from "react";
// Styles
import './card_container.css'
import { FlexContainer } from '../index'
import { Title, Label, ButtonWord } from '../../UtilityComponents/index'
import { useHistory } from 'react-router-dom';


function CardContainer(props) {
  let history = useHistory();
  const handle_view_profile = () => {
    console.log(props.state._id)
    history.push('/profile/' + props.state._id)

  }

  return (
    <div className="card_container" id={props.state._id} style={props.styles}>
      <FlexContainer styles={{ flexDirection: "column" }}>
        <Title styles={{ fontSize: 18 }}>Pet Name</Title>
        <Label>{props.state.pet_name}</Label>
        <Title styles={{ fontSize: 18 }}>Species</Title>
        <Label>{props.state.species}</Label>
        <Title styles={{ fontSize: 18 }}>Breed</Title>
        <Label>{props.state.breed}</Label>
        <Title styles={{ fontSize: 18 }}>Sex</Title>
        <Label>{props.state.sex}</Label>
        <Title styles={{ fontSize: 18 }}>Weight</Title>
        <Label>{props.state.weight}</Label>
        <Title styles={{ fontSize: 18 }}>Estimated Age</Title>
        <Label>{props.state.age}</Label>
        <Title styles={{ fontSize: 18 }}>Location</Title>
        <Label>{props.state.location}</Label>
        <Title styles={{ fontSize: 18 }}>Adoption Fee</Title>
        <Label>{props.state.fee}</Label>
        {/* <ButtonWord on_click_function={handle_edit_pet}>Edit Pet</ButtonWord> */}
        {/* <img src={props.state.image} alt="image"></img> */}

      </FlexContainer>
      <FlexContainer styles={{ justifyContent: "center", width: "100%" }}>
        <ButtonWord styles={{ fontSize: "16px", marginBottom: 0 }} on_click_function={handle_view_profile}>View Pet Profile</ButtonWord>
      </FlexContainer>
    </div>
  );
}

export default CardContainer;
