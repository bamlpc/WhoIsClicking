import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { recoveryTokenResquest, RecoveryTokenValidate } from '../../services/index';
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

const Recover = () => {
  const [state, setState] = useState('');
  const [error, setError] = useState('');

  let navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await RecoveryTokenValidate.validate(state).catch((err) => {
      setError(err.errors);
    });

    const recoveryResponse = await recoveryTokenResquest(state).catch((err) => {
      return setError('An error has occurred');
    });

    if (recoveryResponse.success) navigate('/login');
    else if (!recoveryResponse.success) setError('An error has occurred');
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;
    setError('');
    setState((prev) => ({ ...prev, [inputName]: value }));
  };

  //TODO: WORK IN THE IMPLEMENTATION OF THIS, AT THIS POINT IT TAKES AN STRING -TOKEN-, NEED TO IMPLEMENT THE GETTER -EMAIL AS INPUT-
  return (
    <>
      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <StyledTitleContainer>
            <h2>Recover your password</h2>
          </StyledTitleContainer>
          dd
          <label htmlFor="token">Temporary token</label>
          <StyledInput
            type="text"
            name="token"
            value={state.username}
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
              <StyledLinks onClick={() => navigate('/recover')}>
                Want an account? Sigup
              </StyledLinks>
            </StyledLinkContainer>
            <StyledButton type="submit">Send Email</StyledButton>
            <StyledLinkContainer>
              <StyledLinks onClick={() => navigate('/register')}>
                Have an accout? Login
              </StyledLinks>
            </StyledLinkContainer>
          </StyledLinkWrapper>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
};

export default Recover;
