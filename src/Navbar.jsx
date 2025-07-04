import React from "react";

const Navbar = () => (
  <nav className="navbar" style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    background: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
    zIndex: 100,
    padding: '10px 0',
    display: 'flex',
    justifyContent: 'center',
    gap: 32
  }}>
    <a href="#sobre" style={{color: '#4f8cff', textDecoration: 'none', fontWeight: 'bold'}}>Sobre</a>
    <a href="#projetos" style={{color: '#4f8cff', textDecoration: 'none', fontWeight: 'bold'}}>Projetos</a>
    <a href="#skills" style={{color: '#4f8cff', textDecoration: 'none', fontWeight: 'bold'}}>Skills</a>
    <a href="#contato" style={{color: '#4f8cff', textDecoration: 'none', fontWeight: 'bold'}}>Contato</a>
  </nav>
);

export default Navbar; 