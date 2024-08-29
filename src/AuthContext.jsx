import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setLogged(true); // Logged if token is found in localStorage.
    }
  }, []);

  return (
    <AuthContext.Provider value={{ logged, setLogged }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Child are react elements
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
