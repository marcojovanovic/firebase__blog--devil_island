import React, { useEffect } from 'react';

import { database } from '../firebase/config';
import { DevilContext } from '../context';
import { withRouter, Link } from 'react-router-dom';

import styled from 'styled-components';

function Home() {
  const { isLogged, blogCollection } = React.useContext(DevilContext);

  return (
    <>
      {blogCollection &&
        blogCollection.map((item) => {
          const { naslov, sadrzaj, imgURL, autor, id, timestamp } = item;

          return (
            <>
              <BlogPostContent>
                <BlogSome>
                  <BlogTitle>{naslov}</BlogTitle>
                  <BlogText>{`${sadrzaj.slice(0, 50)} ...`} </BlogText>

                  <Link to={`/singleBlogPage/${id}`}>
                    <BackImage back={imgURL}></BackImage>
                  </Link>

                  <Autor>
                    <AutorImg src="/assets/autorLogo.png" alt="" />
                    {autor}{' '}
                    <AutorTime>
                      {new Date(timestamp?.toDate()).toLocaleString()}
                    </AutorTime>
                  </Autor>
                </BlogSome>

                {isLogged && (
                  <ButtonContainer>
                    <Button
                      onClick={() =>
                        prompt(
                          'Post ce biti obrisan ?',
                          database.collection('blogPost').doc(id).delete()
                        )
                      }
                    >
                      Obriši
                    </Button>
                    <Button>
                      <Link to={`/updateBlog/${id}`}>Izmeni</Link>
                    </Button>
                  </ButtonContainer>
                )}
              </BlogPostContent>
            </>
          );
        })}
    </>
  );
}

const BlogTitle = styled.h2`
  position: absolute;
  line-height: 1.1;
  top: 14rem;
  left: 40px;
  color: white;
  font-weight: bold;
  font-size: calc(1.4rem + 0.8vw);
  text-transform: capitalize;

  @media (max-width: 900px) {
    top: 15rem;
    font-size: calc(1.4rem + 2vw);
  }

  @media (max-width: 700px) {
    top: 9rem;
  }
`;

const BlogSome = styled.div`

@media (max-width: 1250px) {
     height: 55vh;
  }
@media (max-width: 900px) {
     min-height: 75vh;
  }


`

const BlogText = styled.p`
  position: absolute;
  top: 22rem;
  left: 40px;
  font-size: calc(1.1rem + 0.6vw);
  color: white;

  @media (max-width: 1200px) {
    top: 24rem;
  }
  @media (max-width: 900px) {
    top: 24rem;
    font-size: calc(1.1rem + 2vw);
  }

  @media (max-width: 700px) {
    top: 15rem;
  }
`;

const Autor = styled.h2`
  text-align: center;
  color: #ff923c;
  position: relative;
  font-size: calc(1.2rem + 0.5vw);

  @media (max-width: 900px) {
    font-size: calc(1.4rem + 1.2vw);
  }
`;

const BackImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 40vh;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),
    url(${(props) => (props.back ? props.back : 'lightblue')});
  background-position: center;
  background-size: cover;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  border: none !important;

  @media (max-width: 900px) {
    height: 55vh;
    object-fit: cover;
  }
`;

const AutorTime = styled.p`
  color: grey;
  font-size: calc(0.6rem + 0.9vw);
`;

const Button = styled.div`
  font-weight: bold;
  color: white;
  padding: 0.3rem 2rem;
  font-size: calc(1rem + 0.4vw);
  border: 0;
  background: linear-gradient(131deg, #ffd340, #ff923c, #ff923c, #ff923c);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  text-align: center;
  margin-top: 1rem;
  width: 25%;

  @media (max-width: 700px) {
    width: 30%;
    margin: auto;
    margin-bottom: 1rem;
    font-size: calc(1.4rem + 1vw);
  }

  @media (max-width: 600px) {
    width: 50%;
  }

  &:hover {
    box-shadow: 0 0.5em 0.5em -0.4em #ff923cba;
    background-size: 100% 100%;
    transform: translateY(-0.15em);
  }
`;

const ButtonContainer = styled.div`
  @media (max-width: 700px) {
  }
`;

const BlogPostContent = styled.div`
  background: white;
  width: 100%;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  position: relative;
  border: none;

  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 74rem) {
    margin: auto;
  }

  @media (max-width: 700px) {
    width: 85%;
  }

  @media (max-width: 540px) {
    width: 75%;
    margin-right: 50%;
  }

  @media (max-width: 440px) {
    width: 68%;
    margin-right: 50%;
  }

  @media (max-width: 400px) {
    width: 60%;
    margin-right: 50%;
  }

  @media (max-width: 350px) {
    width: 50%;
    margin-right: 50%;
  }
`;

const AutorImg = styled.img`
  width: 20%;
  position: absolute;
  top: -1.5rem;
  left: 6.4rem;

  @media (max-width: 100rem) {
    width: 20%;
  }
  @media (max-width: 70rem) {
    display: none;
  }
`;

export default withRouter(Home);
