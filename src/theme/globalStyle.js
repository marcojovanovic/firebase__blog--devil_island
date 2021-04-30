import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  
  -webkit-text-size-adjust: 100%;
  line-height: 1.7;
}

@media (min-width: 700px) {
  html {
    font-size: 62.5%;
  }
}

body {
  background: #ffff;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.5;
}
ul li {
  list-style: none;
}

a {
  text-decoration: none !important;
  color: white;
  cursor: pointer;
}

ul {
  list-style: none;
}

p {
  font-size: 1.6rem;
}

img {
  display: block;
  width: 100%;
  border-style: none;
}

textarea {
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  background: url('https://img.freepik.com/free-photo/design-space-paper-textured-background_53876-42312.jpg?size=626&ext=jpg&ga=GA1.2.1950443642.1616284800')
    center no-repeat;
  background-size: cover;
  font-weight: bold;
}

input {
  background: transparent;
  border: none;
  outline: none;
  color: rgb(175, 177, 190);
  width:140%;
}

/* Full-width input fields */
input[type='text'],
input[type='password'] {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
}

input[type='text']:focus,
input[type='password']:focus {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  box-shadow: none ;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 2.5rem;
}


.text-center {
  text-align: center;
  margin-top: 1.5rem;
}



.blogPost__container {
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  padding:10rem 8rem;
  background: #e6e6e6;
}


@media screen and (max-width: 750px) {
  .blogPost__container {
     padding:1rem;
     margin:auto;
    
  }
}


`;

export default GlobalStyle