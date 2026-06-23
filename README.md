# 4llves.dev v3

Portfolio pessoal em `React` com `TypeScript`, `Vite` e `Tailwind CSS v4`.

O projeto esta sendo estruturado com foco em:

- interface moderna e performatica
- componentes reutilizaveis
- organizacao de pastas escalavel
- base limpa para evoluir layouts e paginas

## Stack

- `React 19`
- `TypeScript`
- `Vite 8`
- `Tailwind CSS v4`
- `shadcn/ui`
- `Lucide React`
- `ESLint`
- `Prettier`

## Estrutura atual

```text
src/
  components/
    theme-provider.tsx
    ui/
      button.tsx
  layout/
    Header.tsx
    LayoutDefault.tsx
  lib/
    utils.ts
  pages/
    home/
      hero.tsx
      home-page.tsx
      terminal-window.tsx
  App.tsx
  index.css
  main.tsx
public/
  terminal.svg
```

## Organizacao adotada

### `src/layout`

Contem a estrutura visual compartilhada da aplicacao.

- `LayoutDefault.tsx`: layout base inspirado no padrao de layouts por pagina
- `Header.tsx`: cabecalho principal da aplicacao

### `src/pages`

Contem as paginas e suas secoes locais.

- `home/home-page.tsx`: composicao da pagina inicial
- `home/hero.tsx`: bloco principal de apresentacao
- `home/terminal-window.tsx`: card visual no estilo terminal

### `src/components`

Contem componentes reutilizaveis e integracoes globais.

- `ui/button.tsx`: botao baseado em `shadcn/ui`
- `theme-provider.tsx`: gerenciamento de tema global

### `src/lib`

Contem utilitarios compartilhados.

- `utils.ts`: helper `cn()` para merge de classes

## Padrao de layout

O projeto segue um estilo semelhante ao conceito de layouts por pagina da documentacao do `vite-plugin-ssr`:

- a pagina define seu proprio wrapper visual
- o layout nao fica acoplado diretamente a toda a aplicacao
- isso facilita criar multiplos layouts no futuro, como `LayoutDefault`, `LayoutAuth` ou `LayoutDashboard`

Hoje a pagina inicial utiliza o `LayoutDefault`.

## Tema e estilos

Os estilos globais ficam em `src/index.css` com:

- tokens CSS via variaveis
- fontes `Montserrat Variable` e `Nunito Sans Variable`
- integracao com `Tailwind CSS v4`
- base pronta para tema claro/escuro

## Scripts

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
pnpm format
pnpm typecheck
pnpm preview
```

## Gerenciador de pacotes

Este projeto usa `pnpm` como padrao.

- instale dependencias com `pnpm install`
- rode scripts com `pnpm <script>`
- evite misturar com `npm` para nao gerar lockfiles e fluxos inconsistentes

## Convencoes atuais

- usar alias `@` para imports internos
- manter componentes pequenos e com responsabilidade clara
- separar layout compartilhado de conteudo de pagina
- centralizar utilitarios genericos em `src/lib`

## Proximos passos naturais

- evoluir o `Header` com navegacao real
- refinar o `Hero` e o `TerminalWindow`
- criar novos layouts conforme a aplicacao crescer
- melhorar a semantica visual e responsividade das secoes
