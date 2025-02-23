# 🚀 Site Prodtech

Site Prodtech é uma plataforma desenvolvida para gerenciar e apresentar informações da empresa Prodtech, oferecendo uma interface moderna e responsiva para usuários públicos e administrativos. O projeto tem como objetivo proporcionar uma experiência fluida e intuitiva, com um design organizado e eficiente.

---

## 📌 Recursos

### Páginas Públicas:

- Seção de apresentação da empresa e seus serviços.
- Interface responsiva para diversos dispositivos.

### Autenticação:

- Página de login para acesso ao painel administrativo.

### Área do Cliente:

- Dashboard exclusivo para clientes com funcionalidades específicas.

### Área Técnica:

- Módulo voltado para a equipe técnica com informações detalhadas.

### Componentização:

- Uso de componentes reutilizáveis para maior organização e manutenção.

### Estilização Eficiente:

- Utilização de estilos organizados para manter uma identidade visual consistente.

---

## 🛠 Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **Vite**: Ferramenta de build moderna e rápida.
- **CSS Modules ou Styled Components**: Para uma estilização modular e escalável.

---

## 📂 Estrutura do Projeto

```
Site Prodtech/
├── public/
│   ├── images/             # Imagens estáticas do projeto
│   ├── components/         # Componentes das páginas públicas
│   ├── styles/             # Estilos das páginas públicas
├── src/
│   ├── assets/             # Recursos estáticos (imagens, fontes, etc.)
│   ├── components/         # Componentes reutilizáveis
│   ├── context/            # Gerenciamento de contexto
│   ├── hooks/              # Hooks personalizados
│   ├── pages/              # Páginas principais
│   │   ├── public/         # Páginas públicas
│   │   │   ├── components/ # Componentes das páginas públicas
│   │   │   ├── styles/     # Estilos das páginas públicas
│   │   ├── signin/         # Página de login
│   │   │   ├── components/ # Componentes da página de login
│   │   │   ├── styles/     # Estilos da página de login
│   │   ├── client/         # Área do cliente
│   │   │   ├── components/ # Componentes da área do cliente
│   │   │   ├── styles/     # Estilos da área do cliente
│   │   ├── tech/           # Área técnica
│   │   │   ├── components/ # Componentes da área técnica
│   │   │   ├── styles/     # Estilos da área técnica
│   ├── routes/             # Configuração de rotas
│   ├── styles/             # Arquivos de estilo globais
│   ├── utils/              # Funções utilitárias
│   ├── App.tsx             # Componente principal do aplicativo
│   ├── main.tsx            # Ponto de entrada do React
├── vite.config.ts          # Configuração do Vite
├── package.json            # Dependências e scripts do projeto
└── README.md               # Documentação do projeto
```

---

## 📦 Instalação e Execução

### 1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/site-prodtech.git
cd site-prodtech
```

### 2. Instale as dependências do projeto:

```bash
npm install
```

### 3. Execute o projeto:

```bash
npm run dev
```

### 4. Acesse no navegador:

```
http://localhost:3000
```

> **Obs.:** A porta pode variar dependendo da disponibilidade.

---

## ✨ Funcionalidades

### 📌 Páginas organizadas:

- Estrutura modular para fácil manutenção e expansão.

### 🔒 Autenticação:

- Página de login segura para controle de acesso.

### 📊 Dashboard para clientes e equipe técnica:

- Diferentes áreas conforme o tipo de usuário.

### 📱 Design Responsivo:

- Interface otimizada para desktop e dispositivos móveis.

### 🛠 Código bem estruturado:

- Componentização e reutilização eficiente.

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
