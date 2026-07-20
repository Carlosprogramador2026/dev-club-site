import { asset } from "../utils/asset"

// Depoimentos de alunos que fecharam freelas pela dev club — aparecem tanto
// na seção geral de depoimentos quanto na vitrine "Resultado real".
const ADRIANO_COUTINHO = {
  slug: "adriano-coutinho",
  nome: "Adriano dos Reis Coutinho",
  antes: "Técnico em Informática",
  texto:
    "Participar da campanha de junho da DevClub foi um grande incentivo para colocar em prática tudo o que vinha aprendendo. Durante esse período, comecei a oferecer soluções como freelancer, desenvolvendo agentes de Inteligência Artificial, sistemas personalizados e sites para empresas. Cada projeto me trouxe mais experiência, confiança e novas oportunidades no mercado. O conhecimento adquirido me mostrou que a programação pode abrir portas para uma carreira promissora e me permitiu transformar aprendizado em resultados concretos. Hoje continuo evoluindo, buscando novos clientes e expandindo minha atuação com soluções de IA para empresas de diversos segmentos.",
  foto: asset("adriano-coutinho.jpeg"),
  videoId: null,
  videoSrc: asset("video-depoimento-adriano.mp4"),
}

const CARLOS_BONITO = {
  slug: "carlos-bonito",
  nome: "Carlos Alberto Sanches Bonito",
  antes: "—",
  texto:
    "Meu nome é Carlos Alberto Sanches Bonito, tenho 37 anos e, durante muitos anos, procurei uma profissão que realmente pudesse transformar a minha vida. Meu maior sonho sempre foi oferecer uma vida melhor para meus filhos e para minha família, com mais segurança, tranquilidade e momentos de lazer que antes pareciam distantes da nossa realidade. Foi na programação que encontrei essa oportunidade. Mesmo enfrentando dificuldades e tendo que estudar diariamente, nunca desisti do meu objetivo. Cada aula concluída, cada projeto desenvolvido e cada desafio superado me aproximavam do sonho de viver da tecnologia. Participar da comunidade da DevClub foi um divisor de águas. Com muito esforço e dedicação, comecei a desenvolver sites profissionais, sistemas personalizados e soluções com Agentes de Inteligência Artificial para empresas. Esses projetos abriram portas para novas oportunidades e me permitiram crescer como freelancer. Ao longo dessa jornada, conquistei resultados que nunca imaginei alcançar, superando a marca de R$ 60 mil em projetos de desenvolvimento. Mais do que o retorno financeiro, ganhei confiança, experiência e a certeza de que investir em conhecimento foi a melhor decisão da minha vida. Hoje continuo evoluindo todos os dias, construindo minha carreira na tecnologia e trabalhando para oferecer um futuro ainda melhor para minha família.",
  foto: asset("carlos-bonito.jpeg"),
  videoId: null,
  videoSrc: asset("video-depoimento-carlos.mp4"),
}

const SYLVANA_RIBEIRO = {
  slug: "sylvana-ribeiro",
  nome: "Sylvana Monteiro Paes Ribeiro",
  antes: "—",
  texto:
    "Nunca pensei que conseguiria aprender programação. Em vários momentos achei que aquilo não era para mim, mas resolvi continuar estudando, um passo de cada vez. Aos poucos fui entendendo como criar páginas, automatizar processos e desenvolver soluções para pequenas empresas. Quando percebi que podia ajudar clientes reais, comecei a trabalhar como freelancer. Hoje desenvolvo sistemas, sites e agentes de Inteligência Artificial para diferentes negócios. Mais do que conquistar novos projetos, encontrei uma profissão que me desafia todos os dias e me faz acreditar que sempre é possível recomeçar e evoluir.",
  foto: asset("sylvana-ribeiro.jpeg"),
  videoId: null,
  videoSrc: asset("video-depoimento-sylvana.mp4"),
}

