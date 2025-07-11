# Header Component

## Estrutura Organizada do Cabeçalho

### 📁 Estrutura de Pastas
```
src/components/Header/
├── Header.jsx              # Componente principal
├── Header.css              # Estilos do header
├── Logo/
│   ├── Logo.jsx           # Componente da logo
│   └── Logo.css           # Estilos da logo
├── Navigation/
│   ├── Navigation.jsx     # Componente de navegação
│   ├── Navigation.css     # Estilos da navegação
│   └── DropdownMenu/
│       ├── DropdownMenu.jsx    # Menu dropdown
│       ├── DropdownMenu.css    # Estilos do dropdown
│       └── MenuItem/
│           ├── MenuItem.jsx    # Item do menu
│           └── MenuItem.css    # Estilos do item
└── UserIcons/
    ├── UserIcons.jsx      # Container dos ícones
    ├── UserIcons.css      # Estilos dos ícones
    └── UserIcon/
        ├── UserIcon.jsx   # Ícone individual
        └── UserIcon.css   # Estilos do ícone
```

### 🎯 Responsabilidades

#### **Header.jsx**
- Container principal do cabeçalho
- Orquestra os componentes filhos
- Gerencia o layout geral

#### **Logo.jsx**
- Exibe a logo da Alura Books
- Componente puro (sem estado)

#### **Navigation.jsx**
- Gerencia o estado do menu dropdown
- Contém o botão de toggle
- Renderiza o DropdownMenu

#### **DropdownMenu.jsx**
- Lista de opções do menu
- Animação de entrada/saída
- Configuração das opções

#### **MenuItem.jsx**
- Item individual do menu
- Handler de clique
- Estilos de hover

#### **UserIcons.jsx**
- Container dos ícones do usuário
- Configuração dos ícones

#### **UserIcon.jsx**
- Ícone individual (perfil, carrinho)
- Handler de clique
- Estilos de hover

### 🚀 Benefícios da Nova Estrutura

1. **Separação de Responsabilidades**: Cada componente tem uma função específica
2. **Reutilização**: Componentes podem ser reutilizados em outras partes
3. **Manutenibilidade**: Fácil de modificar e debugar
4. **Escalabilidade**: Fácil adicionar novos recursos
5. **Testabilidade**: Cada componente pode ser testado isoladamente
6. **Performance**: Componentes menores re-renderizam menos

### 🎨 Convenções de Nomenclatura

- **BEM CSS**: `.header__container`, `.navigation__toggle`
- **Componentes**: PascalCase (`Header`, `Navigation`)
- **Arquivos**: PascalCase para componentes, camelCase para utilitários
- **Props**: camelCase (`isOpen`, `menuAberto`)

### 🔧 Como Usar

```jsx
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}
```

### 📝 Próximos Passos

1. Adicionar TypeScript para type safety
2. Implementar testes unitários
3. Adicionar PropTypes ou TypeScript interfaces
4. Implementar temas (dark/light mode)
5. Adicionar animações mais sofisticadas
6. Implementar responsividade mobile 