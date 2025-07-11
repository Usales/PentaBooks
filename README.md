# PentaBooks

PentaBooks é uma plataforma web moderna para descoberta, leitura e organização de livros digitais, com foco em usabilidade, performance e experiência do usuário. O projeto foi desenvolvido em React, com arquitetura modular, design responsivo e código limpo, visando escalabilidade e facilidade de manutenção.

## Visão Geral

- **Descubra livros digitais** organizados por gêneros, autores e categorias.
- **Favoritos**: marque livros com estrela e acesse rapidamente na seção exclusiva.
- **Busca inteligente**: pesquise por título, autor, gênero ou descrição com resultados em tempo real.
- **Download de PDFs**: baixe livros diretamente dos cards, favoritos ou resultados de busca.
- **Interface moderna e responsiva**: experiência consistente em desktop, tablet e mobile.
- **Acessibilidade**: navegação por teclado, contraste adequado e feedback visual.
- **Área administrativa**: login exclusivo para administrador (simulado).

## Principais Funcionalidades

- Navegação por abas de gêneros e autores
- Cards de livros com design responsivo e animações
- Modal de todos os livros com filtro por categoria
- Sistema de favoritos persistente (localStorage)
- Pesquisa global com miniaturas e download rápido
- Footer com informações de contato e redes sociais
- Modal de login para área administrativa

## Arquitetura e Tecnologias

- **React 19** (Create React App)
- **Componentização**: cada parte da interface é um componente reutilizável
- **CSS puro**: estilização moderna, sem frameworks externos
- **Persistência**: favoritos salvos no localStorage
- **Acessibilidade**: uso de roles, labels e navegação por teclado
- **Responsividade**: media queries e layout flexível

## Estrutura de Pastas

```
penta-books/
  ├── public/
  ├── src/
  │   ├── components/
  │   │   ├── Header/
  │   │   ├── Hero/
  │   │   ├── BookSection/
  │   │   ├── AllBooks/
  │   │   ├── Favoritos/
  │   │   └── Footer/
  │   ├── imagens/
  │   ├── Livros/
  │   ├── App.js
  │   └── index.js
  ├── package.json
  └── README.md
```

## Instalação e Execução

1. **Pré-requisitos:** Node.js >= 18, npm >= 9
2. **Clone o repositório:**
   ```bash
   git clone <url-do-repo>
   cd penta-books
   ```
3. **Instale as dependências:**
   ```bash
   npm install
   ```
4. **Execute em modo desenvolvimento:**
   ```bash
   npm start
   ```
   O app estará disponível em [http://localhost:3000](http://localhost:3000)

5. **Build para produção:**
   ```bash
   npm run build
   ```

## Scripts Disponíveis

- `npm start` — inicia o servidor de desenvolvimento
- `npm run build` — gera build otimizado para produção
- `npm test` — executa testes (se aplicável)
- `npm run eject` — expõe configurações avançadas do CRA

## Padrões de Código e Boas Práticas

- **Componentes funcionais** e hooks
- **Separação de responsabilidades**: lógica, apresentação e estilos
- **Nomenclatura clara** para arquivos, funções e variáveis
- **Comentários explicativos** apenas onde necessário
- **Atenção à acessibilidade** e responsividade
- **Sem dependências desnecessárias**

## Acessibilidade

- Navegação por teclado em todos os modais e menus
- Contraste de cores adequado
- Feedback visual em botões e interações
- Uso de `aria-label` e roles semânticos

## Responsividade

- Layout adaptado para diferentes tamanhos de tela
- Testado em Chrome, Firefox, Edge e mobile

## Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch: `git checkout -b feature/nome-da-feature`
3. Commit suas alterações: `git commit -m 'feat: minha contribuição'`
4. Push para o fork: `git push origin feature/nome-da-feature`
5. Abra um Pull Request

## Licença

Este projeto é open-source sob a licença MIT.

---

Desenvolvido por Gabriel Henriques Sales — [LinkedIn](https://www.linkedin.com/in/gabriel-henriques-sales-43953b218/) | [GitHub](https://github.com/Usales)
