import { faCheck, faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import axios from '../../api/axios';
import Button from '../../commons/Button/Button.js';
import Input from '../../commons/InputField/Input.js';

//RFC 5322 Format to validate email, http://emailregex.com
const USER_REGEX =
  /(?:[a-z0-9!#$%&'*+\=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const PASSWORD_REGEX = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9]{6,}(?!.*\W)/g; //TODO: change regex to check for special caracter
const REGISTER_URL = '/register';

const Register = () => {
  //language manager
  const { t } = useTranslation();

  const navigate = useNavigate();
  const location = useLocation();

  const userRef = useRef(); //set focus on the user field on load
  const errRef = useRef(); //set focus on error, help with assistant technologies

  //username related
  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);
  //pasword related
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);
  //error
  const [errMsg, setErrMsg] = useState('');
  //success
  const [success, setSuccess] = useState(false);

  //Keep track of keys
  function handleChange(name, value) {
    if (name === 'username') {
      setUser(value);
    } else if (name === 'password') {
      setPassword(value);
    } else {
      setMatchPassword(value);
    }
  }

  //on component load put the focus on the user
  /*  useEffect(() => {
        userRef.current.focus();
    }, [])*/

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPassword(PASSWORD_REGEX.test(password));
    setValidMatch(password === matchPassword);
  }, [password, matchPassword]);

  //clean up the error messages when the user changes the fields
  useEffect(() => {
    setErrMsg('');
  }, [user, password, matchPassword]);

  const handleSubmit = async () => {
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PASSWORD_REGEX.test(password);
    console.log('click');
    if (!v1 || !v2) {
      setErrMsg('Invalid Entry');
      return;
    }
    try {
      await axios.post(
        REGISTER_URL,
        JSON.stringify({ username: user, password: password }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        },
      );
      setSuccess(true);
      //clear state and controlled inputs
      setUser('');
      setPassword('');
      setMatchPassword('');
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 409) {
        setErrMsg('Username Taken');
      } else {
        setErrMsg('Registration Failed');
      }
      errRef.current.focus();
    }
  };

  return (
    <div className="app">
      <header className="App-header">
        {success ? ( //if your registration submit is successful
          <section>
            <h1>Your account has been created!</h1>
            <div>
              <Button
                onClick={() => {
                  navigate('/login', { state: { from: location }, replace: true });
                }}
                type="purple"
                buttonSize="--loginPage"
              >
                Login
              </Button>
            </div>
          </section>
        ) : (
          //on load or on unsuccessful registration
          <>
            <p
              ref={errRef}
              className={errMsg ? 'errmsg' : 'offscreen'}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <h1>Register</h1>
            <div className="login-container">
              <label htmlFor="username">
                Username:
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validName ? 'valid' : 'hide'}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validName || !user ? 'hide' : 'invalid'}
                />
              </label>
              <Input
                attribute={{
                  id: 'email',
                  name: 'username',
                  placeholder: 'E-mail',
                  type: 'text',
                }}
                handleChange={handleChange}
                ref={userRef}
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                required
                aria-invalid={validName ? 'false' : 'true'}
              />
              <p
                id="uidnote"
                className={userFocus && user && !validName ? 'instructions' : 'offscreen'}
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                Must be an email address
              </p>
              <label htmlFor="password">
                Password:
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validPassword ? 'valid' : 'hide'}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validPassword || !password ? 'hide' : 'invalid'}
                />
              </label>
              <Input
                attribute={{
                  id: 'password',
                  name: 'password',
                  placeholder: 'Password',
                  type: 'password',
                }}
                handleChange={handleChange}
                toogle={true}
                required
                aria-invalid={validPassword ? 'false' : 'true'}
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
              />
              <p
                id="pwdnote"
                className={passwordFocus && !validPassword ? 'instructions' : 'offscreen'}
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 24 characters.
                <br />
                Must include uppercase and lowercase letters, a number and a special
                character.
                <br />
                Allowed special characters: <span aria-label="exclamation mark">
                  !
                </span>{' '}
                <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span>{' '}
                <span aria-label="dollar sign">$</span>{' '}
                <span aria-label="percent">%</span>
              </p>
              <label htmlFor="confirm_pwd">
                Confirm Password:
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validMatch && matchPassword ? 'valid' : 'hide'}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validMatch || !matchPassword ? 'hide' : 'invalid'}
                />
              </label>
              <Input
                attribute={{
                  id: 'matched',
                  name: 'matched',
                  placeholder: 'Repeat Password',
                  type: 'password',
                }}
                handleChange={handleChange}
                toogle={true}
                required
                aria-invalid={validMatch ? 'false' : 'true'}
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
              <p
                id="confirmnote"
                className={matchFocus && !validMatch ? 'instructions' : 'offscreen'}
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                Must match the first password input field.
              </p>
              <div>
                <Button
                  disabled={!validName || !validPassword || !validMatch ? true : false}
                  onClick={handleSubmit}
                  type="purple"
                  buttonSize="--loginPage"
                >
                  Register
                </Button>
              </div>
            </div>
          </>
        )}
      </header>
    </div>
  );
};

export default Register;
