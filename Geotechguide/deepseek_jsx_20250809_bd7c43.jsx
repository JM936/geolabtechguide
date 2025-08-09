// src/app/ensaios/solo/analise-granulometrica/page.js
import ProcedurePage from '@/components/ProcedurePage';

const procedureData = {
  title: "Análise Granulométrica de Solos",
  category: "Solo",
  icon: "sieve",
  objective: "Determinar a distribuição granulométrica de um solo através de peneiramento e sedimentação.",
  norms: ["NBR 7181:2018", "ASTM D422-63", "DNIT 179/2019-ME"],
  materials: [
    "Conjunto de peneiras (0,075mm a 75mm)",
    "Balança com precisão de 0,01g",
    "Estufa com controle de temperatura (105-110°C)",
    "Agitador mecânico de peneiras",
    "Proveta de 1000mL",
    "Dispersor químico (hexametafosfato de sódio)",
    "Termômetro de precisão"
  ],
  safety: [
    "Utilizar óculos de proteção durante o peneiramento",
    "Usar máscara contra poeira ao manusear solos secos",
    "Luvas de proteção para manipulação de produtos químicos",
    "Ventilação adequada na área de secagem"
  ],
  steps: [
    {
      step: 1,
      title: "Preparação da amostra",
      description: "Secar o solo em estufa a 105°C até massa constante. Homogeneizar e quartejar para obter amostra representativa de aproximadamente 500g."
    },
    {
      step: 2,
      title: "Peneiramento grosso",
      description: "Realizar peneiramento em conjunto de peneiras com aberturas decrescentes. Agitar por 10 minutos em agitador mecânico."
    },
    {
      step: 3,
      title: "Lavagem da fração fina",
      description: "Para material passante na peneira #200 (0,075mm), realizar lavagem com água e dispersor químico."
    },
    {
      step: 4,
      title: "Sedimentação",
      description: "Suspender o material em proveta com água destilada. Realizar leituras de densidade com hidrômetro em tempos específicos."
    },
    {
      step: 5,
      title: "Cálculos",
      description: "Calcular porcentagens retidas e acumuladas. Construir curva granulométrica."
    }
  ],
  example: {
    data: [
      { peneira: "2,0 mm", retido: 12.5, acumulado: 12.5 },
      { peneira: "0,42 mm", retido: 28.3, acumulado: 40.8 },
      { peneira: "0,075 mm", retido: 35.2, acumulado: 76.0 },
      { peneira: "Sedimentação", retido: 24.0, acumulado: 100.0 }
    ],
    calculation: `Porcentagem passante na peneira 0,42mm = 100% - 40,8% = 59,2%`
  },
  interpretation: `A curva granulométrica permite classificar o solo segundo o sistema de classificação HRB ou USCS. Solos bem graduados apresentam curva suave e contínua.`,
  problems: [
    {
      problem: "Aglomerados de partículas",
      solution: "Utilizar dispersor químico adequado e tempo de agitação suficiente"
    },
    {
      problem: "Erros nas leituras de hidrômetro",
      solution: "Calibrar hidrômetro regularmente e manter temperatura constante"
    }
  ],
  references: [
    "ABNT NBR 7181: Solo - Análise granulométrica",
    "DNIT 179/2019-ME - Solos - Análise granulométrica",
    "Manual de Laboratório de Solos - USP"
  ]
};

export default function Page() {
  return <ProcedurePage data={procedureData} />;
}