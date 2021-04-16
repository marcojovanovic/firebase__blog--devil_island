import React from 'react'
import styled from 'styled-components'

function Footer() {

  let date = new Date().getFullYear()

  return (
    <Wrapper>
      <h2>Copyright &#xA9; {`${date}`} Marco Jovanovic. All rights reserved </h2>
    </Wrapper>
  )
}


const Wrapper = styled.div`

 background:white;
 color:#333;
 padding:6rem;
 text-align:center;

 h2{
   font-size:calc(0.8rem + 0.5vw);
 }


`




export default Footer
