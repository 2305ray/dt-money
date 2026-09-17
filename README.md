
[README.md](https://github.com/user-attachments/files/32347812/README.md)
# dt-money

Sistema de controle de perdas e ganhos, onde é possível cadastrar transações de entrada (receitas) e saída (despesas), acompanhar o saldo total e filtrar transações por descrição. Cada transação tem descrição, categoria, tipo e valor. Projeto desenvolvido no curso Ignite da Rocketseat.

## 🚀 Tecnologias utilizadas

- **React 19** – biblioteca para construção da interface
- **Vite** – build tool e servidor de desenvolvimento
- **TypeScript**
- **styled-components** – estilização via CSS-in-JS
- **Radix UI** (`react-dialog`, `react-radio-group`) – componentes acessíveis para o modal de nova transação
- **React Hook Form** + **Zod** (`@hookform/resolvers`) – formulários e validação
- **use-context-selector** – Context API otimizada, evitando re-renders desnecessários
- **Axios** – requisições HTTP
- **Phosphor React** – ícones
- **json-server** – simula uma API REST a partir do arquivo `server.json`
- **ESLint**

## 📦 Como rodar o projeto

```bash
# clone o repositório
git clone https://github.com/2305ray/dt-money.git
cd dt-money

# instale as dependências
npm install

# rode a API fake (json-server), em um terminal
npm run dev:server

# em outro terminal, rode o front-end
npm run dev
```

A aplicação depende do `json-server` rodando na porta `3000` (dados em `server.json`) para listar e criar transações — por isso é preciso ter os dois comandos ativos ao mesmo tempo.

Outros scripts disponíveis: `npm run build` (gera a versão de produção), `npm run lint` e `npm run preview`.

## 📁 Estrutura

O estado das transações fica centralizado em `src/contexts/TransactionsContext.tsx`, consumido pelas páginas via Context API. As páginas ficam em `src/pages`, os componentes reutilizáveis (modal de nova transação, header, resumo) em `src/components`, e os temas/estilos globais em `src/styles`.
