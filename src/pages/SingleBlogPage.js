import React, { useEffect } from 'react';
import { DevilContext } from '../context';
import { useParams, Link } from 'react-router-dom';
import { database } from '../firebase/config';
import styled from 'styled-components';

function SingleBlogPage() {
  let { id } = useParams();
  const { singleBlog, setSingleBlog } = React.useContext(DevilContext);

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
      <div className="singleBlog__side">
        <ImageSide side={imgURL} alt="" />
      </div>
      <Main>
        <Heading back={imgURL}>
          <div className="singleBlog__item">
            <Title>{naslov && naslov}</Title>
          </div>
        </Heading>
        <div className='flex'>

            <Navigation>
              <NavTitle>Povratak na glavnu stranu</NavTitle>
              <Link className='singleBlog__link' to='/'>Main Page</Link>
              <Link className='singleBlog__link' to='/singleBlogPage/nxGCzeJvxAwS7TzJNcU2'>Drugi Blog</Link>
            </Navigation>
           <Content>{sadrzaj && sadrzaj}</Content>
        </div>
       
        <Contributor>
          <AutorImg src="https://lh3.googleusercontent.com/proxy/bPkuSOhOIAUm3KQlEX7lrU7m8xtDrm1-JwnaYl5nAyRIH69iRawC4uINPbk2Vc-3MdMy77aRaDOmKlOCBuCbEaMIFV4Yb0WdAcD_B-l6byXsZJqYieFJCirbJq8J1yUFb11YZ64ZP8JODVcPnumC5H5PHLwg" />{' '}
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
    align-items: space-between;
    height: 100%;
    justify-content: space-between;
  }
`;

const Heading = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),
    url(${(props) => (props.back ? props.back : 'lightblue')});
  background-position: top;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 7rem;
  height: 40vh;
  object-fit: cover;
  filter: hue-rotate(50deg);
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0003);
`;

const ImageSide = styled.img`
  width: 100%;
  height: 160vh;
  object-fit: cover;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),
    url(${(props) => (props.side ? props.side : 'green')});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Title = styled.div`
  font-size: 5rem;
  font-weight: bolder;
  letter-spacing: 0.5rem;
  color: white;
`;

const Main = styled.div`
  flex: 0.9;

  .flex{

    display:flex;
    align-items:center;
  }

`;

const Content = styled.div`
 
  color: #333;
  font-size: 1.8rem;
  width: 70ch;
  margin: 7rem auto;
  

  &::first-letter {
    font-size: 400%;
    color: #fbd42c;
  }
`;

const Contributor = styled.div`
  text-align: center;
  margin-top: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AutorImg = styled.img`
  width: 10%;
`;

const AutorInfo = styled.h1`
  font-size: 3rem;
  transform: translateX(-8rem);
  font-family: 'Pacifico', sans-serif;
`;


const Navigation= styled.div`
   margin-left:5rem;
   .singleBlog__link{
     color:#333;
     text-align:center;
   }


`

const NavTitle=styled.h2`

   font-size:2rem;


`


export default SingleBlogPage;
