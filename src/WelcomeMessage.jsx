import React, { useEffect, useState } from "react";

const WelcomeMessage = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => setShow(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    show && (
      <div style={{
        background: "#222",
        color: "#fff",
        padding: "1rem",
        borderRadius: "8px",
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 1000
      }}>
        Bem-vindo ao meu portfólio!
      </div>
    )
  );
};

export default WelcomeMessage; 