import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';
import { designTheme } from '../../.storybook/designTheme'; // adjust path
import './header.css';

/** Header component */
export const Header = ({
  user = null,
  onLogin,
  onLogout,
  onCreateAccount,
  variant = 'Primary',      // header background + text
  buttonVariant = 'Primary',// button variant
  squaredButtons = false,   // whether buttons have squared corners
}) => {
  // Map header variant to theme colors
  const variantStyles = {
    Primary: {
      backgroundColor: designTheme.colors.Primary,
      color: designTheme.colors.TextOnPrimary,
    },
    Secondary: {
      backgroundColor: designTheme.colors.Secondary,
      color: designTheme.colors.SecondaryText,
    },
    Ken: {
      backgroundColor: designTheme.colors.Ken,
      color: designTheme.colors.TextOnKen,
    },
  };

  const currentStyle = variantStyles[variant] || variantStyles.Primary;

  return (
    <header
      style={{
        backgroundColor: currentStyle.backgroundColor,
        color: currentStyle.color,
        padding: '1rem',
      }}
    >
      <div className="storybook-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo + heading */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img
            src="https://www.pngmart.com/files/4/Barbie-Logo-PNG-Transparent-Image.png"
            alt="Barbie Logo"
            width={32}
            height={32}
          />
          <h1
            style={{
              color: currentStyle.color,
              fontFamily: designTheme.font.family,
              fontWeight: designTheme.font.weight,
              lineHeight: designTheme.font.lineHeight,
              margin: 0,
            }}
          >
            PINK
          </h1>
        </div>

        {/* Buttons + welcome text */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {user ? (
            <>
              <span
                className="welcome"
                style={{
                  color: currentStyle.color,
                }}
              >
                Welcome, <b>{user.name}</b>!
              </span>
              <Button
                variant={buttonVariant}
                size="Medium"
                style={squaredButtons ? { borderRadius: 0 } : {}}
                onClick={onLogout}
                label="Log out"
              />
            </>
          ) : (
            <>
              <Button
                variant={buttonVariant}
                size="Medium"
                style={squaredButtons ? { borderRadius: 0 } : {}}
                onClick={onLogin}
                label="Log in"
              />
              <Button
                variant={buttonVariant}
                size="Medium"
                style={squaredButtons ? { borderRadius: 0 } : {}}
                onClick={onCreateAccount}
                label="Sign up"
              />
            </>
          )}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
  /** Variant controls header background + text color */
  variant: PropTypes.oneOf(['Primary', 'Secondary', 'Ken']),
  /** Variant for buttons inside the header */
  buttonVariant: PropTypes.oneOf(['Primary', 'Secondary', 'Ken']),
  /** Whether buttons inside header have squared corners */
  squaredButtons: PropTypes.bool,
};
