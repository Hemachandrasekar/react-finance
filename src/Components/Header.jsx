import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './Logout';
import Signin from './Signin';

const Header = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="h-14 bg-white shadow-md flex justify-end">
      {isAuthenticated ? <LogoutButton /> : <Signin />}
    </div>
  );
};
export default Header;
