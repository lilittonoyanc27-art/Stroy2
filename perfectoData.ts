export interface PerfectoChallenge {
  id: string;
  sentence: string;
  translation: string;
  options: { text: string; correct: boolean }[];
  explanation: string;
  marker?: string;
}

export const PERFECTO_DATA: PerfectoChallenge[] = [
  {
    id: "p1",
    sentence: "Hoy (yo) ___ un café muy rico.",
    translation: "Այսօր ես շատ համեղ սուրճ եմ խմել:",
    options: [
      { text: "he bebido", correct: true },
      { text: "has bebido", correct: false },
      { text: "ha bebido", correct: false }
    ],
    explanation: "Yo-ի համար օգտագործում ենք 'he' + հիմնական բայը -ido վերջավորությամբ (beber -> bebido):",
    marker: "Hoy"
  },
  {
    id: "p2",
    sentence: "¿___ (tú) el Museo del Prado?",
    translation: "Դու այցելե՞լ ես Պրադո թանգարանը:",
    options: [
      { text: "He visitado", correct: false },
      { text: "Has visitado", correct: true },
      { text: "Han visitado", correct: false }
    ],
    explanation: "Tú-ի համար օգտագործում ենք 'has' + visitado (-ar բայերը դառնում են -ado):",
  },
  {
    id: "p3",
    sentence: "Esta semana Juan ___ mucho trabajo.",
    translation: "Այս շաբաթ Խուանը շատ աշխատանք է ունեցել:",
    options: [
      { text: "ha tenido", correct: true },
      { text: "hemos tenido", correct: false },
      { text: "has tenido", correct: false }
    ],
    explanation: "Juan (él)-ի համար օգտագործում ենք 'ha' + tenido (tener -> tenido).",
    marker: "Esta semana"
  },
  {
    id: "p4",
    sentence: "Nosotros ya ___ la maleta.",
    translation: "Մենք արդեն հավաքել ենք ճամպրուկը:",
    options: [
      { text: "hemos hecho", correct: true },
      { text: "ha hecho", correct: false },
      { text: "habéis hecho", correct: false }
    ],
    explanation: "'Hacer' բայը անկանոն է՝ 'hecho': Nosotros-ի համար 'hemos hecho':",
    marker: "Ya"
  },
  {
    id: "p5",
    sentence: "¿Todavía no ___ (tú) la puerta?",
    translation: "Դու դեռ չե՞ս բացել դուռը:",
    options: [
      { text: "has abrido", correct: false },
      { text: "has abierto", correct: true },
      { text: "he abierto", correct: false }
    ],
    explanation: "'Abrir' բայը անկանոն է՝ 'abierto': Tú + 'has abierto':",
    marker: "Todavía no"
  },
  {
    id: "p6",
    sentence: "Ellos ___ una película muy buena.",
    translation: "Նրանք մի շատ լավ ֆիլմ են դիտել:",
    options: [
      { text: "han visto", correct: true },
      { text: "han vido", correct: false },
      { text: "hemos visto", correct: false }
    ],
    explanation: "'Ver' բայը անկանոն է՝ 'visto': Ellos + 'han visto':",
  },
  {
    id: "p7",
    sentence: "Vosotros ___ una carta.",
    translation: "Դուք նամակ եք գրել:",
    options: [
      { text: "habéis escrito", correct: true },
      { text: "han escrito", correct: false },
      { text: "habéis escribido", correct: false }
    ],
    explanation: "'Escribir' բայը անկանոն է՝ 'escrito': Vosotros + 'habéis escrito':",
  },
  {
    id: "p8",
    sentence: "¿Alguna vez ___ en España?",
    translation: "Երբևէ եղե՞լ ես Իսպանիայում:",
    options: [
      { text: "has estado", correct: true },
      { text: "ha estado", correct: false },
      { text: "he estado", correct: false }
    ],
    explanation: "Estar -> estado. 'Alguna vez' (երբևէ) հարցնում է փորձի մասին:",
    marker: "Alguna vez"
  },
  {
    id: "p9",
    sentence: "Mi madre me ___ la verdad.",
    translation: "Մայրս ինձ ճշմարտությունն է ասել:",
    options: [
      { text: "ha dicho", correct: true },
      { text: "ha decido", correct: false },
      { text: "has dicho", correct: false }
    ],
    explanation: "'Decir' բայը անկանոն է՝ 'dicho': Madre (ella) + 'ha dicho':",
  },
  {
    id: "p10",
    sentence: "Nosotros ___ de las vacaciones.",
    translation: "Մենք վերադարձել ենք արձակուրդից:",
    options: [
      { text: "hemos vuelto", correct: true },
      { text: "hemos volveido", correct: false },
      { text: "han vuelto", correct: false }
    ],
    explanation: "'Volver' բայը անկանոն է՝ 'vuelto': Nosotros + 'hemos vuelto':",
  },
  {
    id: "p11",
    sentence: "Hoy ___ las llaves.",
    translation: "Այսօր ես կորցրել եմ բանալիները:",
    options: [
      { text: "he perdido", correct: true },
      { text: "ha perdido", correct: false },
      { text: "he perdidó", correct: false }
    ],
    explanation: "Perder -> perdido. Yo-ի համար 'he perdido':",
    marker: "Hoy"
  },
  {
    id: "p12",
    sentence: "María ___ la mesa.",
    translation: "Մարիան գցել է սեղանը:",
    options: [
      { text: "ha puesto", correct: true },
      { text: "ha poniendo", correct: false },
      { text: "ha ponido", correct: false }
    ],
    explanation: "'Poner' բայը անկանոն է՝ 'puesto': María (ella) + 'ha puesto':",
  },
  {
    id: "p13",
    sentence: "¿Quién ___ el cristal?",
    translation: "Ո՞վ է կոտրել ապակին:",
    options: [
      { text: "ha roto", correct: true },
      { text: "ha rompido", correct: false },
      { text: "han roto", correct: false }
    ],
    explanation: "'Romper' բայը անկանոն է՝ 'roto': ¿Quién? (singular) + 'ha roto':",
  },
  {
    id: "p14",
    sentence: "Este verano ___ en la playa.",
    translation: "Այս ամառ մենք հանգստացել ենք լողափում:",
    options: [
      { text: "hemos descansado", correct: true },
      { text: "ha descansado", correct: false },
      { text: "habéis descansado", correct: false }
    ],
    explanation: "Descansar -> descansado. Եթե խոսում ենք մեր մասին՝ 'hemos descansado':",
    marker: "Este verano"
  },
  {
    id: "p15",
    sentence: "Yo nunca ___ en avión.",
    translation: "Ես երբեք ինքնաթիռով չեմ թռել:",
    options: [
      { text: "he viajado", correct: true },
      { text: "has viajado", correct: false },
      { text: "hemos viajado", correct: false }
    ],
    explanation: "Viajar -> viajado. Yo + 'he viajado'. 'Nunca' (երբեք) բառի դեպքում ևս օգտագործում ենք Perfecto:",
    marker: "Nunca"
  }
];
