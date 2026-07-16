import Reveal from "./Reveal"

export default function Sobre() {
  return (
    <section id="sobre">
      <div className="container">
        <span className="section-tag">Sobre</span>
        <h2 className="section-title">Quem é a dev club</h2>

        <Reveal>
          <div className="sobre-row">
            <div className="sobre-content">
              <p>
                A dev club é uma escola de programação focada em formar
                desenvolvedores Full Stack — HTML, CSS, JavaScript e React —
                do zero até a primeira vaga de emprego. O aprendizado é
                prático desde os primeiros módulos: você constrói aplicações
                reais, não fica só assistindo aula.
              </p>
              <p>
                Por trás dos cursos tem uma equipe de mais de 100
                profissionais, diretos e indiretos, acompanhando cada etapa
                — não é conteúdo gravado e largado:
                tem mentoria, suporte de verdade durante a jornada, e uma
                comunidade ativa pra trocar conhecimento e fazer network. O
                foco é sempre o mesmo: portfólio real e preparação pra
                entrevista técnica, pra você conseguir a oportunidade em
                tech.
              </p>
            </div>

            <img
              src="/foto-empresa.jpg"
              alt="Equipe da dev club"
              className="sobre-foto"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
