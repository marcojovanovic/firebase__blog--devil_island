import React from 'react';
import styled from 'styled-components';

import { MdArrowBack } from 'react-icons/md/';

import { Link } from 'react-router-dom';

function RedirectPage() {
  return (
    <Wrapper>
      <Link to="/">
        <Button>
          <MdArrowBack className="backIcon" />
        </Button>
      </Link>
    </Wrapper>
  );
}

export default RedirectPage;

const Wrapper = styled.div`
  height: 100vh;
  background: url('https://www.jco.fi/wp-content/uploads/2019/10/hero-blog-404.jpg');
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 8rem;
`;

const Button = styled.div`
  font-weight: bold;
  color: white;
  line-height: 2.5rem;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  border: 0;
  border-radius: 3rem;
  background-image: linear-gradient(131deg, #00b9bb, #01b169, #01b169, #01b169);
  background-size: 300% 100%;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  text-align: center;
  margin-top: 6rem;

  &:hover {
    box-shadow: 0 0.5em 0.5em -0.4em #58dedd;
    background-size: 100% 100%;
    transform: translateY(-0.15em);
  }

  .backIcon {
    font-size: 4rem;
  }
`;
