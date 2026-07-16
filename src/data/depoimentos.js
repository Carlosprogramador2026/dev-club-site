// Depoimentos reais de alunos da dev club.
export const DEPOIMENTOS = [
  {
    slug: "aristoteles-aguiar",
    nome: "Aristoteles Aguiar",
    antes: "Assistente de Tecnologia",
    texto:
      "Hoje sou um dos responsáveis pelo chatbot da Unimed Ceará, integrado com a OpenAI. Consegui a vaga num processo interno concorrido, colocando em prática tudo que aprendi na dev club — com mentoria de perto e suporte de verdade durante o caminho.",
    data: "Primeiro emprego como programador em junho de 2023",
    foto: "/aristoteles-aguiar.png",
    videoId: null,
    videoSrc: "/video-depoimento-aristoteles.mp4",
  },
  {
    slug: "raphael-oliveira",
    nome: "Raphael Bonadia de Oliveira",
    antes: "Vendedor",
    texto:
      "Depois de mais de 20 anos como vendedor, decidi recomeçar do zero. Peguei um primeiro trabalho freelance, foi bem, e veio o tão esperado \"sim\". Mais que um curso, foi a virada de chave da minha vida.",
    data: "Primeiro emprego como programador em maio de 2023",
    foto: "/raphael-bonadia.png",
    videoId: "Hp7u0gJzkfY",
  },
  {
    slug: "vanessa-quintilhano",
    nome: "Vanessa Lebrão Quintilhano",
    antes: "Veterinária",
    texto:
      "Vim da veterinária. Me candidatei direto com o recrutador de uma vaga, e a dev club me ajudou a montar currículo, LinkedIn e me preparar de verdade pra entrevista — fiz cerca de 10 entrevistas naquele mês até conseguir o \"sim\".",
    data: "Primeiro emprego como programadora",
    foto: "/vanessa-lebrao.png",
    videoId: null,
    videoSrc: "/video-depoimento-vanessa.mp4",
  },
]

export function getDepoimentoBySlug(slug) {
  return DEPOIMENTOS.find((d) => d.slug === slug)
}
