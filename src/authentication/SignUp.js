import React from 'react';
import { auth } from '../firebase/config';
import { DevilContext } from '../context';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Notification from '../components/Notification';

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

  const handleRegister = async (e) => {
    e.preventDefault();

    await auth
      .createUserWithEmailAndPassword(email, password)
      .then((authObj) => {
        setUser(authObj);

        history.push('/login');
      })
      .catch((err) => {
        setError(err.message);
        notify();
      });

    setPassword('');
    setEmail('');
    setUsername('');
  };

  console.log(error);

  const notify = () => toast.error(<Notification />);

  return (
    <Wrapper>
      {error && (
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          draggable
          pauseOnHover
        />
      )}

      <Login>
        <form onSubmit={handleRegister}>
          <SignUpContainer>
            <SignUpTitle>Napravi svoj nalog</SignUpTitle>

            <hr />

            <Label htmlFor="name">
              <b>Korisnicko ime</b>
            </Label>

            <FormField>
              <Icon
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/user_icon_copy.png"
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
              <Icon
                src="https://beautysociety.com/wp-content/uploads/2017/12/email-envelope-icon.png"
                className="icon__email"
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
              <Icon
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/lock_icon_copy.png"
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
            <Button type="submit">Prijava</Button>
          </SignUpContainer>
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
  flex-direction: column;

  .icon__email {
    width: 6.5%;

    @media (max-width: 500px) {
      width: 9%;
    }
  }
`;

const SignUpContainer = styled.div`
  padding: 1.6rem;
  max-width: 160rem;
  margin: auto;

  &:focus-within {
    border: 0.05rem solid rgb(249, 77, 212);
  }
`;

const Icon = styled.img`
  width: 5%;
  position: absolute;
  left: 10%;
  top: 20%;

  @media (max-width: 500px) {
    width: 9%;
  }
`;

const Login = styled.div`
  background: linear-gradient(45deg, #35394a 0%, #1f222e 100%);
  padding: 1rem;
`;

const LoginTitle = styled.h1`
  color: rgb(249, 77, 212);
  padding-bottom: 1rem;
`;

const FormField = styled.div`
  color: rgb(175, 177, 190);
  width: 100%;
  margin: 2.5rem 0;
  background: rgb(50, 54, 74);

  padding: 10px 65px;
  border-top: 2px solid rgb(57, 61, 82);
  border-bottom: 2px solid rgb(57, 61, 82);
  border-right: none;
  border-left: none;
  outline: none;
  box-shadow: none;
  position: relative;

  .form__input {
    background: rgb(50, 54, 74);
    color: rgb(175, 177, 190);
    width: 100%;
    box-shadow: none;
    outline: none;
    border: none !important;
  }
`;

const SignUpTitle = styled.h2`
  color: rgb(249, 77, 212);
  padding-bottom: 1rem;
  font-size: calc(1.5rem + 0.5vw);
`;

const Label = styled.label`
  font-weight: 600;
  font-size: calc(1.2rem + 0.5vw);
  color: white;
`;

const Button = styled.button`
  border-radius: 50px;
  background: transparent;
  padding: 0.4rem;
  border: 2px solid rgb(249, 77, 212);
  color: #dc6180;
  text-transform: uppercase;
  font-size: 11px;
  transition-property: background, color;
  transition-duration: 0.2s;
  margin-top: 1rem;
  width: 100%;

  background: transparent;
  color: white;
  cursor: pointer;

  &:hover {
    color: white;
    background: #dc6180;
    cursor: pointer;
    transition-property: background, color;
    transition-duration: 0.2s;
  }
`;

export default withRouter(SignUp);
