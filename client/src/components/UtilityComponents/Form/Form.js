// React
import React from "react";

// Styles
import './form.css'
import { EditorInput, ButtonWord, Title, ImageUpload } from '../index'
import { FlexContainer, BlockContainer } from '../../ContainerComponents/index'



const Form = (props) => {

  return (
    <form>
      <FlexContainer styles={{ justifyContent: "space-between" }}>
        <BlockContainer styles={{ width: "50%" }}>
          <EditorInput value={props.state.pet_name} name="pet_name" id="" on_change_function={props.on_change_input} label="Pet Name"></EditorInput>
          <EditorInput value={props.state.species} name="species" id="" on_change_function={props.on_change_input} label="Species"></EditorInput>
          <EditorInput value={props.state.breed} name="breed" id="" on_change_function={props.on_change_input} label="Breed"></EditorInput>
          <EditorInput value={props.state.sex} name="sex" id="" on_change_function={props.on_change_input} label="Sex"></EditorInput>
          <EditorInput value={props.state.weight} name="weight" id="" on_change_function={props.on_change_input} label="Weight"></EditorInput>
          <EditorInput value={props.state.age} name="age" id="" on_change_function={props.on_change_input} label="Estimated Age"></EditorInput>
          <EditorInput value={props.state.location} name="location" id="" on_change_function={props.on_change_input} label="Location"></EditorInput>
          <EditorInput value={props.state.fee} name="fee" id="" on_change_function={props.on_change_input} label="Adoption Fee"></EditorInput>
          <ButtonWord on_click_function={props.save_pet}>Save Pet!</ButtonWord>
        </BlockContainer>
        <BlockContainer styles={{ width: "50%", textAlign: "center" }}>
          <Title styles={{ width: "100%" }}>Upload Image Here</Title>
          <ImageUpload setState={props.setState} state={props.state} />
        </BlockContainer>
      </FlexContainer>
    </form>
  );
}

export default Form;

