import React from 'react';
import styled from 'styled-components';

import { Header, Footer, BlogTitle } from '../components';
import Home from './Home';

function LandingPage() {
  return (
    <>
      <Header />
      <BlogTitle />
      <HomeContainer>
        <Home />
      </HomeContainer>
      <Footer />
    </>
  );
}

const HomeContainer = styled.div`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  padding: 3rem 8rem;
  background: #e6e6e6;


  @media screen and (max-width: 750px) {
  & {
     padding:1rem;
     margin:auto;
    
  }
}

`;

export default LandingPage;
