import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { DevilContext } from '../context';
import { auth } from '../firebase/config';
import styled from 'styled-components'

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
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>

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
              CreateBlog
            </Link>
          </li>
        )}
        {isLogged && (
          <li className="nav-item">
            <button onClick={handleLogOut} type="submit" className="signupbtn">
              {' '}
              SIGN OUT{' '}
            </button>
          </li>
        )}
      </ul>
    </Wrapper>
  );
}


const Wrapper = styled.div`

background-image: repeating-linear-gradient(45deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(90deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(0deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(135deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),linear-gradient(90deg, rgb(41, 27, 158),rgb(249, 77, 212));
padding:2rem;

`


export default withRouter(Header);
