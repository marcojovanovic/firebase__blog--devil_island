import React from 'react';
import { auth } from '../firebase/config';
import { DevilContext } from '../context';
import { withRouter } from 'react-router-dom';


function SignUp(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    user,
    setUser,
    username,
    setUsername,
  } = React.useContext(DevilContext);

  let { history } = props;

  const handleRegister = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authObj) => {
        setUser(authObj);

        history.push('/login');
      })
      .catch((err) => console.log(err.message));

    setPassword('');
    setEmail('');
  };

  console.log(user);

  return (
    <div>
      <form onSubmit={handleRegister}>
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <label htmlFor="email">
            <b>Autor</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default withRouter(SignUp);
