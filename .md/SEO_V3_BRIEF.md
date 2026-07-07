# SEO Brief para a v3 do `4llves.dev`

## Objetivo

Este documento resume como o site atual (`Next.js`) trata SEO, quais sinais de busca já existem no código e o que a v3 em `Vite` precisa implementar para manter e melhorar a capacidade do site de aparecer nas pesquisas.

O foco aqui não é copiar visualmente o site atual, e sim preservar:

- relevância semântica
- indexabilidade
- metadados corretos
- estrutura rastreável pelos buscadores
- sinais de autoridade e contexto da marca pessoal

---

## 1. O que existe hoje no site atual

### Stack atual

- Framework: `Next.js 15`
- Renderização: App Router
- Rotas encontradas:
  - `/`
  - `/about`
  - `/projects`
  - `/talks`

### Metadados SEO encontrados

No arquivo `src/app/layout.tsx`, existe um `metadata` global com:

- `title`: `4llves.dev | Alves Jhonata Developer Frontend & RPA`
- `description`: `Alves Jhonata | Desenvolvedor Front-end | RPA | Desvendando problemas e criando soluções através da tecnologia.`

Esses dois campos são hoje o núcleo do SEO do projeto atual.

### Conteúdo textual forte para busca

O site atual repete com clareza os principais termos que ajudam o Google a entender a página:

- `Alves Jhonata`
- `4llves.dev`
- `Desenvolvedor Front-end`
- `RPA`
- `React`
- `Next.js`
- `Tailwind CSS`
- `Python`
- `interfaces intuitivas`
- `automatização de processos`
- `soluções através da tecnologia`

### Estrutura semântica útil

O site atual possui alguns sinais positivos:

- existe `h1` na home com o nome principal
- existe separação clara por páginas
- os links internos apontam para páginas reais do site
- imagens principais têm `alt`
- existe conteúdo textual real na página Sobre

### Navegação atual

Itens de navegação encontrados:

- `Home`
- `Sobre`
- `Projetos`
- `Talks`

Isso ajuda rastreadores a descobrirem as páginas internas.

### Imagens e ativos relevantes

Ativos que podem ser reutilizados para SEO/social preview:

- `public/4llves.jpg`
- `public/myLogoLight.png`
- `src/app/favicon.ico`

Esses arquivos podem servir para:

- `favicon`
- `apple-touch-icon`
- imagem de compartilhamento social (`og:image`)
- identidade visual da marca pessoal

---

## 2. Diagnóstico real do SEO atual

O SEO atual é **simples, mas funcional**. Ele funciona mais por:

- título claro
- descrição clara
- conteúdo textual coerente
- páginas navegáveis
- palavras-chave presentes no conteúdo

Do ponto de vista técnico, o site atual **não está completo em SEO**. Não encontrei no código:

- `robots.txt`
- `sitemap.xml`
- `canonical`
- metadados por página
- `open graph` completo
- metadados `twitter`
- dados estruturados (`JSON-LD`)
- configuração de indexação por rota
- `hreflang`

Também há um detalhe importante:

- o HTML está com `lang="en"` no layout atual, mas o conteúdo principal está em português. Para SEO, isso deveria ser `pt-BR`.

Conclusão: a v3 não precisa apenas "ficar igual". Ela pode ficar **melhor que a atual** com pouco esforço técnico, desde que a indexação seja pensada corretamente.

---

## 3. Informações da marca/pessoa extraídas do código

Estas informações devem orientar os metadados e os dados estruturados da v3:

### Identidade principal

- Nome: `Alves Jhonata`
- Marca/site: `4llves.dev`
- Função principal: `Desenvolvedor Front-end`
- Especialidade complementar: `RPA`

### Posicionamento textual atual

Frases importantes já usadas no site:

- `Desvendando problemas e criando soluções através da tecnologia`
- `Como especialista em Front-end e RPA`
- `crio interfaces intuitivas`
- `automatizo processos complexos`
- `otimizando operações e elevando a experiência do usuário`

### Tecnologias citadas no conteúdo

- `React`
- `Next.js`
- `Tailwind CSS`
- `Python`

### Localização mencionada

- `Goianésia do Pará - PA`

Isso pode ajudar em buscas de marca pessoal e buscas locais.

---

## 4. Intenção de busca que a v3 deve atender

O novo site deve ser otimizado para ranquear especialmente em buscas relacionadas a:

