import { createContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  //the children represents the components that are nested inside the AuthProvider
  const [auth, setAuth] = useState({}); //authenticated (or not)

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
