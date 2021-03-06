import React from 'react';
import styled from 'styled-components';

import { Navbar, Footer, BlogTitle } from '../components';
import Home from './Home';

function LandingPage() {
  return (
    <>
      <Navbar />
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
  grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
  padding: 1.5rem 8rem 14rem 8rem;
  background: #e6e6e6;

  @media screen and (max-width: 750px) {
    & {
      padding: 1rem;
      margin: auto;
    }
  }
`;

export default LandingPage;
