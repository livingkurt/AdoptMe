// React
import React from 'react'
import { Link, useHistory } from "react-router-dom";
// Styles
import './header.css'
// Components
import { FlexContainer } from '../index';
import { ButtonWord, Title } from '../../UtilityComponents/index';



const Header = (props) => {
  let history = useHistory();
  const handle_button_click = () => {
    console.log("click")
  }
  const redirect_to_search = () => {
    history.push('/')
  }

  return (
    <div className="header">

      <Title styles={{ fontSize: "40px", color: "white", textDecoration: 'none' }}><button onClick={redirect_to_search} id="home_button">AdoptMe</button></Title>
      <FlexContainer>
        <Link to="/createpet"><ButtonWord styles={{ fontSize: "16px", marginRight: 10 }} on_click_function={handle_button_click}>Create Pet</ButtonWord></Link>
        <Link to="/searchpets"><ButtonWord styles={{ fontSize: "16px" }} on_click_function={handle_button_click}>Search Pets</ButtonWord></Link>
      </FlexContainer>
    </div >
  );
}

export default Header;
