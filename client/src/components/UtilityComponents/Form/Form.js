// React
import React from "react";

// Styles
import './form.css'
import { EditorInput, Title, ButtonWord } from '../index'



const Form = (props) => {




  return (
    <form>
      {/* <Title styles={{ fontSize: "50px", textAlign: "center", width: "100%" }}>Create Pet</Title> */}
      <EditorInput value={props.state.pet_name} name="pet_name" id="" on_change_function={props.on_change_input} label="Pet Name"></EditorInput>
      <EditorInput value={props.state.species} name="species" id="" on_change_function={props.on_change_input} label="Species"></EditorInput>
      <EditorInput value={props.state.breed} name="breed" id="" on_change_function={props.on_change_input} label="Breed"></EditorInput>
      <EditorInput value={props.state.sex} name="sex" id="" on_change_function={props.on_change_input} label="Sex"></EditorInput>
      <EditorInput value={props.state.weight} name="weight" id="" on_change_function={props.on_change_input} label="Weight"></EditorInput>
      <EditorInput value={props.state.age} name="age" id="" on_change_function={props.on_change_input} label="Estimated Age"></EditorInput>
      <EditorInput value={props.state.location} name="location" id="" on_change_function={props.on_change_input} label="Location"></EditorInput>
      <EditorInput value={props.state.fee} name="fee" id="" on_change_function={props.on_change_input} label="Adoption Fee"></EditorInput>
      <ButtonWord on_click_function={props.save_pet}>Save Pet!</ButtonWord>

    </form>
  );
}

export default Form;

