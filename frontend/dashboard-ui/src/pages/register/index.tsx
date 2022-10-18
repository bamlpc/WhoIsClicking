import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { HOME_URL } from '../../constant/urls';
import {
  RegisterValidate,
  UserSigninResquest,
  userSigninResquest,
} from '../../services/index';
import {
  GlobalStyle,
  StyledButton,
  StyledError,
  StyledErrorBox,
  StyledForm,
  StyledFormWrapper,
  StyledInput,
  StyledLinkContainer,
  StyledLinks,
  StyledLinkWrapper,
  StyledTitleContainer,
} from './custom/styled';

interface UserRegisterFrorm {
  username: string;
  password1: string;
  password2: string;
}

const initialState: UserRegisterFrorm = {
  username: '',
  password1: '',
  password2: '',
};

const Register = () => {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState('');

  let navigate = useNavigate();

  const homeReturn = () => {
    useEffect(() => {
      window.location.href = HOME_URL;
    }, []);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state.password1 != state.password2)
      return setError('Your password must be the same');
    await RegisterValidate.validate(state)
      .then(async () => {
        const userRegister: UserSigninResquest = {
          username: state.username,
          password: state.password1,
        };
        const signinResponse = await userSigninResquest(userRegister);
        if (signinResponse.success) navigate('/login');
        else setError('Cannot create the account');
      })
      .catch((err) => {
        setError(err.errors);
      });
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;
    setError('');
    setState((prev) => ({ ...prev, [inputName]: value }));
  };

  return (
    <>
      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <StyledTitleContainer>
            <h2>Register</h2>
          </StyledTitleContainer>
          <label htmlFor="username">Your Email</label>
          <StyledInput
            type="email"
            name="username"
            value={state.username}
            onChange={handleInput}
          />
          <label htmlFor="password">Your Password</label>
          <StyledInput
            type="password"
            name="password1"
            value={state.password1}
            onChange={handleInput}
          />
          <label htmlFor="password">Re enter your Password</label>
          <StyledInput
            type="password"
            name="password2"
            value={state.password2}
            onChange={handleInput}
          />
          <StyledErrorBox>
            {error && (
              <StyledError>
                <p>{error}</p>
              </StyledError>
            )}
          </StyledErrorBox>
          <StyledLinkWrapper>
            <StyledLinkContainer>
              <StyledLinks href={`${HOME_URL}`}>Want a guess try?</StyledLinks>
            </StyledLinkContainer>
            <StyledButton type="submit">Register</StyledButton>
            <StyledLinkContainer>
              <StyledLinks onClick={() => navigate('/login')}>
                Have an accout? Login
              </StyledLinks>
            </StyledLinkContainer>
          </StyledLinkWrapper>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
};

export default Register;
