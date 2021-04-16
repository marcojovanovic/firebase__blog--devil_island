import React from 'react'
import styled from 'styled-components'



function DisplaySuccesLogin() {






  return (
    <LoginMessage>
      <h1>Uspesno ste se ulogovali...</h1>
    </LoginMessage>
  )
}


const LoginMessage = styled.div`

  padding:1.3rem 2rem;
  font-size:0.8rem;
  color:#3CB371;
  font-weight:bold;
  background:white;
  position:absolute;
  top:15.5rem;
  border-radius:10px;
  left:2rem;



`



export default DisplaySuccesLogin
