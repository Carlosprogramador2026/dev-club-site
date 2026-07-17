import Reveal from "./Reveal"
import { asset } from "../utils/asset"

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
                Fundada em <strong>2020</strong>, a <strong>DevClub</strong> é
                uma escola de programação que nasceu com a missão de
                democratizar o acesso à tecnologia e preparar profissionais
                para o mercado de desenvolvimento de software. Ao longo dos
                anos, tornou-se uma das principais referências em formação de
                desenvolvedores no Brasil, conectando ensino prático às
                necessidades reais das empresas.
              </p>
              <p>
                Especializada na formação de desenvolvedores{" "}
                <strong>Full Stack</strong>, a DevClub ensina{" "}
                <strong>HTML, CSS, JavaScript, React</strong> e outras
                tecnologias essenciais, levando o aluno do zero até a
                preparação para conquistar sua primeira oportunidade na área.
                Desde os primeiros módulos, o aprendizado é baseado em
                projetos reais, permitindo que cada estudante desenvolva um
                portfólio sólido e adquira experiência prática.
              </p>
              <p>
                Por trás dos cursos existe uma equipe com mais de{" "}
                <strong>100 profissionais</strong>, diretos e indiretos, que
                acompanha a jornada dos alunos por meio de mentorias, suporte
                especializado e uma comunidade ativa para networking, troca
                de conhecimento e desenvolvimento profissional.
              </p>
              <p>
                Mais do que ensinar programação, a DevClub proporciona um
                caminho completo para quem deseja construir uma carreira em
                tecnologia. Sua metodologia prepara os alunos para os
                desafios do mercado, com foco em resolução de problemas,
                entrevistas técnicas e desenvolvimento de competências
                valorizadas pelas empresas.
              </p>
              <p>
                Hoje, a DevClub representa inovação, oportunidade e
                transformação de vidas, formando profissionais qualificados e
                contribuindo para o crescimento do mercado de tecnologia no
                Brasil.
              </p>
            </div>

            <img
              src={asset("foto-empresa.jpg")}
              alt="Equipe da dev club"
              className="sobre-foto"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
