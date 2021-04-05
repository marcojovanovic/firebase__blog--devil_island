import React, { useEffect } from 'react';
import { auth } from '../firebase/config';
import { DevilContext } from '../context';
import { withRouter } from 'react-router-dom';


function SignUp(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    setUser,
    username,
    setUsername,
    error,
    setError,
  } = React.useContext(DevilContext);

  let { history } = props;

  const handleLogin = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((authObj) => {
        setUser(authObj);

        history.push('/');
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });

    setPassword('');
    setEmail('');
  };

  useEffect(() => {
    setTimeout(() => {
      setError('');
    }, 4000);
  }, [error]);

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div className="container">
          
        <div className={`error ${error  ? 'reveal' : ''}`}>{error}</div>

          <h1>Sign In</h1>
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
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default withRouter(SignUp);
