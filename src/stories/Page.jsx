// Page.jsx
import React from 'react';
import { Header } from './Header';
import { Button } from './Button';
import { designTheme } from '../../.storybook/designTheme';

export const Page = ({ headerVariant = 'Primary', buttonVariant = 'Primary', squaredButtons = false }) => {
  const [user, setUser] = React.useState();

  const buttonStyle = squaredButtons ? { borderRadius: 0 } : {};

  // Map headerVariant to colors
  const headerBackground = {
    Primary: designTheme.colors.Primary,
    Secondary: designTheme.colors.Secondary,
    Ken: designTheme.colors.Ken,
  }[headerVariant];

  const headerTextColor = {
    Primary: designTheme.colors.Primary,
    Secondary: designTheme.colors.Primary,
    Ken: designTheme.colors.Ken,
  }[headerVariant];

  return (
    <article style={{ fontFamily: designTheme.font.family }}>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
        variant={headerVariant}
        headingColor={headerTextColor}
        buttonVariant={buttonVariant}
        squaredButtons={squaredButtons}
      />

      <section
        style={{
          padding: '2rem',
          backgroundColor: designTheme.colors.Secondary,
        }}
      >
        <h2 style={{ color: designTheme.colors.Primary }}>Barbie page title</h2>
        <p style={{ color: designTheme.colors.Primary }}>
          This is my webpage and I love it.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
          <span style={{ backgroundColor: designTheme.colors.Primary, color: designTheme.colors.TextOnPrimary, padding: '0.2rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.875rem' }}>Tip</span>
          <span style={{ color: '#666', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            Adjust the width of the canvas with the{' '}
            <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <path
                  d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
                  id="a"
                  fill="#999"
                />
              </g>
            </svg>
            Viewports addon in the toolbar
          </span>
        </div>
      </section>
    </article>
  );
};
