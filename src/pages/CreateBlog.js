import React from 'react';

import { DevilContext } from '../context';
import { withRouter, Redirect } from 'react-router-dom';
import styled from 'styled-components';

function CreateBlog(props) {
  const input = `#viki`;

  const {
    user,
    username,
    isLogged,
    handleChangeBlog,
    redirectPage,
    handleSubmitBlog,
  } = React.useContext(DevilContext);

  if (isLogged === false) {
    return <Redirect to="/" />;
  }

  function doRedirectNow() {
    if (redirectPage === true) {
      return <Redirect to="/" />;
    }
  }

  return (
    <Wrapper>
      {user && username}

      <Title>Napravi Blog</Title>

      <FormContainer>
        <form onSubmit={handleSubmitBlog}>
          <Label htmlFor="naslov">Naslov Bloga</Label>
          <FormField>
            <input type="text" onChange={handleChangeBlog} name="naslov" />
          </FormField>

          <div className="form-group">
            <label htmlFor="color">Sadržaj</label>

            <textarea
              type="text"
              className="form-control"
              onChange={handleChangeBlog}
              name="sadrzaj"
            ></textarea>
          </div>

          <Label htmlFor="Img">ImgURL</Label>
          <FormField>
            <input type="text" onChange={handleChangeBlog} name="imgURL" />
          </FormField>

          <div className="form-group">
            <Label htmlFor="Autor">Autor</Label>
            <FormField>
              <input
                type="text"
                onChange={handleChangeBlog}
                name="autor"
              />
            </FormField>
          </div>

          <button className='btn' onClick={doRedirectNow} type="submit">
            Add Post
          </button>
        </form>
      </FormContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-image: radial-gradient(
      circle at 29% 55%,
      hsla(329, 0%, 99%, 0.05) 0%,
      hsla(329, 0%, 99%, 0.05) 4%,
      transparent 4%,
      transparent 44%,
      transparent 44%,
      transparent 100%
    ),
    radial-gradient(
      circle at 85% 89%,
      hsla(329, 0%, 99%, 0.05) 0%,
      hsla(329, 0%, 99%, 0.05) 51%,
      transparent 51%,
      transparent 52%,
      transparent 52%,
      transparent 100%
    ),
    radial-gradient(
      circle at 6% 90%,
      hsla(329, 0%, 99%, 0.05) 0%,
      hsla(329, 0%, 99%, 0.05) 53%,
      transparent 53%,
      transparent 64%,
      transparent 64%,
      transparent 100%
    ),
    radial-gradient(
      circle at 35% 75%,
      hsla(329, 0%, 99%, 0.05) 0%,
      hsla(329, 0%, 99%, 0.05) 6%,
      transparent 6%,
      transparent 98%,
      transparent 98%,
      transparent 100%
    ),
    radial-gradient(
      circle at 56% 75%,
      hsla(329, 0%, 99%, 0.05) 0%,
      hsla(329, 0%, 99%, 0.05) 16%,
      transparent 16%,
      transparent 23%,
      transparent 23%,
      transparent 100%
    ),
    radial-gradient(
      circle at 42% 0%,
      hsla(329, 0%, 99%, 0.05) 0%,
      hsla(329, 0%, 99%, 0.05) 3%,
      transparent 3%,
      transparent 26%,
      transparent 26%,
      transparent 100%
    ),
    radial-gradient(
      circle at 29% 28%,
      hsla(329, 0%, 99%, 0.05) 0%,
      hsla(329, 0%, 99%, 0.05) 51%,
      transparent 51%,
      transparent 75%,
      transparent 75%,
      transparent 100%
    ),
    radial-gradient(
      circle at 77% 21%,
      hsla(329, 0%, 99%, 0.05) 0%,
      hsla(329, 0%, 99%, 0.05) 35%,
      transparent 35%,
      transparent 55%,
      transparent 55%,
      transparent 100%
    ),
    radial-gradient(
      circle at 65% 91%,
      hsla(329, 0%, 99%, 0.05) 0%,
      hsla(329, 0%, 99%, 0.05) 46%,
      transparent 46%,
      transparent 76%,
      transparent 76%,
      transparent 100%
    ),
    linear-gradient(214deg, rgb(83, 91, 235), rgb(76, 11, 174));
  height: 100vh;
`;

const Button = styled.div`
  font-weight: bold;
  color:white;
  line-height: 2.5rem;
  padding: 1.2rem 4rem;
  font-size:1.5rem;
  border: 0;
  border-radius: 3rem;
  background-image: linear-gradient(131deg, #ffd340, #ff923c, #ff923c, #ff923c);
  background-size: 300% 100%;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  text-align: center;
  margin-top:6rem;
  

  &:hover {
    box-shadow: 0 0.5em 0.5em -0.4em #ff923cba;
    background-size: 100% 100%;
    transform: translateY(-0.15em);
  }
`;

const FormContainer = styled.div`
  width: 100rem;
  margin: auto;
`;

const Title = styled.div`
  font-family: 'Pacifico', cursive;
  text-align: center;
  font-size: 3rem;
  transform: translateY(5rem);
  margin-bottom: 10rem;
  letter-spacing:0.5rem;

`;

const FormField = styled.div`
  background-color: #f2f6f8;
  border-radius: 2rem;
  border: none;
  box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.11);
  padding: 2.2rem 3.5rem;
  margin: 3.5rem 0;

  &:focus {
    background-color: #f2f6f8;
    border: none;
    box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.11);
  }
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 2.1rem;
  color: white;
`;

export default withRouter(CreateBlog);
