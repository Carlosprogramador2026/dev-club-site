export const CURSOS = [
  {
    slug: "html-css",
    tag: "Fundamentos",
    title: "HTML & CSS",
    desc: "Estrutura e estilo de páginas modernas, responsivas e prontas pra produção.",
    intro:
      "HTML e CSS são a base de tudo que aparece na tela em qualquer site ou aplicação web. O HTML organiza o conteúdo em estrutura (títulos, textos, imagens, formulários) e o CSS define como essa estrutura aparece visualmente — cores, espaçamento, layout e responsividade.",
    topicos: [
      "Estrutura semântica de páginas (tags, hierarquia, acessibilidade básica)",
      "Modelo de caixas, posicionamento e unidades de medida",
      "Flexbox e Grid para layouts modernos",
      "Responsividade com media queries — telas de celular a desktop",
      "Boas práticas de organização de CSS em projetos reais",
    ],
    temVideo: true,
    videoId: "C03GzXuzWCA",
  },
  {
    slug: "javascript",
    tag: "Lógica",
    title: "JavaScript",
    desc: "Da lógica de programação ao JS moderno: DOM, APIs, assincronismo.",
    intro:
      "JavaScript é a linguagem que dá comportamento e interatividade às páginas web. Aqui a trilha sai da lógica de programação pura e vai até o JavaScript moderno usado no mercado: manipulação de DOM, consumo de APIs e código assíncrono.",
    topicos: [
      "Lógica de programação: variáveis, condicionais, laços, funções",
      "Manipulação do DOM e eventos",
      "Assincronismo: callbacks, Promises e async/await",
      "Consumo de APIs REST",
      "JavaScript moderno (ES6+): arrow functions, destructuring, módulos",
    ],
    temVideo: true,
    videoId: "UVLT52VcRkY",
  },
  {
    slug: "react",
    tag: "Framework",
    title: "React",
    desc: "Componentes, hooks e arquitetura de aplicações reais usadas no mercado.",
    intro:
      "React é a biblioteca mais usada no mercado pra construir interfaces web modernas. A trilha cobre desde os fundamentos de componentes até a arquitetura de aplicações reais, do jeito que são construídas em produção.",
    topicos: [
      "Componentes, props e composição de interface",
      "Hooks essenciais: useState, useEffect e derivados",
      "Gerenciamento de estado e comunicação entre componentes",
      "Roteamento de páginas em aplicações React",
      "Boas práticas de arquitetura e organização de projeto",
    ],
    temVideo: true,
    videoId: "hHcaVgoLLQM",
  },
  {
    slug: "sistemas-web",
    tag: "Prática",
    title: "Sistemas web",
    desc: "Projetos completos de ponta a ponta pra montar portfólio de verdade.",
    intro:
      "Essa trilha é 100% prática: em vez de exercícios isolados, você constrói sistemas web completos de ponta a ponta, juntando tudo que foi aprendido nos outros cursos pra sair com um portfólio real.",
    topicos: [
      "Planejamento de um sistema web do zero",
      "Integração de front-end com back-end e banco de dados",
      "Autenticação e áreas restritas",
      "Deploy de um projeto real",
      "Organização de portfólio pra buscar vaga",
    ],
    temVideo: true,
    videoId: "PiSgMhtPH_Y",
  },
  {
    slug: "node-backend",
    tag: "Back-end",
    title: "Node.js & Back-end",
    desc: "APIs, bancos de dados e arquitetura de back-end usadas em produção.",
    intro:
      "Essa trilha cobre o back-end do jeito que é feito no mercado: construção de APIs com Node.js e NestJS, bancos de dados relacionais e não relacionais, e a estrutura por trás de qualquer aplicação que precisa guardar e servir dados de verdade.",
    topicos: [
      "Node.js e fundamentos de back-end",
      "Construção de APIs REST com Express e NestJS",
      "Bancos de dados relacionais e não relacionais",
      "Autenticação, filas e boas práticas de arquitetura",
      "Testes automatizados e organização de projeto",
    ],
    temVideo: false,
  },
  {
    slug: "cloud-devops",
    tag: "Cloud",
    title: "Cloud & DevOps",
    desc: "Deploy, infraestrutura e monitoramento na nuvem com AWS e Docker.",
    intro:
      "Aqui você aprende a tirar uma aplicação do seu computador e colocar no ar de verdade: infraestrutura na AWS, containers com Docker e monitoramento — a parte que separa um projeto de portfólio de um sistema em produção.",
    topicos: [
      "Fundamentos de cloud e principais serviços da AWS",
      "Containers e Docker na prática",
      "Deploy e infraestrutura de aplicações web",
      "Monitoramento com Kibana e Grafana",
      "Boas práticas de segurança e escalabilidade",
    ],
    temVideo: false,
  },
  {
    slug: "mobile",
    tag: "Mobile",
    title: "Mobile com React Native",
    desc: "Aplicativos para Android e iOS reaproveitando sua base de React.",
    intro:
      "Com a base de React já construída nas outras trilhas, essa formação mostra como usar React Native pra criar aplicativos mobile de verdade, publicáveis nas lojas de Android e iOS.",
    topicos: [
      "Fundamentos do React Native",
      "Navegação e componentes nativos",
      "Consumo de APIs em apps mobile",
      "Publicação nas lojas Android e iOS",
      "Boas práticas de performance mobile",
    ],
    temVideo: false,
  },
  {
    slug: "ia-automacao",
    tag: "IA",
    title: "IA & Automação",
    desc: "Agentes de IA, automações e integrações aplicadas ao dia a dia de dev.",
    intro:
      "Essa trilha mostra como usar inteligência artificial na prática: da criação de agentes de IA a automações com n8n, integrando sistemas e ferramentas de IA pra resolver problemas reais de produtividade e atendimento.",
    topicos: [
      "Fundamentos de agentes de IA aplicados",
      "Automação de fluxos com n8n",
      "Integração de APIs de IA em aplicações web",
      "Uso de IA pra produtividade e atendimento",
      "Boas práticas e limites do uso de IA em produção",
    ],
    temVideo: false,
  },
]

