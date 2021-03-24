import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { DevilContext } from '../context';
import { auth, database } from '../firebase/config';

function Header(props) {

  const {
   
    isLogged,
    setUser
   
  } = React.useContext(DevilContext);

  let { history } = props;


  const handleLogOut = () => {
 
    setUser(null);
    auth.signOut()
    .then(console.log('sign out'));
    history.push('/');
  
};


  return (
    <div className="header">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signUp">
            SignUp
          </Link>
        </li>
        {!isLogged && <li className="nav-item">
          <Link className="nav-link" to="/login">
            SignIn
          </Link>
        </li>}
       {isLogged && <li className="nav-item">
          <Link className="nav-link" to="/createBlog">
            CreateBlog
          </Link>
        </li> }
       {isLogged && <li className="nav-item">
        <button onClick={handleLogOut} type="submit" className="signupbtn"> SIGN OUT </button> 
        </li> }
      </ul>
    </div>
  );
}

export default withRouter(Header);
