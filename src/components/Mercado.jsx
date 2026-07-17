import Reveal from "./Reveal"
import { LayersIcon, PinIcon, DollarIcon } from "./Icons"
import {
  SALARIOS,
  MERCADO_BENEFICIOS,
  MERCADO_FONTE,
  MERCADO_DISCLAIMER,
} from "../data/mercado"

const ICONES = [LayersIcon, PinIcon, DollarIcon]

export default function Mercado() {
  return (
    <section id="mercado">
      <div className="container">
        <span className="section-tag">Mercado de trabalho</span>
        <h2 className="section-title">
          Essa é a média salarial de um{" "}
          <span className="gradient-text">programador no Brasil</span>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: 40 }}>
          A área de desenvolvimento oferece excelentes oportunidades de
          emprego e salários altos.
        </p>

        <Reveal>
          <div className="mercado-row">
            <div className="mercado-salarios">
              {SALARIOS.map((s) => (
                <div key={s.nivel} className="mercado-salario-item">
                  <span className="mercado-salario-nivel">{s.nivel}</span>
                  <div
                    className={`mercado-salario-barra mercado-salario-barra--${s.intensidade}`}
                  >
                    {s.faixa}
                  </div>
                </div>
              ))}
              <p className="mercado-fonte">
                {MERCADO_FONTE}
                <br />* {MERCADO_DISCLAIMER}
              </p>
            </div>

            <div className="mercado-beneficios">
              {MERCADO_BENEFICIOS.map((b, i) => {
                const Icone = ICONES[i]
                return (
                  <div key={b.titulo} className="mercado-beneficio-item">
                    <span className="mercado-beneficio-icone">
                      <Icone />
                    </span>
                    <div>
                      <strong>{b.titulo}</strong>
                      <p>{b.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
