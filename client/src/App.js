import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import './App.css';
import { Profile, EditProfile, CreatePet } from './components/pages/index';
import { Container, Background, Header } from './components/ContainerComponents';

function App() {
  return (
    <BrowserRouter>
      <Background>
        <Container>
          <Header />
          <Route path="/profile/:id" component={Profile} />
          <Route path="/editprofile/:id?" component={EditProfile} />
          <Route path="/createpet/:id?" component={CreatePet} />

        </Container>
      </Background>
    </BrowserRouter>
  );
}

export default App;
