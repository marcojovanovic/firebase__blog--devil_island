import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { DevilContext } from '../context';
import { auth } from '../firebase/config';
import styled from 'styled-components';
import { GoPlus } from 'react-icons/go';
import { VscGithubInverted } from 'react-icons/vsc';

function Header(props) {
  const { isLogged, setUser, username, setUsername } = React.useContext(
    DevilContext
  );

  let { history } = props;

  const handleLogOut = () => {
    setUser(null);
    auth.signOut().then(console.log('sign out'));
    history.push('/');
  };

  let user = null;

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        let currentUser = auth.currentUser;
        currentUser.updateProfile({
          displayName: username,
        });

        setUsername(currentUser.displayName);
      } else {
        console.log('no user');
      }
    });
  }, []);

  return (
    <Wrapper>
      <ul className="navbar-nav">
        <Link className="nav-item " to="/">
          <NavImg src="assets/devilLogo.png" alt="" />
          <span>Islands </span>
          <LineImg
            src="https://www.shreejichikki.com/wp-content/uploads/2014/04/vertical-line.png"
            alt=""
          />
        </Link>
        <h1 className="user">{username}</h1>
        {!isLogged && (
          <NavLog>
            <NavbarSign>
              <Link to="/signUp">Napravi nalog</Link>
            </NavbarSign>

            <NavbarSign>
              <Link to="/login">Uloguj se</Link>
            </NavbarSign>
          </NavLog>
        )}

        {isLogged && (
          <NavItem>
            <Link className="nav-link" to="/createBlog">
              <GoPlus size={30} />
              Dodaj Blog
            </Link>
          </NavItem>
        )}
        <NavItem className="nav__hide">
          <Link className="nav-link" to="/createBlog">
            <VscGithubInverted size={30} />
            <p>Dokumentacija</p>
          </Link>
        </NavItem>
      </ul>

      {isLogged && (
        <Button onClick={handleLogOut} type="submit" className="signupbtn">
          {' '}
          ODJAVI SE{' '}
        </Button>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: white;
  width: 100%;
  color: #ff923c;
  padding: 2rem 0;
  position: relative;
  margin: auto;

  .navbar-nav {
    display: flex;
    width: 100%;
    padding-left: calc(8rem + 2vw);
    justify-content: space-around;
    margin: auto;
    align-items: center;

    @media (max-width: 1100px) {
      flex-wrap: wrap;
      justify-content: center;
      padding: 0;
      margin-left: 20% !important;
    }
  }

  .navbar__sign {
    font-size: calc(0.4rem + 0.4vw);
    margin-bottom: 1rem;
  }

  .nav-link {
    color: white;
    font-size: calc(1rem + 0.4vw);
    display: flex;
    align-items: center;
  }

  .nav-item {
    display: flex;
    align-items: center;
  }

  .nav-item span {
    color: #f44336;
    font-size: calc(2.7rem + 0.3vw);
    margin-left: 3rem;
    font-family: 'Pacifico', sans-serif;
    font-style: italic;
  }

  .nav-item p {
    margin-left: 2rem;
  }

  .nav__hide {
    @media (max-width: 1100px) {
      display: none;
    }
  }

  .user {
    color: red;
    position: absolute;
    top: 40%;
    right: 60%;

    @media (max-width: 700px) {
      top: 60%;
    }
  }
`;

const NavbarSign = styled.div`
  font-size: calc(0.8rem + 0.4vw);
  margin-bottom: 1rem;
  background: linear-gradient(131deg, #ffd340, #ff923c, #ff923c, #ff923c);
  padding: 0.6rem 0.8rem;
  transform: translateX(-22rem);
  text-align: center;

  &:hover {
    box-shadow: 0 0.5em 0.5em -0.4em #ff923cba;
    background-size: 100% 100%;
  }
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  padding: calc(0.3rem + 0.3vw);
  background: linear-gradient(131deg, #ffd340, #ff923c, #ff923c, #ff923c);
  color: white;
  border-radius: 50px;
  transform: translateX(-17rem);

  &:hover {
    box-shadow: 0 0.5em 0.5em -0.4em #ff923cba;
  }

  @media (max-width: 700px) {
    transform: translateX(0);
    margin: auto;
  }
`;

const NavImg = styled.img`
  width: clamp(15%, 12% + 3vw, 12%);
`;
const LineImg = styled.img`
  height: 25%;
  max-width: 20%;
`;

const Button = styled.button`
  font-weight: bold;
  color: white;
  padding: 0.5rem 2rem;
  font-size: calc(0.8rem + 0.4vw);
  border: 0;
  background: #f44336;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  text-align: center;
  margin-top: 1rem;
  position: absolute;
  top: 0;
  right: 3rem;

  @media (max-width: 700px) {
    top: -0.7rem;
    right: 0;
  }
`;

const NavLog = styled.div`
  @media (max-width: 700px) {
    margin-top: 2rem;
    transform: translateX(20rem);
  }

  @media (max-width: 500px) {
    margin-top: 2rem;
    transform: translateX(22rem);
  }

  @media (max-width: 400px) {
    margin-top: 2rem;
    transform: translateX(24rem);
  }
  @media (max-width: 350px) {
    margin-top: 2rem;
    transform: translateX(23rem);
  }
`;

export default withRouter(Header);
