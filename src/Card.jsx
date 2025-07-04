import React from "react";

const Card = ({ children, style, ...props }) => (
  <div
    style={{
      background: '#fff',
      borderRadius: 14,
      boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
      padding: 20,
      margin: 8,
      minWidth: 180,
      maxWidth: 320,
      ...style
    }}
    {...props}
  >
    {children}
  </div>
);

export default Card; 