# PentaBooks

PentaBooks é uma plataforma web moderna para descoberta, leitura e organização de livros digitais, com foco em usabilidade, performance e experiência do usuário. O projeto foi desenvolvido em React, integrado com a API da Open Library, oferecendo acesso a milhares de livros reais com design responsivo e código limpo.

## Visão Geral

- **Biblioteca digital completa**: acesso a milhares de livros da Open Library
- **Busca inteligente**: pesquise por título ou autor com resultados em tempo real
- **Favoritos**: marque livros com estrela e acesse rapidamente na seção exclusiva
- **Categorização automática**: livros organizados por gêneros baseados nos subjects da API
- **Imagens das capas**: carregamento automático das capas dos livros
- **Links diretos**: acesso direto às páginas oficiais dos livros na Open Library
- **Interface moderna e responsiva**: experiência consistente em desktop, tablet e mobile
- **Acessibilidade**: navegação por teclado, contraste adequado e feedback visual

## Principais Funcionalidades

### 🔍 **Sistema de Busca Avançado**
- Busca por título ou autor
- Resultados em tempo real
- Filtros por gênero/categoria
- Interface intuitiva com dropdown de tipo de busca

### 📚 **Biblioteca Digital**
- Milhares de livros da Open Library
- Categorização automática por gêneros
- Imagens das capas carregadas automaticamente
- Informações detalhadas dos livros

### ⭐ **Sistema de Favoritos**
- Marcação de livros favoritos
- Persistência no localStorage
- Seção exclusiva para favoritos
- Sincronização automática

### 🎨 **Interface Moderna**
- Design responsivo e adaptativo
- Animações suaves e feedback visual
- Modal de todos os livros com filtros
- Navegação intuitiva

## Arquitetura e Tecnologias

- **React 19** (Create React App)
- **Axios**: para comunicação com APIs
- **Open Library API**: fonte de dados dos livros
- **Componentização**: cada parte da interface é um componente reutilizável
- **CSS puro**: estilização moderna, sem frameworks externos
- **Persistência**: favoritos salvos no localStorage
- **Acessibilidade**: uso de roles, labels e navegação por teclado
- **Responsividade**: media queries e layout flexível

## Estrutura de Pastas

```
PentaBooks/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Navigation/
│   │   │   ├── Logo/
│   │   │   └── UserIcons/
│   │   ├── Hero/
│   │   ├── BookSection/
│   │   ├── AllBooks/
│   │   ├── Favoritos/
│   │   └── Footer/
│   ├── servicos/
│   │   └── livros.js          # Serviços da API Open Library
│   ├── imagens/
│   ├── Livros/               # PDFs locais (ainda disponíveis)
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## APIs Utilizadas

### Open Library API
- **Base URL**: `https://openlibrary.org`
- **Endpoints principais**:
  - `/search.json?subject=fiction&limit=20` - Livros populares
  - `/search.json?title={titulo}` - Busca por título
  - `/search.json?author={autor}` - Busca por autor
  - `/works/{id}.json` - Detalhes de um livro específico
  - `/covers.openlibrary.org/b/id/{cover_id}-L.jpg` - Imagens das capas

## Instalação e Execução

1. **Pré-requisitos:** Node.js >= 18, npm >= 9
2. **Clone o repositório:**
   ```bash
   git clone <url-do-repo>
   cd PentaBooks
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

## Como Usar

### 🔍 **Fazendo Buscas**
1. Clique em "Todas as Categorias" no header
2. Use o dropdown para escolher entre "Buscar por título" ou "Buscar por autor"
3. Digite o termo de busca no campo de texto
4. Pressione Enter ou clique em "Buscar"

### ⭐ **Gerenciando Favoritos**
1. Clique na estrela em qualquer livro para favoritá-lo
2. Acesse "Favoritos" no header para ver todos os livros salvos
3. Clique novamente na estrela para remover dos favoritos

### 📚 **Navegando pelos Livros**
1. Use os filtros por categoria para organizar os resultados
2. Clique em "Ver na Open Library" para acessar a página oficial do livro
3. Explore diferentes gêneros e autores

## Padrões de Código e Boas Práticas

- **Componentes funcionais** e hooks
- **Separação de responsabilidades**: lógica, apresentação e estilos
- **Nomenclatura clara** para arquivos, funções e variáveis
- **Tratamento de erros** em todas as chamadas de API
- **Estados de loading** para melhor UX
- **Atenção à acessibilidade** e responsividade
- **Sem dependências desnecessárias**

## Acessibilidade

- Navegação por teclado em todos os modais e menus
- Contraste de cores adequado
- Feedback visual em botões e interações
- Uso de `aria-label` e roles semânticos
- Estados de loading e erro claros

## Responsividade

- Layout adaptado para diferentes tamanhos de tela
- Busca responsiva com elementos flexíveis
- Cards de livros otimizados para mobile
- Testado em Chrome, Firefox, Edge e dispositivos móveis

## Funcionalidades Técnicas

### 🚀 **Performance**
- Lazy loading de imagens
- Tratamento de erros de carregamento
- Estados de loading para feedback visual
- Otimização de chamadas de API

### 🔧 **Manutenibilidade**
- Código modular e reutilizável
- Serviços separados para APIs
- Componentes bem estruturados
- Documentação clara

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
