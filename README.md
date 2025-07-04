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
│   ├── components/        # Componentes reutilizáveis (Navbar, Card, etc.)
│   ├── App.jsx            # Componente principal
│   ├── index.jsx          # Ponto de entrada da aplicação
│   └── ...
├── package.json           # Dependências e scripts
├── vite.config.js         # Configuração do Vite
└── README.md              # Documentação do projeto
```

## Instalação e Execução Local
1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/seu-repo.git
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
   git remote add origin https://github.com/seu-usuario/seu-repo.git
   git push -u origin main
   ```

## Compatibilidade e Boas Práticas
- Todos os arquivos JSX possuem extensão `.jsx`.
- Imports e caminhos ajustados para ambiente Vite.
- Arquivos duplicados e desnecessários removidos.
- Ícones e manifest configurados para PWA e favicon.
- Download do currículo em PDF personalizado.
- Layout responsivo e minimalista.

## Personalização
- Altere as informações em `src/App.jsx` e componentes conforme sua necessidade.
- Substitua os arquivos de ícone e currículo na pasta `public/`.

## Licença
Este projeto é de uso pessoal e pode ser adaptado livremente.
