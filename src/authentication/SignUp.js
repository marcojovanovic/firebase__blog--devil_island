import React from 'react';
import { auth } from '../firebase/config';
import { DevilContext } from '../context';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';


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
    error,
    setError,
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
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
    setPassword('');
    setEmail('');
    setUsername('');
  };

  console.log(user);

  return (
    <Wrapper>
          <div className={`error ${error ? 'reveal error__back' : ''}`}>{error}</div>
      <Login>
        <form onSubmit={handleRegister}>
          <div className="container">
            <h1 className="signUp__title">Napravi svoj nalog</h1>

            <hr />

            <Label htmlFor="name">
              <b>Korisnicko ime</b>
            </Label>

            <FormField>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/user_icon_copy.png"
                className="icon"
                alt=""
              />
              <input
                type="text"
                name="email"
                className="form__input"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autocomplete="off"
              />
            </FormField>

            <Label htmlFor="email">
              <b>Email</b>
            </Label>
            <FormField>
              <img
                src="https://beautysociety.com/wp-content/uploads/2017/12/email-envelope-icon.png"
                className="icon icon__email"
                alt=""
              />
              <input
                type="email"
                name="email"
                required
                className="form__input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autocomplete="off"
              />
            </FormField>

            <Label htmlFor="psw">
              <b>Password</b>
            </Label>

            <FormField>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/lock_icon_copy.png"
                className="icon"
                alt=""
              />
              <input
                type="password"
                name="psw"
                className="form__input"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormField>
            <Button>
              <button className="btn" type="submit">
                Prijava
              </button>
            </Button>
          </div>
        </form>
      </Login>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-image: repeating-linear-gradient(
      45deg,
      hsla(64, 83%, 54%, 0.05) 0px,
      hsla(64, 83%, 54%, 0.05) 1px,
      transparent 1px,
      transparent 11px,
      hsla(64, 83%, 54%, 0.05) 11px,
      hsla(64, 83%, 54%, 0.05) 12px,
      transparent 12px,
      transparent 32px
    ),
    repeating-linear-gradient(
      90deg,
      hsla(64, 83%, 54%, 0.05) 0px,
      hsla(64, 83%, 54%, 0.05) 1px,
      transparent 1px,
      transparent 11px,
      hsla(64, 83%, 54%, 0.05) 11px,
      hsla(64, 83%, 54%, 0.05) 12px,
      transparent 12px,
      transparent 32px
    ),
    repeating-linear-gradient(
      0deg,
      hsla(64, 83%, 54%, 0.05) 0px,
      hsla(64, 83%, 54%, 0.05) 1px,
      transparent 1px,
      transparent 11px,
      hsla(64, 83%, 54%, 0.05) 11px,
      hsla(64, 83%, 54%, 0.05) 12px,
      transparent 12px,
      transparent 32px
    ),
    repeating-linear-gradient(
      135deg,
      hsla(64, 83%, 54%, 0.05) 0px,
      hsla(64, 83%, 54%, 0.05) 1px,
      transparent 1px,
      transparent 11px,
      hsla(64, 83%, 54%, 0.05) 11px,
      hsla(64, 83%, 54%, 0.05) 12px,
      transparent 12px,
      transparent 32px
    ),
    linear-gradient(90deg, rgb(41, 27, 158), rgb(249, 77, 212));
  padding: 2rem;
  color: white;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;

  .signUp__title {
    color:rgb(249, 77, 212);
    padding-bottom: 1rem;
  }

  .icon {
    width: 5%;
    position: absolute;
    left: 10%;
    top: 20%;
    
   
  }

  .icon__email {
    width: 6.5%;
  }

  .btn{
    width:100%;
    border:none;
    background:transparent;
    color:white;
  }


  .error{
    margin-bottom:2rem;
    color:red;
    font-size:1.5rem;
  }

  .error__back{
    background:white;
    padding:2rem 3rem;
    border-radius:20px;

  }

  .reveal {
  transform: translateX(0);
}


`;

const Login = styled.div`
  background: linear-gradient(45deg, #35394a 0%, #1f222e 100%);
  padding: 1rem;
`;

const FormField = styled.div`
  color: rgb(175, 177, 190);
  width: 100%;
  margin: 2rem 0;
  background: rgb(50, 54, 74);
 
  padding: 10px 65px;
  border-top: 2px solid rgb(57, 61, 82);
  border-bottom: 2px solid rgb(57, 61, 82);
  border-right: none;
  border-left: none;
  outline: none;
  box-shadow: none;
  position: relative;



&:focus-within {
  border: 1px solid rgb(249, 77, 212);
}

  .form__input {
    background: rgb(50, 54, 74);
    color: rgb(175, 177, 190);
    width: 100%;
    box-shadow: none;
    outline: none;
    border: none !important;

  
  }
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 2.1rem;
  color: white;
`;

const Button = styled.div`
  border-radius: 50px;
  background: transparent;
  padding: 0.4rem;
  border: 2px solid #dc6180;
  color: #dc6180;
  text-transform: uppercase;
  font-size: 11px;
  transition-property: background, color;
  transition-duration: 0.2s;
  margin-top: 1rem;

  &:hover {
    color: white;
    background: #dc6180;
    cursor: pointer;
    transition-property: background, color;
    transition-duration: 0.2s;
  }
`;

export default withRouter(SignUp);
