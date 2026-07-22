import { asset } from "../utils/asset"

export const FUNDADOR = {
  nome: "Rodolfo Mori",
  cargo: "Fundador e CEO da Dev Club",
  foto: asset("rodolfo.jpg"),
  bioResumo: [
    "Rodolfo Mori é desenvolvedor de software, empreendedor e fundador da Dev Club, uma escola especializada na formação de desenvolvedores pro mercado de tecnologia. Com experiência em desenvolvimento de software e educação tecnológica, dedica a carreira a ensinar programação de forma prática, acessível e alinhada com o que as empresas precisam.",
    "A metodologia da Dev Club prioriza projetos reais, construção de portfólio, resolução de problemas e preparação pra processos seletivos — aproximando o aprendizado da rotina de um desenvolvedor profissional.",
    "Hoje a Dev Club mantém uma comunidade ativa de estudantes e profissionais que trocam conhecimento, experiência e oportunidades de crescimento.",
  ],
  bio: [
    "Rodolfo Mori nasceu e cresceu na periferia de São Paulo, estudou em escola pública e começou a trabalhar ainda jovem. Antes de entrar pra tecnologia, foi eletricista no Metrô de São Paulo — uma profissão estável, mas distante do futuro que ele queria construir pra si e pra família.",
    "Foi em meio a dificuldades pessoais e financeiras que descobriu a programação. Sem faculdade na área e sem experiência prévia, estudou sozinho durante noites, fins de semana e feriados, encaixando os estudos entre um turno de trabalho e outro.",
    "Foram 13 recusas até a primeira vaga como programador. Em vez de desistir, transformou cada entrevista em aprendizado — e em cerca de seis meses de estudo intenso, conquistou seu primeiro emprego na área, no Santander.",
    "Dali em diante, sua carreira acelerou: passou por instituições como BTG Pactual, PI Investimentos e Toro Investimentos, acumulando experiência real em desenvolvimento de software e arquitetura de sistemas no mercado financeiro.",
    "Ao longo do caminho, percebeu que milhares de pessoas enfrentavam a mesma dificuldade que ele: aprender teoria sem conseguir a prática que o mercado exige. Foi dessa constatação que nasceu a Dev Club, em 2020 — uma escola criada pra unir conteúdo técnico, projetos reais, mentoria e suporte contínuo, com um único objetivo: levar o aluno até o primeiro emprego.",
    "Hoje Rodolfo segue atuando como desenvolvedor Full Stack, empreendedor e educador, e a Dev Club já formou milhares de alunos em todo o Brasil. Pra ele, a tecnologia continua sendo a ferramenta mais poderosa que conhece pra mudar de vida — porque foi exatamente isso que aconteceu com a dele.",
  ],
}

// A Dev Club tem mais de 100 profissionais no total, entre diretos e
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
    bio: "Mentora de carreira, orientadora profissional, professora e estudante de Psicologia. Depois de 10 anos numa multinacional, decidiu empreender orientando profissionais em suas carreiras — já acompanhou mais de 700 pessoas, atuando também como treinadora corporativa, palestrante e analista comportamental. Foi comissária de voo por mais de 10 anos, experiência que reforçou sua visão sobre comportamento humano, atendimento e liderança sob pressão. Hoje ajuda alunos da Dev Club em momentos de transição de carreira.",
  },
  {
    nome: "Andrey Maia",
    cargo: "Desenvolvedor Full Stack e Suporte de Produto",
    foto: asset("andrey-maia.jpg"),
    bio: "Desenvolvedor Full Stack e estudante de Engenharia de Software na UNIASSELVI. Atua no time de suporte e produto da Dev Club, ajudando alunos em transição de carreira, organizando conteúdo e orientando trilhas de estudo. Trabalha com React, Node.js, TypeScript, além de IA e automações com n8n.",
  },
  {
    nome: "Mateus Nogueira",
    cargo: "Professor de I.A.",
    foto: asset("mateus-nogueira.png"),
    bio: "Especialista em inteligência artificial aplicada, com foco em como agentes de IA são projetados e usados na prática — de prompts pontuais a sistemas mais autônomos. Ajuda alunos da Dev Club a entender e aplicar IA de forma real no dia a dia de desenvolvimento.",
  },
  {
    nome: "Gabriel Pimenta",
    cargo: "🚀 Desenvolvedor Full Stack",
    foto: asset("gabriel-pimenta.jpeg"),
    bio: "Desenvolvedor apaixonado por criar interfaces modernas e automações inteligentes que otimizam o dia a dia de pessoas e empresas. Experiência prática com HTML, CSS, TailwindCSS, JavaScript, TypeScript, React, Next.js, Node.js, n8n e Git, aplicando esses conhecimentos em projetos reais com foco em performance, escalabilidade e resultados concretos. Já desenvolveu automações e integrações com n8n que reduziram o tempo de tarefas manuais e aumentaram a eficiência de fluxos de trabalho.",
  },
  {
    nome: "Juliana Nunes",
    cargo: "Recursos Humanos",
    foto: asset("juliana-nunes.jpeg"),
    bio: "Profissional com 15 anos de experiência na área de Recursos Humanos, com atuação generalista e forte expertise em Recrutamento & Seleção, Atração e Retenção de Talentos. Vivência na estruturação e implantação de processos seletivos, condução de entrevistas por competências, alinhamento de perfil com gestores e acompanhamento de indicadores estratégicos de R&S. Também contribui em Treinamento & Desenvolvimento, Avaliação de Desempenho, Pesquisa de Clima e Programas de Carreira, sempre com foco no desenvolvimento de pessoas e fortalecimento da cultura organizacional.",
  },
  {
    nome: "Adriano Coutinho",
    cargo: "Técnico em Informática e Desenvolvedor OutSystems",
    foto: asset("adriano-coutinho.jpeg"),
    bio: "Técnico em Informática com registro ativo (CRT) e uma trajetória sólida desde 2006 que une manutenção de hardware e redes à paixão pelo desenvolvimento de software. Nos últimos 5 anos atua como desenvolvedor web, dominando PHP, HTML e CSS, com experiência prática em frontend e backend. Nos últimos 2 anos, o foco se consolidou no desenvolvimento OutSystems, com projetos autorais entregues — como um sistema SaaS em PHP e um sistema de gestão documental para uma assessoria de imigração em Portugal.",
  },
  {
    nome: "Ronald Andrade",
    cargo: "Em transição de carreira",
    foto: asset("ronald-andrade.jpeg"),
    bio: "Tem 25 anos e está em fase de transição de carreira, vindo da área de informática rumo ao desenvolvimento Web. Está cursando a formação de programadores da Dev Club, onde vem se desenvolvendo em tecnologias como HTML, CSS e JavaScript, em busca de uma oportunidade em desenvolvimento Web ou Programação.",
  },
]
