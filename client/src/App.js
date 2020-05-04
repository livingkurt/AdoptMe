import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import './App.css';
import { Profile, EditProfile } from './components/pages/index';
import { Container, Background, Header } from './components/ContainerComponents';

function App() {
  return (
    <Background>
      <Container>
        <Header>
          AdoptMe
          {/* <h3>Find your family</h3> */}
        </Header>
        <BrowserRouter>
          <Route path="/profile/:id" component={Profile} />
          <Route path="/editprofile" component={EditProfile} />
        </BrowserRouter>
      </Container>
    </Background>
  );
}

export default App;