- nome da pessoa: `Alves Jhonata`
- marca: `4llves.dev`
- profissão: `desenvolvedor front-end`
- especialidade: `RPA`
- variações combinadas:
  - `Alves Jhonata desenvolvedor front-end`
  - `Alves Jhonata RPA`
  - `4llves.dev portfólio`
  - `desenvolvedor front-end em Goianésia do Pará`
  - `portfólio React Next.js Tailwind`

Importante: o foco deve ser **SEO semântico**, não repetição artificial de palavras-chave.

---

## 5. Requisito crítico para a v3 em Vite

### A maior decisão técnica

Se a v3 for feita como **SPA pura em Vite**, o SEO pode ficar inferior ao do projeto atual.

Para manter boa indexação, a v3 deve usar pelo menos uma destas abordagens:

1. `SSR`
2. `SSG / prerender`
3. geração estática por rota com HTML final entregue ao crawler

### Recomendação prática

Para um portfólio como este, o ideal é:

- usar `Vite` com páginas pré-renderizadas
- ou usar uma solução React com prerender/SSG
- evitar depender apenas de renderização client-side para conteúdo principal

Se a v3 for React + Vite, o agente deve considerar algo como:

- `react-helmet-async` para gerenciar `<title>` e metas
- `vite-plugin-prerender` ou estratégia equivalente
- geração de `sitemap.xml` e `robots.txt`

Sem isso, o site pode até ser indexado, mas com menor consistência e pior leitura inicial pelos buscadores.

---

## 6. O que a v3 precisa implementar obrigatoriamente

### 6.1 Metadados globais

O `<head>` da v3 deve conter pelo menos:

- `title`
- `meta name="description"`
- `meta name="robots"`
- `link rel="canonical"`
- `meta property="og:title"`
- `meta property="og:description"`
- `meta property="og:type"`
- `meta property="og:url"`
- `meta property="og:image"`
- `meta property="og:site_name"`
- `meta name="twitter:card"`
- `meta name="twitter:title"`
- `meta name="twitter:description"`
- `meta name="twitter:image"`
- `meta name="theme-color"`

### 6.2 Idioma e localização

Definir corretamente:

- `<html lang="pt-BR">`

Se houver versão em inglês no futuro, então implementar:

- `hreflang`

### 6.3 Metadados por página

Cada rota relevante da v3 precisa ter:

- título próprio
- descrição própria
- canonical própria
- `og:url` própria

Sugestão de páginas:

- Home
- Sobre
- Projetos
- Talks
- Contato, se existir

### 6.4 Dados estruturados

Implementar `JSON-LD` no mínimo para:

- `Person`
- `WebSite`

Opcionalmente também:

- `ProfilePage`
- `CollectionPage` para projetos
- `BreadcrumbList`

### 6.5 Arquivos técnicos obrigatórios

Criar:

- `public/robots.txt`
- `public/sitemap.xml`
- `public/site.webmanifest` se fizer sentido para identidade e consistência

### 6.6 Semântica do HTML

Cada página deve respeitar:

- apenas um `h1` principal por página
- hierarquia correta de `h2`, `h3`
- uso de `main`, `header`, `nav`, `section`, `footer`
- links com texto compreensível
- imagens com `alt` descritivo

### 6.7 Performance que impacta SEO

O agente deve cuidar de:

- imagens otimizadas em `webp`/`avif` quando possível
- dimensões declaradas nas imagens
- lazy loading em imagens não críticas
- preload apenas do conteúdo acima da dobra quando necessário
- minimizar JS desnecessário
- evitar layout shift
- garantir boa pontuação de Core Web Vitals

### 6.8 Indexabilidade

Garantir que:

- páginas importantes retornem `200`
- páginas inexistentes retornem `404`
- não haja bloqueio indevido por `robots`
- canonical aponte para a URL final correta
- o menu interno ligue todas as páginas principais

---

## 7. Conteúdo-base recomendado para os metadados da v3

### Title principal sugerido

`4llves.dev | Alves Jhonata - Desenvolvedor Front-end e RPA`

### Description principal sugerida

`Portfólio de Alves Jhonata, desenvolvedor Front-end e especialista em RPA. Projetos, experiência, automação de processos e soluções com React, Next.js, Tailwind CSS e Python.`

### Variações por página

#### Home

- Title: `4llves.dev | Alves Jhonata - Desenvolvedor Front-end e RPA`
- Description: `Portfólio de Alves Jhonata com foco em Front-end, RPA, automação de processos e desenvolvimento de interfaces modernas.`

