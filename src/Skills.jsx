import React, { useState } from "react";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiMongodb, SiFigma, SiHtml5, SiCss3 } from "react-icons/si";

const skillsData = [
  {
    categoria: "Frontend",
    skills: [
      { nome: "React", icon: <FaReact color="#61dafb" size={36} /> },
      { nome: "JavaScript", icon: <SiJavascript color="#f7df1e" size={36} /> },
      { nome: "TypeScript", icon: <SiTypescript color="#3178c6" size={36} /> },
      { nome: "HTML", icon: <SiHtml5 color="#e34c26" size={36} /> },
      { nome: "CSS", icon: <SiCss3 color="#1572b6" size={36} /> }
    ]
  },
  {
    categoria: "Backend",
    skills: [
      { nome: "Node.js", icon: <FaNodeJs color="#3c873a" size={36} /> },
      { nome: "MongoDB", icon: <SiMongodb color="#47a248" size={36} /> }
    ]
  },
  {
    categoria: "Outras",
    skills: [
      { nome: "Git", icon: <FaGitAlt color="#f34f29" size={36} /> },
      { nome: "Figma", icon: <SiFigma color="#a259ff" size={36} /> }
    ]
  }
];

const Skills = () => {
  const [categoria, setCategoria] = useState("Frontend");

  return (
    <section id="skills" style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', minHeight:'50vh', background: 'rgba(255,255,255,0.85)', borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.10)', margin: '40px 0 32px 0', padding: 48, maxWidth: 900, width: '100%'}}>
      <h2 style={{fontSize:'2.2rem', marginBottom:24, color:'#2563eb', fontWeight:700, letterSpacing:1}}>Habilidades</h2>
      <div style={{display:'flex', gap:16, marginBottom:32}}>
        {skillsData.map((cat) => (
          <button
            key={cat.categoria}
            onClick={() => setCategoria(cat.categoria)}
            style={{
              fontWeight: categoria === cat.categoria ? "bold" : "normal",
              background: categoria === cat.categoria ? '#2563eb' : '#fff',
              color: categoria === cat.categoria ? '#fff' : '#2563eb',
              border: '2px solid #2563eb',
              borderRadius: 8,
              padding: '8px 24px',
              fontSize: '1.1rem',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            {cat.categoria}
          </button>
        ))}
      </div>
      <div style={{display:'flex', flexWrap:'wrap', gap:28, justifyContent:'center', width:'100%', marginTop: 8}}>
        {skillsData.find((cat) => cat.categoria === categoria).skills.map((skill) => (
          <div key={skill.nome} style={{
            background:'#f7f8fa',
            borderRadius:14,
            boxShadow:'0 2px 8px rgba(0,0,0,0.06)',
            padding:'18px 16px',
            minWidth:100,
            flex:'1 1 100px',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            gap:10,
            transition:'box-shadow 0.2s, transform 0.2s',
            justifyContent:'center',
            cursor:'pointer',
            willChange: 'transform'
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <span style={{display:'flex', alignItems:'center', justifyContent:'center', height:36}}>{React.cloneElement(skill.icon, { size: 32 })}</span>
            <span style={{fontWeight:600, color:'#2563eb', fontSize:'1rem', marginTop:4, textAlign:'center'}}>{skill.nome}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 