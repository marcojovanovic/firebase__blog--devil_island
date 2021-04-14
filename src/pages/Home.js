import React, { useEffect } from 'react';

import { database } from '../firebase/config';
import { DevilContext } from '../context';
import { withRouter, Link } from 'react-router-dom';
import { DisplaySuccesLogin } from '../components';
import styled from 'styled-components';

import '../authentication/auth.css';

function Home(props) {
  const {
    user,
    isLogged,
    blogCollection,
    successMessage,
    setSuccessMessage,
  } = React.useContext(DevilContext);

  useEffect(() => {
    if (user) {
      setSuccessMessage(true);
      setTimeout(() => {
        setSuccessMessage(false);
      }, 2000);
    }
  }, []);

  return (
    <>
      {successMessage && <DisplaySuccesLogin />}

      {blogCollection &&
        blogCollection.map((item) => {
          const { naslov, sadrzaj, imgURL, autor, id, timestamp } = item;

          return (
            <div key={id}>
              <BlogPostContent>
                <BlogTitle>{naslov}</BlogTitle>
                <BlogText>{`${sadrzaj.slice(0, 85)} ...`} </BlogText>

                <Link to={`/singleBlogPage/${id}`}>
                  <BackImage back={imgURL}></BackImage>
                </Link>

                <Autor>
                  <AutorImg src="/assets/autorLogo.png" alt="" />

                  {autor}
                </Autor>
                <DateItem>
                  {new Date(timestamp?.toDate()).toLocaleString()}
                </DateItem>

                {isLogged && (
                  <ButtonContainer>
                    <Button
                      onClick={() =>
                        alert(
                          'Post ce biti obrisan ?',
                          database.collection('blogPost').doc(id).delete()
                        )
                      }
                      className="btn btn-delete"
                    >
                      Obriši
                    </Button>
                    <Button>
                      <Link to={`/updateBlog/${id}`} className="btn btn-update">
                        Izmeni
                      </Link>
                    </Button>
                  </ButtonContainer>
                )}
              </BlogPostContent>
            </div>
          );
        })}
    </>
  );
}

const BlogTitle = styled.h2`
  position: absolute;
  top: 24rem;
  left: 40px;
  color: white;
  font-weight: bold;
  font-size: 2.2rem;
  text-transform: capitalize;
`;

const BlogText = styled.p`
  position: absolute;
  top: 29rem;
  left: 40px;
  font-size: 1rem;
  color: white;
`;

const Autor = styled.h2`
  text-align: center;
  transform: translateY(6rem);
  color: #ff923c;
  position: relative;
`;

const DateItem = styled.p`
  position: absolute;
  top: 33rem;
  left: 40px;
  color: #ccc;
  font-weight: bold;
`;

const BackImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 40rem;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),
    url(${(props) => (props.back ? props.back : 'lightblue')});
  background-position: center;
  background-size: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const Button = styled.div`
  font-weight: bold;
  color: white;
  line-height: 2.5rem;
  padding: 0.3rem 2rem;
  font-size: 1.5rem;
  border: 0;
  background: linear-gradient(131deg, #ffd340, #ff923c, #ff923c, #ff923c);

  transition: all 0.3s ease-in-out;
  cursor: pointer;
  text-align: center;
  margin-top: 1rem;
  width: 25%;

  &:hover {
    box-shadow: 0 0.5em 0.5em -0.4em #ff923cba;
    background-size: 100% 100%;
    transform: translateY(-0.15em);
  }
`;

const ButtonContainer = styled.div`
  transform: translateX(4rem) translateY(-7rem);
`;

const BlogPostContent = styled.div`
  background: white;
  max-width: 45rem;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: relative;

  @media (max-width: 74rem) {
    margin: auto;
  }
`;

const AutorImg = styled.img`
  width: 20%;
  position: absolute;
  top: -2.3rem;
  left: 6.5rem;

  @media (max-width: 100rem) {
    width: 20%;
  }
  @media (max-width: 70rem) {
    display:none;
  }
`;

export default withRouter(Home);
