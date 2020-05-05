// React
import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
// Styles
import './App.css';
// Components
import { Profile, EditProfile, CreatePet, SearchPets } from './components/pages/index';
import { Container, Background, Header } from './components/ContainerComponents';

function App() {
  return (
    <Router>
      <Background>
        <Header />
        <Container>
          <Route path="/profile/:id" component={Profile} />
          <Route path="/editprofile/:id?" component={EditProfile} />
          <Route path="/createpet/:id?" component={CreatePet} />
          <Route path="/searchpets" component={SearchPets} />
        </Container>
      </Background>
    </Router>
  );
}

export default App;
