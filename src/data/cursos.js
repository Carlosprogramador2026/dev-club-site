import { asset } from "../utils/asset"

const RODOLFO = {
  nome: "Rodolfo Mori",
  cargo: "Fundador e professor da dev club",
  foto: asset("rodolfo.jpg"),
}

const MATEUS = {
  nome: "Mateus Nogueira",
  cargo: "Professor de I.A.",
  foto: asset("mateus-nogueira.png"),
}

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
    instrutor: {
      ...RODOLFO,
      bio: "Fundador e professor da dev club, também assina essa trilha de fundamentos — a mesma base de front-end que aplica no dia a dia construindo interfaces com React, Angular e Svelte.",
    },
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
    instrutor: {
      ...RODOLFO,
      bio: "Conduz essa trilha de lógica e JavaScript moderno aplicando a mesma linguagem que usa em produção, tanto no front-end quanto no back-end com Node.js.",
    },
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
    instrutor: {
      ...RODOLFO,
      bio: "React é uma das tecnologias que usa no dia a dia em projetos reais, ao lado de Angular, Svelte e TypeScript — e é quem assina essa trilha.",
    },
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
    instrutor: {
      ...RODOLFO,
      bio: "Orienta essa trilha prática, guiando a construção de sistemas completos de ponta a ponta com a mesma stack full stack que usa em produção.",
    },
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
    temVideo: true,
    videoId: "4l4hoRlukVo",
    instrutor: {
      ...RODOLFO,
      bio: "Professor dessa trilha de back-end, com experiência real em Node.js, NestJS e bancos de dados relacionais e não relacionais.",
    },
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
    temVideo: true,
    videoId: "-hfvH1qGJas",
    instrutor: {
      ...RODOLFO,
      bio: "Conduz essa trilha de cloud com experiência prática em AWS (API Gateway, Lambda, S3, entre outros) e monitoramento com Kibana e Grafana.",
    },
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
    temVideo: true,
    videoId: "a8YvzTXft9c",
    instrutor: {
      ...RODOLFO,
      bio: "Orienta essa trilha de mobile aplicando a mesma base de React que usa no dia a dia pra construir interfaces, agora no ambiente mobile com React Native.",
    },
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
    temVideo: true,
    videoId: "mLyfq1G3ZRI",
    instrutor: {
      ...MATEUS,
      bio: "Especialista em como agentes de inteligência artificial são projetados e usados na prática — é quem assina essa trilha.",
    },
  },
]

export function getCursoBySlug(slug) {
  return CURSOS.find((curso) => curso.slug === slug)
}

export const INVESTIMENTO_CURSO = {
  titulo: "Formação DevClub Full Stack",
  beneficios: [
    "Do zero à carreira de programador bem remunerado",
    "Formação completa com todas as linguagens de programação",
    "Suporte humano 7 dias por semana",
    "Preparação para o mercado de trabalho",
    "Projeto bônus de R$ 1.000 em 7 dias",
    "Comunidade DevClub",
    "Indicação para o mercado de trabalho",
    "1 ano de acesso ilimitado à formação",
  ],
  parcelas: "12x de R$ 199",
  avista: "ou R$ 1.997,00 à vista",
  garantia:
    "7 dias de garantia incondicional — se não gostar, devolvemos 100% do valor, sem burocracia.",
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
