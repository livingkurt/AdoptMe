import React from 'react'
import './header.css'
import { FlexContainer } from '../index';
import { Link } from "react-router-dom";
import { ButtonWord, Title } from '../../UtilityComponents/index';


const Header = (props) => {

  const handle_button_click = () => {
    console.log("click")
  }

  return (
    <div className="header">
      <Title styles={{ fontSize: "40px" }}>AdoptMe</Title>
      <FlexContainer>
        <Link to="/createpet"><ButtonWord styles={{ fontSize: "16px" }} on_click_function={handle_button_click}>Create Pet</ButtonWord></Link>
      </FlexContainer>
    </div>
  );
}

export default Header;
