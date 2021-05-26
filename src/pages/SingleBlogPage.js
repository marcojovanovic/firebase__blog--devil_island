import React, { useEffect, useState } from 'react';
import { DevilContext } from '../context';
import { useParams, Link, useHistory } from 'react-router-dom';
import { database } from '../firebase/config';
import styled from 'styled-components';
import { MdArrowBack } from 'react-icons/md/';

function SingleBlogPage() {
  let { id } = useParams();
  const {
    singleBlog,
    setSingleBlog,
    sideBlogs,
    setSideBlogs,
  } = React.useContext(DevilContext);

  const history = useHistory();

  useEffect(() => {
    const unsub = database
      .collection('blogPost')
      .orderBy('timestamp', 'asc')
      .onSnapshot((snapshot) => {
        let documents = [];

        snapshot.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });

        setSideBlogs(documents);
      });

    return () => unsub();
  }, []);

  useEffect(() => {
    database
      .collection('blogPost')
      .doc(id)
      .get()
      .then((snap) => {
        setSingleBlog(snap.data());
      });
  }, [id]);

  const { autor, sadrzaj, naslov, imgURL } = singleBlog;

  return (
    <Wrapper>
      <SideBlogImg>
        <ImageSide side={imgURL} alt="" />
      </SideBlogImg>
      <Main>
        <Heading back={imgURL}>
          <SingleBlogItem>
            <Title>{naslov && naslov}</Title>
          </SingleBlogItem>
        </Heading>
        <SideContent>
          <Content>{sadrzaj && sadrzaj}</Content>
          <Navigation>
            <Link to="/">
              <SideBlogLink>
                <MdArrowBack size={50} />
              </SideBlogLink>
            </Link>
            <SideLine></SideLine>

            <ArticleTitle>Povezani članci</ArticleTitle>
            <SideImg src="/assets/sideLine.png" />

            {sideBlogs.map((item) => {
              return (
                <SideSingleTitle
                  key={item.id}
                  onClick={() => history.push(`/singleBlogPage/${item.id}`)}
                >
                  <SideSingleImg src={item.imgURL} alt="" />
                  <SideTitleTitle>{item.naslov}</SideTitleTitle>
                </SideSingleTitle>
              );
            })}
          </Navigation>
        </SideContent>

        <Contributor>
          <AutorImg src="/assets/autorLogo.png" alt="" />
          <AutorInfo>{autor && autor}</AutorInfo>{' '}
        </Contributor>
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const Heading = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),
    url(${(props) => (props.back ? props.back : 'lightblue')});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: start;
  height: 45vh;
  object-fit: cover;
  filter: hue-rotate(50deg);
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0003);

  @media (max-width: 60rem) {
    -webkit-box-reflect: unset;
    padding-top: 1.5rem;
    height: 60vh;
  }

  @media (max-width: 60rem) {
    -webkit-box-reflect: unset;
    padding-top: 1.5rem;
    height: 80vh;
  }
`;

const SingleBlogItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
`;

const ImageSide = styled.img`
  width: 100%;
  height: 365vh;
  object-fit: cover;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),
    url(${(props) => (props.side ? props.side : 'green')});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const SideBlogImg = styled.div`
  flex: 0.1;
`;

const SideImg = styled.img`
  min-width: 50%;
  text-align: center;


  @media (max-width: 1120px) {
    display: none;
  }
`;

const ArticleTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  
`;

const Title = styled.div`
  font-size: calc(3rem + 2vw);
  font-weight: bolder;
  letter-spacing: 0.5rem;
  color: white;
  text-align: center;
`;

const Main = styled.div`
  flex: 0.9;
  @media (max-width: 700px) {
    flex: 1;
  }
`;

const SideContent = styled.div`
  display: flex;
  align-items: flex-start;

  @media (max-width: 70rem) {
    flex-direction: column;
    flex: 1;
  }
`;
const SideLine = styled.div`
  border: 1px solid #f1f1f1;
  margin-bottom: 2.5rem;
`;

const SideSingleTitle = styled.div`
  color: #333;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const Content = styled.div`
  flex: 0.67;
  padding-left: 2rem;
  color: #333;
  font-size: 1.8rem;
  width: 70ch;
  margin: 2rem 7rem 0 7rem;
  text-align: justify;
  z-index: 100;
  line-height: 1.7;

  @media (max-width: 1000px) {
    margin: 2rem auto;
    padding: 0 6rem;
  }
  @media (max-width: 700px) {
    margin: 3rem auto;
    width: 38ch;
    padding: 0 6rem;
  }

  @media (max-width: 600px) {
    margin: 3rem auto;
    width: 30ch;
    padding: 0 4rem;
  }

  @media (max-width: 500px) {
    margin: 3rem auto;
    width: 25ch;
    padding: 0 4rem;
  }

  @media (max-width: 400px) {
    margin: 3rem auto;
    width: 21ch;
    padding: 0 6rem;
  }

  &::first-letter {
    font-size: 400%;
    color: #fbd42c;
  }
`;

const SideSingleImg = styled.img`
  width: 100%;
  height: 20rem;
  object-fit: cover;


  @media (max-width: 1120px) {
    height: 40rem;
  }
  @media (max-width: 700px) {
    height: 20rem;
  }
  @media (max-width: 600px) {
    height: 25rem;
  }

  @media (max-width: 500px) {
    height: 18rem;
  }
`;

const SideTitleTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const Contributor = styled.div`
  margin-top: 6vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 700rem) {
    transform: translateX(-3.5rem);
  }
`;

const AutorImg = styled.img`
  width: calc(9rem + 4vw);
`;

const AutorInfo = styled.h1`
  font-size: calc(1.5rem + 1vw);
  position: absolute;
  top: 35%;
  left: 50%;
  font-family: 'Pacifico', sans-serif;
`;

const Navigation = styled.div`
  margin-top: 10vh;
  padding: 2rem;
  flex: 0.26;
  box-shadow: -1px 1px 1px 1px #9999;

  @media (max-width: 70rem) {
    padding-top: 2rem;
    width: 100%;
    display: block;
    margin: auto;
  }
  @media (max-width: 50rem) {
   
    width: 90%;
    display: block;
    margin: auto;
  }
`;

const SideBlogLink = styled.div`
  color: #333;
  display: block;
  margin-left: 40%;
  transition: 0.3s ease-in;

  &:hover {
    letter-spacing: 0.1rem;
    transform: translateX(6px);
  }
`;

export default SingleBlogPage;
