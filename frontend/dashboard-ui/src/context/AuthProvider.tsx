import { createContext, useState } from 'react';

/*interface AuthenticatedUser {
  state: UserLoginResquest;
  roles: Array<number>;
  accessToken: string;
}*/

const AuthContext = createContext({});
//TODO: ADD TYPE TO CHILDREN
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;
