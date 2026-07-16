# Documentação de desenvolvimento — Site dev club

> Registro do que foi construído, decisão por decisão. Serve como referência
> pra explicar o projeto (inclusive em entrevista) e como checklist do que
> ainda falta antes de considerar o site pronto.

---

## 1. Objetivo do projeto

Site institucional da **dev club**, uma operação freelancer de tecnologia
que ensina HTML, CSS, JavaScript e React, com foco em formar devs júnior
até a primeira vaga de emprego. Público-alvo do site: alunos e visitantes
avaliando os cursos.

## 2. Stack técnica

- **React 19** + **Vite** — SPA leve, com HMR rápido em desenvolvimento
- **React Router (react-router-dom)** — rotas client-side pra páginas de
  curso e de depoimento individuais, sem recarregar a página
- **CSS puro** (sem framework) — variáveis CSS centralizadas em
  `src/index.css`, com paleta de marca própria
- **Canvas 2D nativo** (sem biblioteca de animação) — usado pro efeito de
  partículas do hero, por controle total de performance e comportamento

Estrutura de pastas relevante:
```
src/
  components/   → peças reutilizáveis (Navbar, Hero, Cursos, cards, etc.)
  pages/        → telas roteadas (Home, CursoPage, DepoimentoPage)
  data/         → conteúdo em JS puro (cursos, depoimentos, diferenciais, FAQ)
public/
  hero-photo.jpg, favicon.svg, icons.svg
```

## 3. Histórico de desenvolvimento

### 3.1 Setup inicial
- Projeto criado dentro do MazyOS (sistema de organização do negócio da
  dev club), na pasta `projetos/dev club/`, com `CLAUDE.md` e
  `briefing.md` próprios
- Scaffold do zero com `npm create vite@latest -- --template react`

### 3.2 Estrutura e identidade visual
- Construção da home em seções: Navbar, Hero, Cursos, Diferenciais,
  Depoimentos, CTA, Footer — cada uma como componente próprio
- Paleta de marca definida a partir da logo real da dev club (fundo preto,
  roxo `#8b2fce` e verde-oliva `#9cae1e`), documentada em
  `MazyOS/identidade/design-guide.md` pra qualquer outra peça (posts,
  propostas) seguir o mesmo padrão
- Cards de curso e depoimento com hover: elevação + escala, borda em
  gradiente arco-íris animada só no hover, cursor pointer

### 3.3 Efeito de partículas "DC" no hero
Esse foi o elemento mais trabalhado — várias iterações até chegar no
resultado final:

1. Primeira versão: partículas subindo e convergindo num ponto (efeito de
   "feixe de luz"), sem formar letra nenhuma
2. Partículas passaram a ter como alvo pontos amostrados da silhueta das
   letras "DC" (iniciais da dev club), renderizadas numa vez fora da tela
   pra extrair as posições
3. Testada uma versão com texto sólido (canvas `fillText` com glow) por
   trás das partículas pra garantir legibilidade — depois **removida**,
   porque a pedido ficou definido que a legibilidade deveria vir só das
   próprias partículas, não de um texto sólido escondido atrás
4. Densidade de partículas aumentada progressivamente (320 → 1300 → 2600)
   pra a letra ficar nítida só com pontos
5. Adicionado um fluxo contínuo de partículas "chegando" (um pequeno grupo
   relança de fora da tela e viaja até o lugar certo, com rastro), pra dar
   sensação de formação constante sem nunca desmontar a letra
6. Interação com o mouse: testada repulsão por partícula (abria buraco na
   letra — descartado) e substituída por **inclinação rígida do conjunto
   inteiro** (a letra tilta como um bloco só, seguindo a posição do mouse,
   sem nunca perder a forma)
7. Clique do mouse cicla entre 5 paletas de cor diferentes pras partículas
   (a cada clique, cor nova)
8. Ajuste de posição/tamanho: letras subiram pro topo do hero e o hero
   ganhou `padding-top` reservado (`max(260px, 34vh)`) pra garantir que
   nenhum texto (tag "Formação em tecnologia", título) fique sobreposto
   ao efeito — título também reduzido de tamanho pra dar mais respiro

### 3.4 Páginas de curso (`/cursos/:slug`)
- Uma rota por curso (`html-css`, `javascript`, `react`, `sistemas-web`),
  dados centralizados em `src/data/cursos.js`
- Cada página tem: introdução, vídeo de apresentação (embed do YouTube),
  módulos em cards numerados, seção "pra quem é essa trilha" (perfil real
  de aluno: iniciante, troca de carreira, primeira vaga), instrutor e FAQ
  em accordion
- Vídeos reais já embutidos nos 4 cursos (YouTube)

### 3.5 Páginas de depoimento (`/depoimentos/:slug`)
- Mesma lógica das páginas de curso: uma rota por depoimento, dados em
  `src/data/depoimentos.js`
- Ainda com **conteúdo de exemplo** (texto e vídeo placeholder), esperando
  depoimentos reais de alunos

### 3.6 Limites éticos/legais respeitados
Durante o processo, foram analisadas páginas de concorrentes (Asimov
Academy, Adapta.org) só pra entender **padrões estruturais genéricos**
(que tipo de seção uma página de curso costuma ter). Não foi copiado
texto, preço, curso ou design específico de nenhuma delas — só técnica de
interface (dropdown de menu, cards, FAQ accordion) aplicada com conteúdo
real da dev club.

