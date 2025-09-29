import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';
import './header.css';

/** Header component */
export const Header = ({
  user = null,
  onLogin,
  onLogout,
  onCreateAccount,
  headingColor = 'FF69B4', // default pink if no color is passed
}) => (
  <header>
    <div className="storybook-header">
      <div>
        <img
          src="https://www.pngmart.com/files/4/Barbie-Logo-PNG-Transparent-Image.png"
          alt="Barbie Logo"
          width={32}
          height={32}
        />
        {/* apply headingColor prop */}
        <h1 style={{ color: headingColor }}>PINK</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button primary size="medium" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="medium" onClick={onLogin} label="Log in" />
            <Button primary size="medium" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
  /** Heading text color */
  headingColor: PropTypes.string,
};