#### Sobre

- Title: `Sobre | Alves Jhonata - 4llves.dev`
- Description: `Conheça a trajetória de Alves Jhonata, desenvolvedor Front-end e especialista em RPA, com experiência em tecnologia, automação e interfaces web.`

#### Projetos

- Title: `Projetos | Alves Jhonata - 4llves.dev`
- Description: `Veja projetos e freelas de Alves Jhonata em desenvolvimento Front-end, interfaces web e soluções digitais.`

#### Talks

- Title: `Talks | Alves Jhonata - 4llves.dev`
- Description: `Palestras, participações e conteúdos de Alves Jhonata sobre tecnologia, Front-end e automação.`

---

## 8. JSON-LD sugerido para a v3

O agente pode usar algo nesta linha, ajustando URLs reais:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Alves Jhonata",
  "url": "https://4llves.dev",
  "jobTitle": "Desenvolvedor Front-end e Especialista em RPA",
  "description": "Desenvolvedor Front-end e especialista em RPA, criando interfaces intuitivas e automatizando processos complexos.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Goianésia do Pará",
    "addressRegion": "PA",
    "addressCountry": "BR"
  }
}
```

Também vale adicionar:

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "4llves.dev",
  "url": "https://4llves.dev"
}
```

Se existir GitHub, LinkedIn, X, Instagram, YouTube ou outras redes oficiais, incluir em `sameAs`.

---

## 9. O que o agente da v3 deve preservar do site atual

- nome `Alves Jhonata` em destaque na home
- associação clara entre marca e pessoa: `4llves.dev` + `Alves Jhonata`
- palavras-chave reais ligadas à profissão
- conteúdo textual explicando especialidade
- páginas separadas para Sobre, Projetos e Talks
- navegação interna rastreável

Esses são os sinais que hoje ajudam o site a fazer sentido para mecanismos de busca.

---

## 10. Melhorias que a v3 deve adicionar

- `lang="pt-BR"` correto
- canonical por página
- Open Graph completo
- Twitter Cards
- `robots.txt`
- `sitemap.xml`
- JSON-LD
- títulos e descrições por rota
- pré-render/SSG/SSR para páginas públicas
- imagem social dedicada para preview
- páginas com conteúdo mais denso e específico

---

## 11. Checklist final para o agente implementar na v3

- usar estratégia de `SSR`, `SSG` ou `prerender`
- configurar gerenciamento de `<head>` por rota
- definir `title` e `description` únicos por página
- adicionar `canonical` em todas as páginas indexáveis
- adicionar `Open Graph` e `Twitter Card`
- usar `<html lang="pt-BR">`
- gerar `robots.txt`
- gerar `sitemap.xml`
- inserir `JSON-LD` de `Person` e `WebSite`
- manter semântica com `h1`, `main`, `section`, `nav`
- otimizar imagens e performance
- validar indexabilidade final em produção

---

## 12. Prompt pronto para passar ao agente da v3

Use este prompt:

> Estou migrando meu portfólio para uma v3 em Vite. Quero que o novo site preserve e melhore o SEO do site atual. Implemente SEO técnico e semântico completo para um portfólio pessoal de Alves Jhonata / 4llves.dev, com foco em buscas por nome, marca, desenvolvedor front-end e RPA. O site precisa ter páginas públicas indexáveis com prerender, SSG ou SSR, e não depender apenas de SPA client-side para renderizar o conteúdo principal. Configure metadados globais e por página, canonical, Open Graph, Twitter Cards, `lang="pt-BR"`, `robots.txt`, `sitemap.xml`, JSON-LD de `Person` e `WebSite`, semântica correta de headings, imagens com `alt`, boa performance e estrutura preparada para indexação. Preserve o posicionamento textual do site atual: Alves Jhonata, desenvolvedor Front-end, RPA, React, Next.js, Tailwind CSS, Python, automação de processos e criação de soluções através da tecnologia.

---

## 13. Resumo executivo

O site atual já acerta no mais importante para SEO básico:

- nome claro
- profissão clara
- descrição coerente
- conteúdo textual real

Mas a v3 pode ficar muito mais forte se implementar:

- pré-render ou SSR
- SEO por rota
- arquivos técnicos de indexação
- dados estruturados
- metadados sociais completos

Se isso for feito, a v3 tende a ficar **igual ou melhor** que o site atual em mecanismos de busca.
