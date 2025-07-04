import React, { useState } from "react";
import { FaGithub } from 'react-icons/fa';
import { SiReact, SiJavascript, SiTypescript, SiMongodb, SiNodedotjs } from 'react-icons/si';

const projetos = [
  {
    titulo: "Sistema Médico Simples",
    descricao: "Protótipo de sistema para cadastro de pacientes e agendamento de consultas.",
    tecnologias: [<SiReact size={22} color="#61dafb" />, <SiJavascript size={22} color="#f7df1e" />, <SiNodedotjs size={22} color="#3c873a" />],
    link: "https://github.com/SnDann/sistema-medico"
  },
  {
    titulo: "Dashboard Administrativo",
    descricao: "Painel administrativo para controle de usuários e relatórios.",
    tecnologias: [<SiReact size={22} color="#61dafb" />, <SiTypescript size={22} color="#3178c6" />, <SiMongodb size={22} color="#47a248" />],
    link: "https://github.com/SnDann/dashboard-admin"
  },
  {
    titulo: "App de Estudos em React",
    descricao: "Aplicação de estudos com React Hooks e integração com API.",
    tecnologias: [<SiReact size={22} color="#61dafb" />, <SiJavascript size={22} color="#f7df1e" />],
    link: "https://github.com/SnDann/app-react-estudos"
  }
];

const Projects = () => (
  <section id="projetos" style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', minHeight:'50vh', background: 'rgba(255,255,255,0.85)', borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.10)', margin: '40px 0 32px 0', padding: 48, maxWidth: 1100, width: '100%'}}>
    <h2 style={{fontSize:'2.2rem', marginBottom:24, color:'#2563eb', fontWeight:700, letterSpacing:1}}>Projetos</h2>
    <div style={{display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center', width: '100%'}}>
      {projetos.map((proj) => (
        <div key={proj.titulo} style={{background: '#f7f8fa', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: 28, minWidth: 260, maxWidth: 340, flex: '1 1 300px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16}}>
          <h3 style={{margin: 0, color: '#2563eb', fontWeight: 600, fontSize: '1.3rem', textAlign: 'center'}}>{proj.titulo}</h3>
          <p style={{color: '#555', textAlign: 'center', fontSize: '1.05rem', margin: '8px 0 0 0'}}>{proj.descricao}</p>
          <div style={{display: 'flex', gap: 10, margin: '12px 0'}}>{proj.tecnologias}</div>
          <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{background: '#2563eb', color: '#fff', padding: '8px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 8, fontSize: '1rem', marginTop: 8}}>
            <FaGithub size={20} /> Ver no GitHub
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects; 