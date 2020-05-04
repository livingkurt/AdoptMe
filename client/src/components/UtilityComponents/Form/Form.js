// React
import React from "react";

// Styles
import './form.css'
import { EditorInput, Title, ButtonWord } from '../index'



const Form = (props) => {




  return (
    <form>
      {/* <Title styles={{ fontSize: "50px", textAlign: "center", width: "100%" }}>Create Pet</Title> */}
      <EditorInput name="pet_name" id="" on_change_function={props.on_change_input} label="Pet Name"></EditorInput>
      <EditorInput name="species" id="" on_change_function={props.on_change_input} label="Species"></EditorInput>
      <EditorInput name="breed" id="" on_change_function={props.on_change_input} label="Breed"></EditorInput>
      <EditorInput name="sex" id="" on_change_function={props.on_change_input} label="Sex"></EditorInput>
      <EditorInput name="weight" id="" on_change_function={props.on_change_input} label="Weight"></EditorInput>
      <EditorInput name="age" id="" on_change_function={props.on_change_input} label="Estimated Age"></EditorInput>
      <EditorInput name="location" id="" on_change_function={props.on_change_input} label="Location"></EditorInput>
      <EditorInput name="fee" id="" on_change_function={props.on_change_input} label="Adoption Fee"></EditorInput>
      <ButtonWord on_click_function={props.save_pet}>Save Pet!</ButtonWord>

    </form>
  );
}

export default Form;

