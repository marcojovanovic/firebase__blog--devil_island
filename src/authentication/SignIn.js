import React from 'react';
import { auth } from '../firebase/config';
import { DevilContext } from '../context';
import { withRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components';
import Notification from '../components/Notification';

function SignUp(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    setUser,
    error,
    setError,
  } = React.useContext(DevilContext);

  let { history } = props;

  const handleLogin = async (e) => {
    e.preventDefault();

    await auth
      .signInWithEmailAndPassword(email, password)
      .then((authObj) => {
        setUser(authObj);

        history.push('/');
      })
      .catch((err) => {
        setError(err.message);
        notify();
      });

    setPassword('');
    setEmail('');
  };

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
        <form onSubmit={handleLogin}>
          <FormContainer>
            <LoginTitle>Prijava</LoginTitle>
            <hr />

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
                className="form_input"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
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
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
              />
            </FormField>

            <Button type="submit">Uloguj se</Button>
          </FormContainer>
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
  padding: 5rem;
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

const FormContainer = styled.div`
  padding: calc(1vh + 1vw);
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

const LoginTitle = styled.h1`
  color: rgb(249, 77, 212);
  padding-bottom: 1rem;
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
  left: 0;
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
    width: 120%;
    color: rgb(175, 177, 190);
    outline: none;
  }
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 2.1rem;
  color: white;
`;

const Button = styled.button`
  border-radius: 5rem;
  background: transparent;
  padding: 0.4rem;
  border: 2px solid #dc6180;
  color: #dc6180;
  text-transform: uppercase;
  font-size: 1.1rem;
  transition-property: background, color;
  transition-duration: 0.2s;
  margin-top: 1rem;
  width: 100%;
  background: transparent;
  color: white;
  text-align: center;

  &:hover {
    color: white;
    background: #dc6180;
    cursor: pointer;
    transition-property: background, color;
    transition-duration: 0.2s;
  }
`;

export default withRouter(SignUp);
