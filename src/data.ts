import { ServiceItem, Testimonial, FAQItem, StepItem } from './types';

export const primaryService: ServiceItem = {
  id: 'familia',
  title: 'Direito de Família & Sucessões',
  details: [
    'Divórcios (extrajudiciais em cartório ou judiciais consensuais e litigiosos)',
    'Inventários judiciais e escrituras públicas de partilha de bens com agilidade',
    'Ações estratégicas de guarda de menores, regime de convivência e pensão alimentar',
    'Constituição, reconhecimento e dissolução judicial e extrajudicial de união estável',
    'Planejamento sucessório focado em governança familiar e eficiência tributária'
  ]
};

export const secondaryServices: ServiceItem[] = [
  {
    id: 'previdenciario',
    title: 'Direito Previdenciário',
    details: [
      'Planejamento previdenciário e projeção de aposentadorias para regimes geral (RGPS) e próprios (RPPS)',
      'Concessão e restabelecimento de auxílio por incapacidade temporária (auxílio-doença) e aposentadorias',
      'Impugnações judiciais contra negativas injustas do INSS e representação em recursos administrativos',
      'Cálculos detalhados de tempo de contribuição e aplicação de regras de transição favoráveis'
    ]
  },
  {
    id: 'criminal',
    title: 'Direito de Defesa Criminal',
    details: [
      'Representação técnica imediata em inquéritos policiais, investigações prévias e oitivas',
      'Atuação especializada em audiências de custódia e impetração de medidas libertatórias urgentes',
      'Defesas processuais e recursos em instâncias ordinárias, tribunais de justiça e tribunais superiores',
      'Assessoria em crimes previdenciários, contra o patrimônio e crimes contra o sistema financeiro'
    ]
  },
  {
    id: 'civel',
    title: 'Direito Civil & Contratos',
    details: [
      'Análise de riscos, elaboração e auditoria técnica de contratos civis, societários e de prestação de serviços',
      'Ações judiciais de responsabilidade civil e reparação por danos materiais, morais e lucros cessantes',
      'Proteção e regularização jurídica de patrimônio imobiliário de alta relevância',
      'Negociações estratégicas de alta complexidade para resolução extrajudicial célere de disputas'
    ]
  },
  {
    id: 'trabalhista',
    title: 'Direito do Trabalho',
    details: [
      'Atuação em reclamações trabalhistas focadas em verbas complexas, horas extras e equiparação salarial',
      'Ações de rescisão indireta em decorrência de descumprimentos severos por parte do empregador',
      'Pedidos de indenização por acidentes de trabalho, doenças ocupacionais e assédio moral',
      'Assessoria jurídica integral para reversão de demissões infundadas por justa causa'
    ]
  },
  {
    id: 'consumidor',
    title: 'Direito do Consumidor',
    details: [
      'Defesas processuais contra planos de saúde em negativas de cirurgias, exames e reajustes contratuais abusivos',
      'Ações de reparação civil por falha na prestação de transporte aéreo, overbooking e perdas de conexão',
      'Proteção contra práticas comerciais desleais, fraudes bancárias e cobranças flagrantemente indevidas',
      'Rescisões contratuais em negócios imobiliários e de infraestrutura por atrasos de obras irremediáveis'
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote: 'Profissional extremamente técnica e precisa. Conduziu o inventário da nossa família com enorme agilidade, transparência absoluta e segurança de ponta a ponta.',
    clientName: 'Mariana Cavalcanti',
    city: 'Salvador - BA'
  },
  {
    id: 't2',
    quote: 'Excelente atuação na esfera contratual. A Dra. Izabela identificou riscos críticos de patrimônio que haviam passado despercebidos por outros profissionais.',
    clientName: 'Roberto Aguiar',
    city: 'Belo Horizonte - MG'
  },
  {
    id: 't3',
    quote: 'O atendimento digital é impecável. Consegui enviar certidões, assinar a procuração pelo celular e acompanhar o andamento processual online com total clareza.',
    clientName: 'Cláudia Ramos',
    city: 'São Paulo - SP'
  }
];

export const steps: StepItem[] = [
  {
    number: '01',
    title: 'Consulta Inicial & Alinhamento',
    description: 'Apresentação detalhada da sua questão em consulta online reservada. Alinhamos os objetivos e fazemos o levantamento preliminar de documentos.'
  },
  {
    number: '02',
    title: 'Definição Estratégica',
    description: 'Estudo de viabilidade sob a legislação vigente. Apresentamos o rito processual ou extrajudicial mais célere para proteger seu interesse e patrimônio.'
  },
  {
    number: '03',
    title: 'Atuação Directiva & Report',
    description: 'Peticionamento ágil, acompanhamento rigoroso e reporte constante. Toda a evolução legal do seu caso é informada de forma direta.'
  }
];

export const faqs: FAQItem[] = [
  {
    id: 'faq1',
    question: 'Como funciona o atendimento jurídico 100% online?',
    answer: 'Todo o acompanhamento é realizado de forma digital. O envio de certidões e documentos ocorre por canais seguros, e as reuniões ocorrem via videoconferência ou WhatsApp. Contratos e procurações são assinados diretamente pelo celular por meio de assinaturas eletrônicas com validade legal plena (ICP-Brasil).'
  },
  {
    id: 'faq2',
    question: 'Mesmo sem ir a um escritório físico, meu processo é seguro?',
    answer: 'Sim, totalmente. O Judiciário em todo o Brasil opera sob processos virtuais (PJe, e-SAJ e Projudi). Isso nos possibilita peticionar, anexar documentos e acompanhar audiências virtuais em qualquer tribunal do país com a mesma validade.'
  },
  {
    id: 'faq3',
    question: 'Quanto tempo demora para que o meu caso seja distribuído?',
    answer: 'Em demandas urgentes (como pensão alimentícia gravíssima, liminares contra planos de saúde ou pedidos de liberdade), a petição e o pedido de tutela são elaborados e distribuídos em até 24 ou 48 horas após o recebimento completo das certidões e procurações.'
  },
  {
    id: 'faq4',
    question: 'Moro em outro estado. Posso ser atendido pela Dra. Izabela Costa?',
    answer: 'Sim. A Dra. Izabela Ferreira Costa (OAB/BA 52.024) possui habilitação técnica para atuar em todo o território nacional por meio de peticionamento eletrônico integrado. Atendemos clientes residentes em qualquer estado ou brasileiros que estejam no exterior.'
  },
  {
    id: 'faq5',
    question: 'Quais os custos de uma atuação preventiva?',
    answer: 'A atuação preventiva (análise de contratos, planejamento de família, etc.) costuma ser consideravelmente mais em conta do que remediar uma disputa judicial litigiosa longa. Os honorários são estipulados de forma transparente com base nos critérios éticos descritos na Tabela da OAB.'
  }
];
