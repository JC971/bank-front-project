import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, logout } from '../authentSlice';

const AuthComponent = () => {
  const dispatch = useDispatch();
  const { user, isLoading, error } = useSelector((state) => state.auth);

  const handleLogin = () => {
    dispatch(signIn({ email: '', password: '' }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.name}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin} disabled={isLoading}>
          Login
        </button>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default AuthComponent;
