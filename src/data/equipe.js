import { asset } from "../utils/asset"

export const FUNDADOR = {
  nome: "Rodolfo Mori",
  cargo: "Fundador e CEO da dev club",
  foto: asset("rodolfo.jpg"),
  bio: [
    "Rodolfo Mori é desenvolvedor de software, empreendedor e fundador da dev club, uma escola especializada na formação de desenvolvedores pro mercado de tecnologia. Com experiência em desenvolvimento de software e educação tecnológica, dedica a carreira a ensinar programação de forma prática, acessível e alinhada com o que as empresas precisam.",
    "A metodologia da dev club prioriza projetos reais, construção de portfólio, resolução de problemas e preparação pra processos seletivos — aproximando o aprendizado da rotina de um desenvolvedor profissional.",
    "Hoje a dev club mantém uma comunidade ativa de estudantes e profissionais que trocam conhecimento, experiência e oportunidades de crescimento.",
  ],
}

// A dev club tem mais de 100 profissionais no total, entre diretos e
// indiretos. Cards abaixo mostram os principais/mais visíveis.
export const EQUIPE = [
  {
    nome: "Rodolfo Mori",
    cargo: "Desenvolvedor Full Stack e professor",
    foto: asset("rodolfo.jpg"),
    bio: "Palestrante de TI e professor de programação. Front-end com React, Angular, Svelte e TypeScript; back-end com Node, NestJS e bancos de dados relacionais e não relacionais; experiência com AWS (API Gateway, Lambda, S3, entre outros) e dashboards em Kibana e Grafana.",
  },
  {
    nome: "Fernanda Costa",
    cargo: "Mentora de Carreira e Psicóloga",
    foto: asset("fernanda-costa.png"),
    bio: "Mentora de carreira, orientadora profissional, professora e estudante de Psicologia. Depois de 10 anos numa multinacional, decidiu empreender orientando profissionais em suas carreiras — já acompanhou mais de 700 pessoas, atuando também como treinadora corporativa, palestrante e analista comportamental. Foi comissária de voo por mais de 10 anos, experiência que reforçou sua visão sobre comportamento humano, atendimento e liderança sob pressão. Hoje ajuda alunos da dev club em momentos de transição de carreira.",
  },
  {
    nome: "Andrey Maia",
    cargo: "Desenvolvedor Full Stack e Suporte de Produto",
    foto: asset("andrey-maia.jpg"),
    bio: "Desenvolvedor Full Stack e estudante de Engenharia de Software na UNIASSELVI. Atua no time de suporte e produto da dev club, ajudando alunos em transição de carreira, organizando conteúdo e orientando trilhas de estudo. Trabalha com React, Node.js, TypeScript, além de IA e automações com n8n.",
  },
  {
    nome: "Mateus Nogueira",
    cargo: "Professor de I.A.",
    foto: asset("mateus-nogueira.png"),
    bio: "Especialista em inteligência artificial aplicada, com foco em como agentes de IA são projetados e usados na prática — de prompts pontuais a sistemas mais autônomos. Ajuda alunos da dev club a entender e aplicar IA de forma real no dia a dia de desenvolvimento.",
  },
  {
    nome: "Em breve",
    cargo: "Novo integrante da equipe",
    foto: null,
  },
  {
    nome: "Em breve",
    cargo: "Novo integrante da equipe",
    foto: null,
  },
  {
    nome: "Em breve",
    cargo: "Novo integrante da equipe",
    foto: null,
  },
  {
    nome: "Em breve",
    cargo: "Novo integrante da equipe",
    foto: null,
  },
]
