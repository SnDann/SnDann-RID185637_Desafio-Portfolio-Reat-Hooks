import React from "react";
import { FaUserGraduate, FaBriefcaseMedical, FaCertificate } from 'react-icons/fa';

const About = () => (
  <section id="sobre" style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', minHeight:'60vh', background: 'rgba(255,255,255,0.85)', borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.10)', margin: '40px 0 32px 0', padding: 48, maxWidth: 700, width: '100%'}}>
    <h2 style={{fontSize:'2.2rem', marginBottom:24, color:'#2563eb', fontWeight:700, letterSpacing:1}}>Sobre Mim</h2>
    <p style={{maxWidth: 520, textAlign: 'center', color: '#555', marginBottom: 32, fontSize: '1.1rem', lineHeight: 1.6}}>
      Profissional em transição de carreira da saúde para tecnologia, visando criar soluções digitais que facilitam a vida das pessoas. Foco em sistemas médicos, usabilidade e aprendizado contínuo.
    </p>
    <div style={{display:'flex', flexWrap:'wrap', gap:24, justifyContent:'center', width:'100%'}}>
      <div style={{background:'#f7f8fa', borderRadius:16, boxShadow:'0 2px 8px rgba(0,0,0,0.06)', padding:24, minWidth:220, flex:'1 1 220px', display:'flex', flexDirection:'column', alignItems:'center'}}>
        <FaUserGraduate size={32} color="#2563eb" style={{marginBottom:8}} />
        <strong style={{marginBottom:8}}>Formação</strong>
        <span style={{color:'#444', fontSize:'1rem', textAlign:'center'}}>Técnico em Enfermagem<br/>Escola Alge de Enfermagem<br/>Ribeirão Pires - SP</span>
      </div>
      <div style={{background:'#f7f8fa', borderRadius:16, boxShadow:'0 2px 8px rgba(0,0,0,0.06)', padding:24, minWidth:220, flex:'1 1 220px', display:'flex', flexDirection:'column', alignItems:'center'}}>
        <FaBriefcaseMedical size={32} color="#2563eb" style={{marginBottom:8}} />
        <strong style={{marginBottom:8}}>Experiência</strong>
        <span style={{color:'#444', fontSize:'1rem', textAlign:'center'}}>Hospital Santa Helena<br/>Beneficência Portuguesa<br/>Foco em sistemas médicos e equipes multidisciplinares</span>
      </div>
      <div style={{background:'#f7f8fa', borderRadius:16, boxShadow:'0 2px 8px rgba(0,0,0,0.06)', padding:24, minWidth:220, flex:'1 1 220px', display:'flex', flexDirection:'column', alignItems:'center'}}>
        <FaCertificate size={32} color="#2563eb" style={{marginBottom:8}} />
        <strong style={{marginBottom:8}}>Diferenciais</strong>
        <span style={{color:'#444', fontSize:'1rem', textAlign:'center'}}>Proatividade, comunicação, aprendizado contínuo, experiência prática em projetos ágeis e foco em usabilidade.</span>
      </div>
    </div>
  </section>
);

export default About; 