### 3.7 Foto no hero
- Testada uma foto de fundo (`hero-photo.jpg`) com 50% de opacidade,
  depois reposicionada como card lateral (formato 3:4, borda com brilho)
- **Removida por enquanto** a pedido — o hero voltou a layout centralizado
  sem foto. O CSS do card lateral continua no projeto, pronto pra religar
  quando decidirem voltar com uma foto adequada

### 3.8 Mais interatividade (JS/CSS)
A pedido pra deixar o site com mais "opções de trabalho e manuseio" —
depois de esclarecido que o pedido era por mais funcionalidades/interações
no site atual, não arquivos separados:

- **Scroll reveal** (`src/components/Reveal.jsx`) — componente reutilizável
  que usa `IntersectionObserver` pra revelar cada card (cursos,
  diferenciais, depoimentos) com fade-in + slide-up conforme a seção entra
  na tela, com atraso escalonado entre os itens de uma mesma grade
- **Contador animado** (`src/components/Counter.jsx`) — os números do hero
  (10 profissionais, 4 tecnologias, 100% de foco) contam de 0 até o valor
  final quando entram na viewport, com easing suave
- **Botão "voltar ao topo"** (`src/components/BackToTop.jsx`) — aparece
  depois de rolar mais de 600px, some quando volta pro topo
- **Destaque de menu ativo** (`Navbar.jsx`) — o item "Cursos" ou
  "Depoimentos" no menu acende conforme a seção correspondente está visível
  na tela, usando `IntersectionObserver` nos elementos da Home

### 3.9 Evolução do efeito de partículas (rodada 2)
Depois de comparado com o efeito da Asimov Academy (só como referência de
técnica — nunca copiando conteúdo deles), o efeito "DC" passou por mais
ajustes:

- Densidade aumentada bem mais (até 5000 partículas) e uma camada extra de
  "poeira" ambiente espalhada por todo o hero, pra dar profundidade
- Interação por clique: cada clique cicla entre 5 cores sólidas únicas
  (roxo, azul, amarelo, vermelho, verde) — sem misturar cores entre si
- Interação com o mouse trocada de "repulsão por partícula" (que abria
  buraco na letra) pra **inclinação rígida do conjunto inteiro**, e depois
  pra um efeito de **fagulhas saindo da letra** quando o cursor passa perto
  — sem nunca desmontar a formação
- Tentativa de formar a logo real da dev club a partir de uma imagem
  (`public/logo.png`), amostrando pixels por diferença de cor do fundo —
  funcionou tecnicamente, mas a detecção não ficou confiável o bastante
  (arquivo mudava de formato entre tentativas, resultado inconsistente)
- **Decisão final**: voltou pra texto simples, agora só com a letra **"D"**
  (não mais "DC"), maior e mais centralizada verticalmente
- Adicionado um fundo escurecido com leve desfoque atrás do bloco de texto
  do hero (`.hero-copy::before`), pra manter legibilidade mesmo com a letra
  maior e mais próxima do texto — mesmo recurso visual usado pela Asimov

### 3.10 Mais seções na home
Comparado o número de seções da home da Asimov (12, incluindo nav e
footer) com a da dev club (7 na época). Adicionadas 4 seções novas:

- **Sobre** (`Sobre.jsx`) — com conteúdo real, já pronta pra publicar
- **Equipe** (`Equipe.jsx` + `data/equipe.js`) — 4 cards de exemplo
  aguardando nomes/cargos reais dos profissionais
- **FAQ geral** (`FaqGeral.jsx` + `data/faqGeral.js`) — reaproveita o
  componente `FaqAccordion` já existente, com 6 perguntas sugeridas e
  respostas `[a preencher]`
- **Rodapé expandido** (`Footer.jsx`) — de uma linha simples pra 4 colunas
  (marca, cursos, navegação, contato — este último ainda placeholder)

O link "Sobre" do menu, que existia desde o início mas apontava pra uma
seção inexistente, agora funciona de verdade.

---

## 4. Pendências antes de considerar o site pronto

Itens marcados como **exemplo/placeholder** no código, esperando conteúdo
real:

| Onde | O que falta | Arquivo |
|---|---|---|
| Seção "Por que escolher a dev club" | 3 diferenciais reais | `src/data/diferenciais.js` |
| FAQ de cada curso | Respostas reais das 6 perguntas | `src/data/cursos.js` |
| Instrutor de cada curso | Nome, foto, bio | `src/pages/CursoPage.jsx` |
| Depoimentos de alunos | Texto real + vídeo (roteiro já escrito em `projetos/dev club/depoimentos/roteiro-depoimento-react.md`) | `src/data/depoimentos.js` |
| Foto no hero | Decidir se volta, com qual foto | `src/components/Hero.jsx` |
| Seção "Equipe" | Nome e cargo real de ao menos alguns dos 10 profissionais | `src/data/equipe.js` |
| FAQ geral da empresa | Respostas reais das 6 perguntas | `src/data/faqGeral.js` |
| Rodapé — contato | E-mail, WhatsApp, Instagram reais | `src/components/Footer.jsx` |

## 5. Como rodar o projeto

```bash
npm install
npm run dev      # desenvolvimento, http://localhost:5183 (ou porta livre)
npm run build    # gera build de produção em dist/
```
