import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
  const [enviado, setEnviado] = useState(false);
  const [erros, setErros] = useState({});

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validar = () => {
    const novosErros = {};
    if (!form.nome.trim()) novosErros.nome = 'Nome obrigatório';
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) novosErros.email = 'E-mail inválido';
    if (!form.mensagem.trim()) novosErros.mensagem = 'Mensagem obrigatória';
    return novosErros;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validacao = validar();
    if (Object.keys(validacao).length > 0) {
      setErros(validacao);
      return;
    }
    setEnviado(true);
    setForm({ nome: '', email: '', mensagem: '' });
    setErros({});
  };

  return (
    <section id="contato" style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', minHeight:'50vh', background: 'rgba(255,255,255,0.85)', borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.10)', margin: '40px 0 32px 0', padding: 48, maxWidth: 700, width: '100%'}}>
      <h2 style={{fontSize:'2.2rem', marginBottom:24, color:'#2563eb', fontWeight:700, letterSpacing:1}}>Contato</h2>
      <form className="contato-form" onSubmit={handleSubmit} style={{maxWidth: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16, width: '100%'}}>
        <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} style={{padding: 12, borderRadius: 8, border: '1px solid #ccc', fontSize: '1rem'}} />
        {erros.nome && <span style={{color:'red', fontSize:12}}>{erros.nome}</span>}
        <input name="email" type="email" placeholder="E-mail" value={form.email} onChange={handleChange} style={{padding: 12, borderRadius: 8, border: '1px solid #ccc', fontSize: '1rem'}} />
        {erros.email && <span style={{color:'red', fontSize:12}}>{erros.email}</span>}
        <textarea name="mensagem" placeholder="Mensagem" value={form.mensagem} onChange={handleChange} rows={4} style={{padding: 12, borderRadius: 8, border: '1px solid #ccc', fontSize: '1rem'}} />
        {erros.mensagem && <span style={{color:'red', fontSize:12}}>{erros.mensagem}</span>}
        <button type="submit" style={{background: '#2563eb', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 0', fontWeight: 'bold', fontSize: '1.1rem', marginTop: 8, cursor: 'pointer'}}>Enviar</button>
        {enviado && <span style={{color: 'green', marginTop: 8}}>Mensagem enviada! Obrigado pelo contato.</span>}
      </form>
      <div style={{marginTop: 32, textAlign: 'center', display: 'flex', gap: 32, justifyContent: 'center'}}>
        <a href="mailto:daniel.devfront@gmail.com" style={{color: '#2563eb', fontWeight: 'bold', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: 8}}><FaEnvelope size={28} /></a>
        <a href="https://github.com/SnDann" target="_blank" rel="noopener noreferrer" style={{color: '#2563eb', fontWeight: 'bold', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: 8}}><FaGithub size={28} /></a>
        <a href="https://www.linkedin.com/in/sndanndev/" target="_blank" rel="noopener noreferrer" style={{color: '#2563eb', fontWeight: 'bold', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: 8}}><FaLinkedin size={28} /></a>
      </div>
    </section>
  );
};

export default Contact; 