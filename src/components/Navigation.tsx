
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Button } from './ui/button';

const Navigation: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 md:px-12 w-full">
      <Logo />
      <div className="flex gap-4">
        <Link to="/login">
          <Button variant="ghost">LOGIN</Button>
        </Link>
        <Link to="/signup">
          <Button variant="default">SIGNUP</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
