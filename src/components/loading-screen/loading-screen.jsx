import React from 'react';

const LoadingScreen = () => {
  return (
    <div style={{
      display: `flex`,
      justifyContent: `center`,
      alignItems: `center`,
      backgroundColor: `#DCDCDC`,
      width: `100%`,
      height: `100%`
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
