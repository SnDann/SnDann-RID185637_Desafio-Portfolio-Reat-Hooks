# Portfólio Daniel Pereira

Este projeto é um portfólio profissional desenvolvido em **React** com **Vite**, apresentando habilidades, projetos, informações de contato e currículo para download.

## Tecnologias Utilizadas
- [React](https://react.dev/) 19+
- [Vite](https://vitejs.dev/) 7+
- [React Icons](https://react-icons.github.io/react-icons/)
- CSS Moderno e responsivo

## Estrutura do Projeto
```
meu-portfolio/
├── public/                # Arquivos estáticos (favicons, manifest, imagens, currículo)
├── src/                   # Código-fonte React
│   ├── About.jsx
│   ├── App.jsx             # Componente principal
│   ├── Card.jsx
│   ├── Contact.jsx
│   ├── Navbar.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── WelcomeMessage.jsx
│   ├── index.jsx           # Ponto de entrada da aplicação
│   └── ...
├── package.json           # Dependências e scripts
├── vite.config.js         # Configuração do Vite
└── README.md              # Documentação do projeto
```

## Instalação e Execução Local
1. **Clone o repositório:**
   ```bash
   git clone https://github.com/SnDann/SnDann-RID185637_Desafio-Portfolio-Reat-Hooks.git
   cd meu-portfolio
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Execute o projeto em modo desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse [http://localhost:5173](http://localhost:5173) no navegador.

## Build para Produção
```bash
npm run build
```
Os arquivos otimizados ficarão na pasta `dist/`.

## Deploy
O projeto pode ser facilmente publicado na [Vercel](https://vercel.com/) ou [Netlify](https://www.netlify.com/):
- Faça login na plataforma
- Importe o repositório do GitHub
- Configure o comando de build: `npm run build`
- Configure o diretório de saída: `dist`

## Publicação no GitHub
1. Inicialize o repositório:
   ```bash
   git init
   git add .
   git commit -m "Portfólio inicial"
   git branch -M main
   git remote add origin https://github.com/SnDann/SnDann-RID185637_Desafio-Portfolio-Reat-Hooks.git
   git push -u origin main
   ```

## Compatibilidade e Boas Práticas
- Todos os arquivos JSX possuem extensão `.jsx` (exceto o principal, que é `.js`).
- Imports e caminhos ajustados para ambiente Vite.
- Arquivos duplicados e desnecessários removidos.
- Ícones e manifest configurados para PWA e favicon.
- Download do currículo em PDF personalizado.
- Layout responsivo e minimalista.

## Personalização
- Altere as informações em `src/App.jsx` e componentes conforme sua necessidade.
- Substitua os arquivos de ícone e currículo na pasta `public/`.
- O ponto de entrada da aplicação é `src/index.jsx`.

## Licença
Este projeto é de uso pessoal e pode ser adaptado livremente.
#   S n D a n n - R I D 1 8 5 6 3 7 _ D e s a f i o - P o r t f o l i o - R e a t - H o o k s 
 
 