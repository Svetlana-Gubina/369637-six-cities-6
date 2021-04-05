import React from 'react';

const LoadingScreen = () => {
  return (
    <div style={{
      display: `flex`,
      justifyContent: `center`,
      alignItems: `center`
    }}>
      <p style={{
        marginTop: `20%`,
        fontSize: `18px`,
        letterSpacing: `2px`
      }}>Loading...</p>
    </div>
  );
};

export default LoadingScreen;