// Depoimentos reais de alunos da dev club.
export const DEPOIMENTOS = [
  SYLVANA_RIBEIRO,
  ADRIANO_COUTINHO,
  {
    slug: "aristoteles-aguiar",
    nome: "Aristoteles Aguiar",
    antes: "Assistente de Tecnologia",
    texto:
      "Hoje sou um dos responsáveis pelo chatbot da Unimed Ceará, integrado com a OpenAI. Consegui a vaga num processo interno concorrido, colocando em prática tudo que aprendi na dev club — com mentoria de perto e suporte de verdade durante o caminho.",
    historia:
      "Um dos responsáveis pelo desenvolvimento do Chatbot da Unimed Ceará e integrado com a OpenAI.",
    comoConseguiu:
      "Concorri a vaga em um processo interno bem concorrido, porém sai vitorioso graças a Deus e ao que aprendi no Dev Club.",
    comoAjudou:
      "Através de tudo o que vi, aprendi e que coloquei em prática que Rodolfo Mori ensinou, e através da mentoria da Rafa e lógico contando sempre com o apoio de todos dos sócios e do suporte magnífico da DevClub.",
    data: "Primeiro emprego como programador em junho de 2023",
    foto: asset("aristoteles-aguiar.png"),
    videoId: null,
    videoSrc: asset("video-depoimento-aristoteles.mp4"),
  },
  {
    slug: "raphael-oliveira",
    nome: "Raphael Bonadia de Oliveira",
    antes: "Vendedor",
    texto:
      "Depois de mais de 20 anos como vendedor, decidi recomeçar do zero. Peguei um primeiro trabalho freelance, foi bem, e veio o tão esperado \"sim\". Mais que um curso, foi a virada de chave da minha vida.",
    historia:
      "Mais de 20 anos na área comercial, sendo vendedor por telefone (telemarketing). Sempre insatisfeito com a profissão, os ganhos não eram ruins, mas a saúde mental com a cobrança por metas começou a ir embora. Após um vídeo aleatório aparecer no YouTube, o vídeo que mudou tudo, fiz o curso de programação do zero. Depois, comprei o curso em abril do ano passado. Com as primeiras dificuldades, fui covarde e parei. Vi que minha vida continuou piorando e voltei pro curso.",
    comoConseguiu:
      "Em janeiro deste ano, recomecei do zero e não parei mais. Peguei um trabalho freelance, eles gostaram e veio o grande e esperado SIM.",
    comoAjudou: "Em tudo, mais que um curso, foi a verdadeira virada de chave na minha vida.",
    data: "Primeiro emprego como programador em maio de 2023",
    foto: asset("raphael-bonadia.png"),
    videoId: "Hp7u0gJzkfY",
  },
  {
    slug: "vanessa-quintilhano",
    nome: "Vanessa Lebrão Quintilhano",
    antes: "Veterinária",
    texto:
      "Vim da veterinária. Me candidatei direto com o recrutador de uma vaga, e a dev club me ajudou a montar currículo, LinkedIn e me preparar de verdade pra entrevista — fiz cerca de 10 entrevistas naquele mês até conseguir o \"sim\".",
    historia:
      "Vim da veterinária. Me candidatei direto com o recrutador de uma vaga, e a dev club me ajudou a montar currículo, LinkedIn e me preparar de verdade pra entrevista — fiz cerca de 10 entrevistas naquele mês até conseguir o \"sim\".",
    comoConseguiu:
      "Me candidatei a uma vaga na empresa Zallpy Digital, mandei mensagem diretamente ao Tech Recruiter. Meu irmão presta serviço nessa empresa e comentei que tinha me interessado pela vaga, ele me indicou (depois de eu já ter aplicado e falado com o Tech Recruiter). Marcaram um bate-papo e era uma vaga de trainee.",
    comoAjudou:
      "TUDO. O DevClub me ajudou a elaborar um currículo que chamasse atenção dos recrutadores, um LinkedIn que chamasse atenção, como devo me comportar nas entrevistas, como devo abordar os recrutadores, e me ensinou que não existe almoço grátis. Fiz pelo menos umas 10 entrevistas nesse mês e em todas os ensinamentos do DevClub foram essenciais para que eu conseguisse meu primeiro sim.",
    data: "Primeiro emprego como programadora em agosto de 2022",
    foto: asset("vanessa-lebrao.png"),
    videoId: null,
    videoSrc: asset("video-depoimento-vanessa.mp4"),
  },
  {
    slug: "henrique-souza",
    nome: "Henrique Francisco de Souza",
    antes: "Vendedor de Roupas",
    texto:
      "Era vendedor de roupas e gestor de tráfego da mesma loja. Decidi entrar no curso porque quero ter uma profissão que me torne independente.",
    historia:
      "Era vendedor de roupas e gestor de tráfego da mesma loja. Sou de Palmeira D'Oeste e decidi entrar no curso porque quero ter uma profissão que me torne independente.",
    comoConseguiu:
      "Tudo se baseou no primeiro evento presencial do DevClub. Eu estava seguindo o cronograma do curso desde outubro e surgiu a oportunidade de participar do evento presencial, não hesitei e fui para o evento. Quando as palestras acabaram rolou o momento networking em que eu conheci e conversei um pouco mais com o Ronny. Dias depois, quando eu já estava em casa, ele lembrou de mim pelo Instagram e daí em diante me chamou para desenvolver um projeto para ele — esse projeto cresceu e agora estamos trabalhando em uma plataforma.",
    comoAjudou:
      "Foi essencial participar do DevClub, não somente por aprender a programação de fato, mas também pelo networking proporcionado na comunidade e também nos eventos. Esse networking foi o que me ajudou a resolver muitos bugs que encontrei quando estava realizando algum projeto/desafio, e também possibilitou eu conseguir meu primeiro emprego.",
    data: "Primeiro emprego como programador em agosto de 2022",
    foto: asset("henrique-souza.png"),
    videoId: "OcAZxFMEtOA",
  },
  {
    slug: "williane-pinheiro",
    nome: "Williane Delfino Pinheiro",
    antes: "—",
    texto:
      "O DevClub foi imprescindível, primeiro por me apresentar ao mundo da programação, que é gigante e cheio de oportunidades.",
    historia:
      "O DevClub foi imprescindível, primeiro por me apresentar ao mundo da programação, que é gigante e cheio de oportunidades, contanto que nos dediquemos a abraçá-las.",
    comoConseguiu:
      "Minha partner foi fundamental em me apoiar. E a comunidade me dava um gás pra não desistir quando as coisas foram ficando difíceis por causa da faculdade de ADS que faço simultânea.",
    comoAjudou:
      "Eu amo a didática do Rodolfo e o fato de as aulas serem super objetivas, além dos desafios das aulas que nos ajudam a praticar os assuntos que estudamos. E o incentivo do Rodolfo, as coisas que o DevClub aprimora para nos capacitar, isso tudo fez diferença. No meu processo seletivo eles perguntaram sobre o curso que eu faço de programação, aí eu falei sobre o DevClub, sobre a trilha de aprendizagem e as tecnologias que estudamos na plataforma, e isso chamou muita atenção, pelo que é contemplado na formação.",
    data: "Primeiro emprego como programadora em junho de 2022",
    foto: asset("williane-pinheiro.png"),
    videoId: "oXQak3sNq30",
  },
  {
    slug: "bruno-barbosa",
    nome: "Bruno Barbosa",
    antes: "—",
    texto:
      "Vi um anúncio no Instagram, fiz as aulas e comecei a correr atrás da mudança de vida — não está sendo fácil, mas estou feliz por estar mudando minha realidade.",
    historia:
      "Foi uma decisão bem difícil, estava sob uma pressão enorme no trabalho, não era valorizado como profissional e recebia um salário relativamente baixo pra quantidade e intensidade de trabalho que eram exigidos. Vi um anúncio no Instagram, fiz as aulas e comecei a correr atrás da mudança de vida, fui demitido logo assim que comprei o curso — me ajudou a focar somente em estudo. Falta pouco pra conclusão do curso, mas graças a Deus o trabalho eu já consegui. Não está sendo fácil assimilar novos aprendizados, mas estou feliz por estar mudando a minha realidade e o meu futuro.",
    comoConseguiu:
      "Um amigo trabalha nessa empresa, pediu meu currículo, fiz as entrevistas e fui aprovado — esse processo levou em torno de 2 meses.",
    comoAjudou:
      "O módulo com Victor Yasumura foi muito importante pra mim, ele me ajudou a \"virar a chave\" — eu ainda sou o meu pior inimigo, sempre acho que não sou capaz de aprender algo novo, no início fiquei com muito medo, pensei em desistir, mas depois de assistir esse módulo me senti mais confiante. O conteúdo dos outros módulos também é bem didático e bem explicado. Ainda não acabei o curso, mas até a parte que eu estou, ele te deixa com uma base boa pro mercado — cheguei sabendo de muita coisa, não fiquei tão assustado.",
    data: "Primeiro emprego como programador em maio de 2023",
    foto: asset("bruno-barbosa.png"),
    videoId: "kKU8nFsSY8M",
  },
  {
    slug: "annanda-farias",
    nome: "Annanda Farias",
    antes: "—",
    texto:
      "Encontrei o canal do Rodolfo Mori no YouTube e comecei a assistir os vídeos e as lives. Estudava 16 horas por dia.",
    historia:
      "Resolvi começar a aprender programação em janeiro de 2025. Encontrei o canal do Rodolfo Mori no YouTube e comecei a assistir os vídeos e as lives. Estudava 16 horas por dia, até que em abril meu noivo me deu o curso de front-end da dev club, e em setembro comecei no meu primeiro emprego como programadora.",
    comoConseguiu:
      "Na última empresa onde trabalhei, tinha um colega que fazia toda a programação na empresa. Quando comecei a estudar, comentei com ele. Em abril fui demitida e deixei meu portfólio com esse meu colega. Agora em setembro ele entrou em contato comigo pra me fazer a proposta de emprego. Aceitei na hora.",
    comoAjudou:
      "Estudar com o método de ensino do Rodolfo me ajudou muito a entender HTML, CSS e JavaScript, o que me fez começar a amar programação e querer muito trabalhar nessa área.",
    data: "Primeiro emprego como programadora em setembro de 2025",
    foto: asset("annanda-farias.png"),
    videoId: "DqsZ_iy0p6U",
  },
  {
    slug: "lucas-rios",
    nome: "Lucas Rios",
    antes: "—",
    texto:
      "Eu sempre buscava algo que me trouxesse liberdade pessoal e financeira, e meu estudo na programação me mostrava isso dia após dia.",
    historia:
      "Resumidamente, eu sempre buscava algo que me trouxesse liberdade pessoal e financeira, e meu estudo na programação me mostrava isso dia após dia vendo pessoas bem sucedidas na área. Isso me motiva todos os dias a seguir nessa área que tanto amo. Eu pensava, sinceramente, que não iria conseguir, porque sempre fazia cursos fracos, literalmente \"no cru\" — mas depois que conheci a dev club do Rodolfo através de um amigo, mudei meus pensamentos e minha realidade. Ainda não terminei o curso, mas foco e perseverança sempre vencem.",
    comoConseguiu: "Vários \"não\" até chegar no primeiro \"sim\".",
    comoAjudou:
      "Ajudou e muito — se não fosse a dev club eu não teria pegado uma visão real do mercado, e sem dúvidas o conhecimento prático foi essencial e está sendo ainda.",
    data: "Primeiro emprego como programador em fevereiro de 2025",
    foto: asset("lucas-rios.png"),
    videoId: "C4jYx1z7qZQ",
  },
  {
    slug: "thiago-zambrin",
    nome: "Thiago Leopoldo Zambrin Filho",
    antes: "—",
    texto:
      "Comecei na programação aos 16 anos sem saber nada. Aos 5 meses de dev club fiz meu primeiro freela, e aos 7 meses consegui meu primeiro emprego.",
    historia:
      "Comecei na programação aos 16 anos, no começo de 2023, sem saber nada. Aos 5 meses de dev club fiz meu primeiro freela, e aos 7 meses consegui meu primeiro emprego.",
    comoConseguiu:
      "Busquei bastante no LinkedIn, Glassdoor e Programathor, mas consegui um contato aqui em Londrina — analisaram minhas skills e fui contratado.",
    comoAjudou:
      "A dev club me ensinou tudo que eu sei hoje sobre programação, desde o mais básico ao mais avançado. As aulas, o suporte dos staffs e até mesmo da comunidade — tudo isso influenciou muito nessa jornada.",
    data: "Primeiro emprego como programador em agosto de 2023",
    foto: asset("thiago-zambrin.png"),
    videoId: "iva-R6gDvC8",
  },
]

// Depoimentos de alunos que fecharam freelas pela dev club — aguardando mais
// casos reais (nome, foto, quanto faturou, video) pra substituir os
// placeholders "em breve" restantes.
export const FREELA_DEPOIMENTOS = [ADRIANO_COUTINHO, SYLVANA_RIBEIRO, CARLOS_BONITO]

export function getDepoimentoBySlug(slug) {
  return [...DEPOIMENTOS, ...FREELA_DEPOIMENTOS].find((d) => d.slug === slug)
}
