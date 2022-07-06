import '../../App.css';

import { React, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Button from '../../commons/Button/Button.js';
import Input from '../../commons/InputField/Input.js';
import CreateLinks from './components/CreateLinks.js';

const LinksCreation = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  //language manager
  const { t } = useTranslation();

  function handleChange(password, value) {
    if (value.length < 6) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
      setPassword(value);
    }
  }

  function handleSubmit() {
    if (password.length > 0) {
      if (!passwordError) {
        CreateLinks(password);
        navigate('/generated', { replace: true } /*{stage:{newLinks}}*/);
      } else {
        //todo a flash on error message
      }
    } else {
      setPasswordError(true);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="app">
          <Input
            attribute={{
              id: 'password',
              name: 'password',
              placeholder: 'Enter your desired password',
              type: 'password',
            }}
            handleChange={handleChange}
            toogle={true}
            param={passwordError}
          />
        </div>
        <div>
          {passwordError ? (
            <label className="label-error">
              {' '}
              Password needs to be at least 6 digits long{' '}
            </label>
          ) : (
            ''
          )}
        </div>
        <div className="app">
          <Button onClick={handleSubmit} type="purple" buttonSize="--linksGenerator">
            {' '}
            Create Link{' '}
          </Button>
        </div>
      </header>
    </div>
  );
};

export default LinksCreation;
