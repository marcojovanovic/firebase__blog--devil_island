import React from 'react';
import styled from 'styled-components';


function Notification() {

  return (
    <>
      <ErrorMessage>Prijava nije dobro popunjena</ErrorMessage>
    </>
  );
}

const ErrorMessage = styled.h1`
  font-size: 1.5rem;
  color: white;
`;

export default Notification;
