import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { DevilContext } from '../context';
import { auth } from '../firebase/config';
import styled from 'styled-components';
import {GoPlus} from 'react-icons/go'

function Header(props) {
  const { isLogged, setUser } = React.useContext(DevilContext);

  let { history } = props;

  const handleLogOut = () => {
    setUser(null);
    auth.signOut().then(console.log('sign out'));
    history.push('/');
  };

  return (
    <Wrapper>
      <ul className="navbar-nav">
        <Link className="nav-item active" to='/'>
          <NavImg src="assets/devilLogo.png" alt="" /> <span>Islands</span>
        </Link>

        {!isLogged && (
          <li className="nav-item">
            <Link className="nav-link" to="/signUp">
              SignUp
            </Link>
          </li>
        )}

        {!isLogged && (
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              SignIn
            </Link>
          </li>
        )}
        {isLogged && (
          <li className="nav-item">
            <Link className="nav-link" to="/createBlog">
              < GoPlus />
              CreateBlog
            </Link>
          </li>
        )}
        {isLogged && (
          <li className="nav-item">
            <button onClick={handleLogOut} type="submit" className="signupbtn">
              {' '}
              ODJAVI SE{' '}
            </button>
          </li>
        )}
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: white;
  width: 100%;
  color: #ff923c;
  padding:1rem;

  .navbar-nav {
    display: flex;
    max-width: 80%;
    justify-content: space-around;
    margin: auto;
    align-items:center;
  }

  .nav-link {
    color: #ff923c;
    font-size:calc(1.4rem + 0.4vw);
  }

  .nav-item{
    display:flex;
    align-items:center;
  }

  .nav-item span{
    color:#ff923c;
    font-size:calc(1rem + 0.3vw);
  }

`;

const NavImg = styled.img`
  max-width: 35%;
`;

export default withRouter(Header);
