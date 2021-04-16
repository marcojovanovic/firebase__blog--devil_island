import React, { useEffect } from 'react';
import {  database } from '../firebase/config';
import { DevilContext } from '../context';
import { withRouter, useParams, Redirect } from 'react-router-dom';
import styled from 'styled-components';

function UpdateBlog(props) {
  let { history } = props;
  let { id } = useParams();

  const {
    updateSingleBlog,
    setUpdateSingleBlog,
    isLogged
  } = React.useContext(DevilContext);


  useEffect(() => {
    gettingBlogPost();
  }, [id]);


  if (isLogged === false) {
    return <Redirect to="/" />;
  }



  function gettingBlogPost() {
    database
      .collection('blogPost')
      .doc(id)
      .get()
      .then((snap) => {
        setUpdateSingleBlog(snap.data());
      });
  }

  
  const handleUpdateChangeBlog = (e) => {
    setUpdateSingleBlog({
      ...updateSingleBlog,
      [e.target.name]: e.target.value,
    });
  };

  const { naslov, autor, imgURL, sadrzaj } = updateSingleBlog;

  const handleUpdateBlog = (e) => {
    e.preventDefault();

    database
      .collection('blogPost')
      .doc(`${id}`)
      .update({
        naslov: naslov,
        sadrzaj: sadrzaj,
        autor: autor,
        imgURL: imgURL,
      })
      .then((data) => {
        console.log(data);
        history.push('/');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Wrapper>
      <Title>Izmeni Blog</Title>

      <FormContainer>
        <form className="form" onSubmit={handleUpdateBlog}>
          <div className="form-group">
            <Label htmlFor="brand">Naslov</Label>
            <FormField>
              <input
                type="text"
                value={naslov}
                onChange={handleUpdateChangeBlog}
                name="naslov"
                required
                autoComplete='off'
              />
            </FormField>
          </div>
          <div className="form-group">
            <Label htmlFor="color">Sadržaj</Label>
            <FormField>
              <textarea
                type="text"
                rows="18"
                value={sadrzaj}
                onChange={handleUpdateChangeBlog}
                name="sadrzaj"
                required
                autoComplete='off'
              />
            </FormField>
          </div>
          <div className="form-group">
            <Label htmlFor="price">ImgURL</Label>
            <FormField>
              <input
                type="text"
                value={imgURL}
                onChange={handleUpdateChangeBlog}
                name="imgURL"
                required
                autoComplete='off'
              />
            </FormField>
          </div>
          <div className="form-group">
            <Label htmlFor="price">Autor</Label>
            <FormField>
              <input
                type="text"
                value={autor}
                onChange={handleUpdateChangeBlog}
                name="autor"
                required
                autoComplete='off'
              />
            </FormField>
          </div>
          <Button>
            <button type="submit" className="btn">
              Update Post
            </button>
          </Button>
        </form>
      </FormContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-image: linear-gradient(
      52deg,
      rgba(163, 163, 163, 0.09) 0%,
      rgba(163, 163, 163, 0.09) 33.3%,
      rgba(100, 100, 100, 0.09) 33.3%,
      rgba(100, 100, 100, 0.09) 66.6%,
      rgba(162, 162, 162, 0.09) 66.6%,
      rgba(162, 162, 162, 0.09) 99%
    ),
    linear-gradient(
      258deg,
      rgba(193, 193, 193, 0.06) 0%,
      rgba(193, 193, 193, 0.06) 33.3%,
      rgba(169, 169, 169, 0.06) 33.3%,
      rgba(169, 169, 169, 0.06) 66.6%,
      rgba(92, 92, 92, 0.06) 66.6%,
      rgba(92, 92, 92, 0.06) 99%
    ),
    linear-gradient(
      129deg,
      rgba(45, 45, 45, 0.03) 0%,
      rgba(45, 45, 45, 0.03) 33.3%,
      rgba(223, 223, 223, 0.03) 33.3%,
      rgba(223, 223, 223, 0.03) 66.6%,
      rgba(173, 173, 173, 0.03) 66.6%,
      rgba(173, 173, 173, 0.03) 99%
    ),
    linear-gradient(
      280deg,
      rgba(226, 226, 226, 0.06) 0%,
      rgba(226, 226, 226, 0.06) 33.3%,
      rgba(81, 81, 81, 0.06) 33.3%,
      rgba(81, 81, 81, 0.06) 66.6%,
      rgba(186, 186, 186, 0.06) 66.6%,
      rgba(186, 186, 186, 0.06) 99%
    ),
    linear-gradient(
      85deg,
      rgba(225, 225, 225, 0.04) 0%,
      rgba(225, 225, 225, 0.04) 33.3%,
      rgba(95, 95, 95, 0.04) 33.3%,
      rgba(95, 95, 95, 0.04) 66.6%,
      rgba(39, 39, 39, 0.04) 66.6%,
      rgba(39, 39, 39, 0.04) 99%
    ),
    linear-gradient(
      128deg,
      rgba(184, 184, 184, 0.06) 0%,
      rgba(184, 184, 184, 0.06) 33.3%,
      rgba(0, 0, 0, 0.06) 33.3%,
      rgba(0, 0, 0, 0.06) 66.6%,
      rgba(140, 140, 140, 0.06) 66.6%,
      rgba(140, 140, 140, 0.06) 99.89999999999999%
    ),
    linear-gradient(
      323deg,
      rgba(40, 40, 40, 0.07) 0%,
      rgba(40, 40, 40, 0.07) 33.3%,
      rgba(214, 214, 214, 0.07) 33.3%,
      rgba(214, 214, 214, 0.07) 66.6%,
      rgba(190, 190, 190, 0.07) 66.6%,
      rgba(190, 190, 190, 0.07) 99.89999999999999%
    ),
    linear-gradient(
      61deg,
      rgba(230, 230, 230, 0) 0%,
      rgba(230, 230, 230, 0) 33.3%,
      rgba(241, 241, 241, 0) 33.3%,
      rgba(241, 241, 241, 0) 66.6%,
      rgba(55, 55, 55, 0) 66.6%,
      rgba(55, 55, 55, 0) 99%
    ),
    linear-gradient(0deg, #2625e3, #0bbaef);
  height: 210vh;
  padding:clamp(2rem, 4vw, 3rem);
  
`;

const Button = styled.div`
  font-weight: bold;
  color: white;
  line-height: 2.5rem;
  padding: 1.2rem 4rem;
  font-size: 1.5rem;
  border: 0;
  border-radius: 3rem;
  background-image: linear-gradient(131deg, #ffd340, #ff923c, #ff923c, #ff923c);
  background-size: 300% 100%;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  text-align: center;
  margin-top: 6rem;

  &:hover {
    box-shadow: 0 0.5em 0.5em -0.4em #ff923cba;
    background-size: 100% 100%;
    transform: translateY(-0.15em);
  }
`;

const FormContainer = styled.div`
  width: 100rem;
  margin: auto;

  @media (max-width: 1000px) {
    width: 80% !important;
  }
`;

const Title = styled.div`
  font-family: 'Pacifico', cursive;
  text-align: center;
  font-size: 3rem;
  transform: translateY(5rem);
  margin-bottom: 10rem;
  letter-spacing: 0.5rem;
`;

const FormField = styled.div`
  background-color: #f2f6f8;
  border-radius: 2rem;
  border: none;
  box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.11);
  padding: 2.2rem 3.5rem;
  margin: 3rem 0;

  & input{
      color:#333;
      width:100%;


  }

  @media (max-width: 100px) {
    max-width: 50% !important;
  }

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

export default withRouter(UpdateBlog);
