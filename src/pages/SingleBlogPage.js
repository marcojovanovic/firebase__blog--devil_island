import React, { useEffect } from 'react';
import { DevilContext } from '../context';
import { useParams, Link, useHistory } from 'react-router-dom';
import { database } from '../firebase/config';
import styled from 'styled-components';
import { MdArrowBack } from 'react-icons/md/';

function SingleBlogPage() {
  let { id } = useParams();
  const { singleBlog, setSingleBlog } = React.useContext(DevilContext);

  const history = useHistory();

  useEffect(() => {
    database
      .collection('blogPost')
      .doc(id)
      .get()
      .then((snap) => {
        setSingleBlog(snap.data());
      });
  }, [id]);

  const devilArticles = [
    {
      text: 'Istorija "bele" plaže',
      onClick: () => history.push('/singleBlogPage/IwPzzupyD8ShCIleetlX'),
    },
    {
      text: 'Kako pronaći naselja',
      onClick: () => history.push('/singleBlogPage/SlwSkfsModZTHWstsdsD'),
    },
    {
      text: 'Hoteli',
      onClick: () => history.push('/singleBlogPage/ewHp5BvGYtqeVs2ZbTAF'),
    },
    {
      text: 'Najopasnije obale Đavoljeg ostrva',
      onClick: () => history.push('/singleBlogPage/iLv5tVpw0waKK0d8K7wg'),
    },
    {
      text: 'Najstarije pećine Azije',
      onClick: () => history.push('/singleBlogPage/skGfuaJ3oqc4yqg2uXjf'),
    },
    {
      text: 'Ostrvo sa najtoplijom vodom u okeanu',
      onClick: () => history.push('/singleBlogPage/1GJmlFpcLQdtMFs1KYWR'),
    },
    {
      text: 'Koralni grebeni',
      onClick: () => history.push('/singleBlogPage/Q8duDrH0Jou4gTCTYRe4'),
    },
    {
      text: 'Naš utisak sa plaže',
      onClick: () => history.push('/singleBlogPage/k4ZYR6p6KzctytheLYeN'),
    },
    {
      text: 'Gde se nalaze Đavolja ostrva',
      onClick: () => history.push('/singleBlogPage/fXdExvzHdohKWdEXiygo'),
    },
  ];

  const { autor, sadrzaj, naslov, imgURL } = singleBlog;

  return (
    <Wrapper>
      <div className="singleBlog__side">
        <ImageSide side={imgURL} alt="" />
      </div>
      <Main>
        <Heading back={imgURL}>
          <div className="singleBlog__item">
            <Title>{naslov && naslov}</Title>
          </div>
        </Heading>
        <div className="flex">
          <Content>{sadrzaj && sadrzaj}</Content>
          <Navigation>
            <Link className="singleBlog__link" to="/">
              <MdArrowBack className="backIcon" /> Povratak na glavnu stranu
            </Link>
            <div className="line"></div>

            <ArticleTitle>Povezani članci</ArticleTitle>
            <SideImg src="/assets/sideLine.png" />

            {devilArticles.map((item) => (
              <ListItem button key={item.text} onClick={item.onClick}>
                {item.text}
              </ListItem>
            ))}
          </Navigation>
        </div>

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
  

  .singleBlog__side {
    flex: 0.1;
  }

  .singleBlog__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: center;
  }
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

const ImageSide = styled.img`
  width: 100%;
  height: 230vh;
  object-fit: cover;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),
    url(${(props) => (props.side ? props.side : 'green')});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const SideImg = styled.img`
  min-width: 50%;
  text-align:center;
`;

const ArticleTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  padding-top: 3rem;
`;

const Title = styled.div`
  font-size: calc(3rem + 2vw);
  font-weight: bolder;
  letter-spacing: 0.5rem;
  color: white;
`;

const Main = styled.div`
  flex: 0.9;
  

  .flex {
    display: flex;
    align-items: flex-start;

    @media (max-width: 70rem) {
      flex-direction: column;
      flex: 1;
    }
  }

  @media (max-width: 700px) {
    flex: 1;
  }

  .line {
    border: 1px solid #f1f1f1;
    margin-bottom: 2.5rem;
  }
`;

const Content = styled.div`
  flex: 0.7;
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
    padding:0 6rem;
  }
  @media (max-width: 700px) {
    margin: 3rem auto;
    width:38ch;
    padding:0 6rem;
  }

  @media (max-width: 600px) {
    margin: 3rem auto;
    width:30ch;
    padding:0 4rem;
  }

  @media (max-width: 500px) {
    margin: 3rem auto;
    width:25ch;
    padding:0 4rem;
  }

  @media (max-width: 400px) {
    margin: 3rem auto;
    width:21ch;
    padding: 0 6rem;
  }

  &::first-letter {
    font-size: 400%;
    color: #fbd42c;
  }
`;

const ListItem = styled.li`
  list-style: none;
  color: #ff923c;
  font-size: 1.7rem;
  margin: 4rem 0;
  cursor: pointer;
  transition: 0.3s ease-in;

  &:hover {
    color: #999;
    transform: translateX(3rem);
  }
`;

const Contributor = styled.div`
  margin-top: 6vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;


  @media (max-width: 700rem) {
    transform:translateX(-3.5rem);
  }
`;

const AutorImg = styled.img`
  width:calc(9rem + 4vw);
`;

const AutorInfo = styled.h1`
  font-size: calc(1.5rem + 1vw);
  position: absolute;
  top: 35%;
  left: 50%;
  font-family: 'Pacifico', sans-serif;

  
`;

const Navigation = styled.div`
  margin-top: 14rem;
  padding: 2rem;
  flex: 0.2;
  box-shadow: -1px 1px 1px 1px #9999;

  @media (max-width: 70rem) {
    padding-top: 2rem;
    width:80%;
    display: block;
    margin: auto;
  }
  @media (max-width: 50rem) {
    padding-right: 5rem;
    width: 70%;
    display: block;
    margin:auto;
   
  }

  @media (max-width: 40rem) {
    margin-right: 8rem;
    width: 50%;
    display: block;
   
  }

  .singleBlog__link {
    color: #333;
    text-align: center;
    font-size: 1.8rem;
    cursor: pointer;
    font-weight: bold;
    padding-bottom: 1rem;
    display: flex;
    align-items: center;
    transition: 0.3s ease-in;

    &:hover {
      letter-spacing: 0.1rem;
      transform: translateX(6px);
    }
  }

  .backIcon {
    font-size: 2.5rem;
  }
`;

export default SingleBlogPage;
