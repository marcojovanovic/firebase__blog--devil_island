import React from 'react';
import styled from 'styled-components';

function DisplaySuccesLogin() {
  return (
    <>
      <LoginMessage>Uspesno ste se ulogovali</LoginMessage>
    </>
  );
}

const LoginMessage = styled.h5`
  color: white;
  font-size: 1.7rem;
`;

const LoginContent = styled.div`
  
`;

export default DisplaySuccesLogin;