export function getCursoBySlug(slug) {
  return CURSOS.find((curso) => curso.slug === slug)
}

// Perfil de aluno da dev club (base: entrevista de instalação do MazyOS).
export const PUBLICO_ALVO = [
  {
    titulo: "Quem tá começando do zero",
    desc: "Nunca programou e quer uma trilha guiada, sem precisar adivinhar por onde entrar.",
  },
  {
    titulo: "Quem quer trocar de carreira pra tech",
    desc: "Já trabalha em outra área e busca um caminho prático pra migrar pra programação.",
  },
  {
    titulo: "Quem busca a primeira vaga como dev júnior",
    desc: "Já tem alguma base e quer fechar as lacunas pra conseguir a primeira oportunidade.",
  },
]

export const FAQ_CURSO = [
  {
    pergunta: "Por quanto tempo tenho acesso ao conteúdo?",
    resposta:
      "Você tem acesso por 12 meses completos a todo o conteúdo da formação, incluindo atualizações e novos módulos liberados nesse período.",
  },
  {
    pergunta: "Preciso ter experiência prévia pra fazer esse curso?",
    resposta:
      "Não! A dev club foi criada pra iniciantes. Começamos do zero absoluto e avançamos aos poucos, sempre com didática clara e prática.",
  },
  {
    pergunta: "Qual o sistema de pagamento utilizado? É seguro?",
    resposta:
      "Usamos a Hotmart, uma das maiores plataformas de produtos digitais do Brasil. É 100% seguro, e você paga via cartão de crédito, boleto, PIX ou PayPal.",
  },
  {
    pergunta: "Como funciona a garantia?",
    resposta:
      "Você tem 7 dias de garantia incondicional. Se por qualquer motivo não gostar do curso, basta pedir o reembolso que devolvemos 100% do valor.",
  },
  {
    pergunta: "Como eu assisto às aulas?",
    resposta:
      "As aulas ficam disponíveis na nossa área de membros, acessível de qualquer dispositivo com internet. Assista quando e onde quiser.",
  },
]
