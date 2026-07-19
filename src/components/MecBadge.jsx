export default function MecBadge() {
  return (
    <div className="mec-badge-row">
      <div className="mec-formacao-logo">
        <svg viewBox="0 0 24 24" className="mec-formacao-icone" aria-hidden="true">
          <path
            d="M12 2 L22 9 L12 16 L2 9 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M6 12 L12 17 L18 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
        <div>
          <strong>Formação MBA em I.A.</strong>
          <span>DevClub &amp; Faculdade Sirius</span>
        </div>
      </div>

      <svg viewBox="0 0 200 200" className="mec-seal" role="img" aria-label="Avaliado por instituição recomendada pelo MEC">
        <defs>
          <linearGradient id="mecGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f7e08a" />
            <stop offset="45%" stopColor="#d9a441" />
            <stop offset="100%" stopColor="#a9701b" />
          </linearGradient>
          <path id="mecTextPath" d="M 100,100 m -76,0 a 76,76 0 1,1 152,0 a 76,76 0 1,1 -152,0" />
        </defs>
        <circle cx="100" cy="100" r="96" fill="url(#mecGold)" />
        <circle cx="100" cy="100" r="80" fill="#171310" />
        <text fontSize="9.5" fill="#f2d27a" letterSpacing="2" fontWeight="700">
          <textPath href="#mecTextPath" startOffset="1%">
            AVALIADO POR INSTITUIÇÃO RECOMENDADA PELO
          </textPath>
        </text>
        <text x="100" y="88" textAnchor="middle" fontSize="13" letterSpacing="3" fill="#f2d27a">
          ★ ★ ★ ★ ★
        </text>
        <text
          x="100"
          y="128"
          textAnchor="middle"
          fontSize="30"
          fontWeight="800"
          fill="#f2d27a"
        >
          MEC
        </text>
      </svg>
    </div>
  )
}
