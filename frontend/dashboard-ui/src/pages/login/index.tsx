import React, { useState } from 'react';

import {
  LoginValidate,
  UserLoginResquest,
  userLoginResquest,
} from '../../services/index';
import {
  GlobalStyle,
  StyledButton,
  StyledButtonContainer,
  StyledError,
  StyledErrorBox,
  StyledForm,
  StyledFormWrapper,
  StyledInput,
  StyledTitleContainer,
} from './custom/styled';

const initialState: UserLoginResquest = {
  username: '',
  password: '',
};

const Login = () => {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await LoginValidate.validate(state)
      .then(() => {
        console.log(state); //TODO: DELETE THIS LOG
        userLoginResquest(state).then((state) => console.log(state)); //TODO: DELETE THIS LOG
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
            <h2>Login</h2>
          </StyledTitleContainer>
          <label htmlFor="username">Email</label>
          <StyledInput
            type="email"
            name="username"
            value={state.username}
            onChange={handleInput}
          />
          <label htmlFor="password">Password</label>
          <StyledInput
            type="password"
            name="password"
            value={state.password}
            onChange={handleInput}
          />
          <StyledErrorBox>
            {error && (
              <StyledError>
                <p>{error}</p>
              </StyledError>
            )}
          </StyledErrorBox>
          <StyledButtonContainer>
            <StyledButton type="submit">Login</StyledButton>
          </StyledButtonContainer>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
};

export default Login;
