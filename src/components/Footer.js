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

 background:#ff923c;
 color:white;
 padding:4rem;
 text-align:center;




`




export default Footer
