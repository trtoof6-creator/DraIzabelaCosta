import React, { useState } from 'react';

interface DiagnosticState {
  step: number;
  category: string; // 'divorcio' | 'guarda' | 'pensao' | 'partilha' | ''
  agreement: 'consensual' | 'litigioso' | 'indefinido' | '';
  minors: 'sim' | 'nao' | '';
}

export default function DiagnosticTool() {
  const [state, setState] = useState<DiagnosticState>({
    step: 0,
    category: '',
    agreement: '',
    minors: '',
  });

  const reset = () => {
    setState({
      step: 0,
      category: '',
      agreement: '',
      minors: '',
    });
  };

  const getResult = () => {
    const { category, agreement, minors } = state;
    
    if (category === 'divorcio') {
      if (agreement === 'consensual' && minors === 'nao') {
        return {
          title: 'Procedimento Extrajudicial (Via Cartório)',
          badge: 'Máxima Celeridade',
          description: 'Excelente cenário de resolução rápida. Pelo fato de haver consenso integral e ausência de filhos menores ou incapazes, o divórcio ou dissolução de união estável pode ser realizado por escritura pública direto em cartório de notas, 100% online por assinatura digital.',
          timeframe: 'Aproximadamente 7 a 15 dias úteis',
          requirements: [
            'Consenso absoluto de todas as cláusulas (partilha de bens, alimentos)',
            'Inexistência de gravidez conhecida ou filhos menores/incapazes',
            'Assistência obrigatória de advogado(a) para lavrar a escritura'
          ],
          recommendation: 'Inicie a preparação encaminhando a certidão de casamento e documentos de patrimônio para elaboração da minuta consensual preliminar.'
        };
      } else {
        return {
          title: 'Procedimento Judicial (Via Fórum)',
          badge: 'Completude de Proteção',
          description: 'A presença de filhos menores ou a existência de desacordos patrimoniais exige a via judicial de acordo com o Código Civil brasileiro. Se consensual, o juiz apenas homologa com celeridade; se litigioso, nossa atuação será focada em blindar seu equilíbrio financeiro, seus direitos e garantir a tutela imediata de alimentos e guarda provisória.',
          timeframe: 'Estimado de 2 a 8 meses (variável por comarca)',
          requirements: [
            'Homologação judicial prévia das guardas e visitas se houver filhos',
            'Participação imperativa do Ministério Público para resguardar os menores',
            'Estudo de capacidade financeira para estipulação de pensão alimentar urgente'
          ],
          recommendation: 'Agente uma conferência detalhada para desenharmos uma tese de tutela provisória de urgência de modo a garantir pensão provisória e moradia desde o primeiro dia de processo.'
        };
      }
    }

    if (category === 'guarda' || category === 'pensao') {
      if (agreement === 'consensual') {
        return {
          title: 'Acordo Consensual Homologado Judicialmente',
          badge: 'Solução Harmônica',
          description: 'Cenário ideal para resguardar o bem-estar emocional dos menores. Elaboraremos um termo detalhado contemplando a guarda compartilhada, o plano de visitas feriados/finais de semana e o valor exato dos alimentos (pensão), submetendo ao juiz para homologação expedita com parecer do Ministério Público.',
          timeframe: 'Aproximadamente 30 a 60 dias para homologação',
          requirements: [
            'Consenso maduro sobre valores de pensão e gastos escolares/saúde',
            'Estruturação clara de guarda compartilhada com residência fixa definida',
            'Encaminhamento simples 100% digital das certidões de nascimento'
          ],
          recommendation: 'Oferecemos mediação inicial privada se for preciso lapidar os custos adicionais (vestuário, cursos) antes de redigir o acordo final.'
        };
      } else {
        return {
          title: 'Ação Judicial Litigiosa com Tutela de Urgência',
          badge: 'Ação Estratégica Firme',
          description: 'Quando o diálogo falha, a intervenção do Judiciário é urgente para afastar abusos de poder e alienação parental. Entraremos com pedido de Fixação Provisória de Pensão Alimentícia e Guarda Provisória na primeira semana, forçando judicialmente o genitor a prestar os valores e respeitar o direito de convivência.',
          timeframe: 'Andamento processual complexo (estimativa inicial de 6 a 12 meses)',
          requirements: [
            'Provas concretas de capacidade financeira do alimentante (padrão de vida, redes sociais)',
            'Evidências de bom convívio e da melhor rotina estruturada para os filhos',
            'Foco técnico absoluto para Blindagem das Crianças contra atritos'
          ],
          recommendation: 'A urgência de alimentos e guarda provisória não pode esperar. Precisamos analisar seus extratos e necessidades o quanto antes para fundamentar a liminar imediata.'
        };
      }
    }

    // Partilha de bens ou Inventário
    if (agreement === 'consensual' && minors === 'nao') {
      return {
        title: 'Inventário ou Partilha Extrajudicial',
        badge: 'Proteção Patrimonial Rápida',
        description: 'Cenário altamente favorável para destravamento de heranças e dotação patrimonial. A partilha ou inventário é lavrado por convenção consensual em cartório, afastando custos altíssimos de manutenção de processos judiciais lentos e as custas anuais do fórum.',
        timeframe: 'Aproximadamente 15 a 45 dias para conclusão da escritura',
        requirements: [
          'Inexistência de testamento ativo ou herdeiros incapazes/menores',
          'Concordância integral sobre a fração ideal de bens de cada interessado',
          'Levantamento de certidões negativas de débitos municipais e estaduais'
        ],
        recommendation: 'Auxiliamos inclusive no planejamento tributário prévio para guiar o cálculo do ITCMD (imposto de transmissão) de forma otimizada.'
      };
    } else {
      return {
        title: 'Inventário ou Partilha Judicial',
        badge: 'Garantia de Direitos',
        description: 'Caso existam menores, testamento formal ou dissidências entre herdeiros/cônjuges sobre a partilha física dos imóveis e empresas, o rito legal brasileiro exige o processo judicial. Atuamos com extrema precisão contábil e auditoria patrimonial para obstar fraudes, ocultações de bens e garantir seu quinhão legítimo.',
        timeframe: 'Variável por complexidade de avaliação do acervo do patrimônio',
        requirements: [
          'Identificação minuciosa de contas bancárias, participações societárias e imóveis',
          'Nomeação de inventariante para administração diligente do espólio',
          'Avaliação técnica de bens se houver desacordo de valores de mercado'
        ],
        recommendation: 'Iniciaremos levantando certidões em cartórios de registro de imóveis para resguardar ativos passíveis de dissipação deliberada.'
      };
    }
  };

  const currentResult = getResult();

  // Create message for WhatsApp based on dynamic diagnostic choice
  const getWhatsAppLink = () => {
    let focusText = 'Gostaria de agendar uma consulta sobre Direito de Família.';
    if (state.category === 'divorcio') {
      focusText = `Fiz o diagnóstico no site para um caso de Divórcio (${state.agreement === 'consensual' ? 'Consensual' : 'Litigioso'} e ${state.minors === 'sim' ? 'com filhos menores' : 'sem filhos menores'}). Gostaria de agendar uma consulta estratégica.`;
    } else if (state.category === 'guarda') {
      focusText = `Fiz o diagnóstico para Guarda de Menor (${state.agreement === 'consensual' ? 'Acordo Consensual' : 'Litígio'}). Gostaria de agendar consulta com a Dra. Izabela.`;
    } else if (state.category === 'pensao') {
      focusText = `Fiz o diagnóstico sobre Pensão Alimentícia (${state.agreement === 'consensual' ? 'Amigável' : 'Divergências'}). Gostaria de atendimento especializado online.`;
    } else if (state.category === 'partilha') {
      focusText = `Fiz o diagnóstico para Partilha de Bens / Inventário (${state.agreement === 'consensual' ? 'Seguindo Consenso' : 'Exige via Judicial'}). Quero avaliar meus direitos de herança/meação.`;
    }
    return `https://wa.me/5500000000000?text=${encodeURIComponent(focusText)}`;
  };

  return (
    <div id="diagnostico" className="bg-[#FAF9F7] py-16 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-4xl mx-auto border border-[#D0AE72]/30 bg-white relative shadow-2xl p-5 sm:p-8 md:p-14">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-[4px] bg-[#D0AE72]" />
        <div className="absolute top-3 left-3 right-3 bottom-3 border border-black/[0.02] pointer-events-none" />

        {/* STEP 0: INTRO SCREEN */}
        {state.step === 0 && (
          <div className="text-center md:py-6">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#D0AE72] font-semibold block mb-4">
              Estudo de Caso & Triagem Confidencial
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-light text-[#050505] tracking-tight mb-6">
              Análise de Rito Processual & Viabilidade
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#111111]/70 leading-relaxed font-light tracking-wide max-w-xl mx-auto mb-10">
              O correto direcionamento preliminar poupa meses de desgaste e inseguranças. Organize suas informações gerais em 3 etapas simples para receber diretrizes profissionais e seguras baseadas em nossa legislação e na prática jurídica.
            </p>
            <button
              onClick={() => setState({ ...state, step: 1 })}
              id="btn-start-diagnostic"
              className="inline-flex text-[11px] uppercase tracking-[0.25em] font-bold py-4 px-12 bg-[#050505] hover:bg-[#D0AE72] hover:text-[#050505] text-[#FAF9F7] transition-all duration-300"
            >
              Iniciar Estudo de Caso
            </button>
          </div>
        )}

        {/* STEP 1: CATEGORY SELECTION */}
        {state.step === 1 && (
          <div>
            <div className="flex justify-between items-center mb-8 border-b border-black/[0.05] pb-4">
              <span className="font-serif text-xs italic text-[#D0AE72]">Etapa 01 de 03</span>
              <span className="font-sans text-[10px] uppercase tracking-widest text-black/40">Foco Principal</span>
            </div>
            <h4 className="font-serif text-xl sm:text-2xl text-[#050505] font-light mb-6">
              Qual é a principal demanda jurídica que precisa de solução?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                { id: 'divorcio', title: 'Divórcio ou União Estável', desc: 'Separar legalmente o casal e formalizar ausência de vínculo.' },
                { id: 'guarda', title: 'Guarda & Convivência', desc: 'Definir datas, rotinas e moradia fixa com os filhos.' },
                { id: 'pensao', title: 'Pensão Alimentícia', desc: 'Estipular alimentos provisórios ou readequar valores injustos.' },
                { id: 'partilha', title: 'Partilha de Bens ou Inventário', desc: 'Repartir patrimônio conquistado ou regularizar herança.' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  id={`diagnostic-cat-${opt.id}`}
                  onClick={() => setState({ ...state, category: opt.id, step: 2 })}
                  className="p-6 text-left border border-black/[0.06] hover:border-[#D0AE72] bg-[#FAF9F7]/40 hover:bg-white transition-all group flex flex-col justify-between"
                >
                  <span className="font-serif text-base text-[#050505] group-hover:text-[#D0AE72] transition-colors font-medium">
                    {opt.title}
                  </span>
                  <span className="font-sans text-xs text-[#111111]/60 mt-2 leading-relaxed">
                    {opt.desc}
                  </span>
                </button>
              ))}
            </div>
            <button
              onClick={() => setState({ ...state, step: 0 })}
              className="text-xs uppercase tracking-widest font-semibold text-black/50 hover:text-black transition-colors"
            >
              Voltar ao Início
            </button>
          </div>
        )}

        {/* STEP 2: AGREEMENT SELECTION */}
        {state.step === 2 && (
          <div>
            <div className="flex justify-between items-center mb-8 border-b border-black/[0.05] pb-4">
              <span className="font-serif text-xs italic text-[#D0AE72]">Etapa 02 de 03</span>
              <span className="font-sans text-[10px] uppercase tracking-widest text-black/40">Consenso & Negociação</span>
            </div>
            <h4 className="font-serif text-xl sm:text-2xl text-[#050505] font-light mb-6">
              Existe harmonia ou as partes discordam sobre os termos principais?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {[
                { id: 'consensual', title: 'Consensual / Amigável', desc: 'Temos plenos termos definidos e ambos desejam assinar.' },
                { id: 'litigioso', title: 'Litigioso / Divergências', desc: 'Há discussões sobre imóveis, valores de pensão ou afins.' },
                { id: 'indefinido', title: 'Não Conversamos / Indefinido', desc: 'A outra parte ainda não foi devidamente convidada a falar.' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  id={`diagnostic-agree-${opt.id}`}
                  onClick={() => setState({ ...state, agreement: opt.id as any, step: 3 })}
                  className="p-6 text-left border border-black/[0.06] hover:border-[#D0AE72] bg-[#FAF9F7]/40 hover:bg-white transition-all group flex flex-col justify-between"
                >
                  <span className="font-serif text-base text-[#050505] group-hover:text-[#D0AE72] transition-colors font-medium">
                    {opt.title}
                  </span>
                  <span className="font-sans text-xs text-[#111111]/60 mt-2 leading-relaxed">
                    {opt.desc}
                  </span>
                </button>
              ))}
            </div>
            <button
              onClick={() => setState({ ...state, step: 1 })}
              className="text-xs uppercase tracking-widest font-semibold text-black/50 hover:text-black transition-colors"
            >
              Voltar
            </button>
          </div>
        )}

        {/* STEP 3: MINORS SELECTION */}
        {state.step === 3 && (
          <div>
            <div className="flex justify-between items-center mb-8 border-b border-black/[0.05] pb-4">
              <span className="font-serif text-xs italic text-[#D0AE72]">Etapa 03 de 03</span>
              <span className="font-sans text-[10px] uppercase tracking-widest text-black/40">Garantias Familiares</span>
            </div>
            <h4 className="font-serif text-xl sm:text-2xl text-[#050505] font-light mb-6">
              Existem filhos menores de 18 anos ou maiores civilmente incapazes envolvidos?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                { id: 'sim', title: 'Sim, há filhos menores / incapazes', desc: 'Requer acompanhamento protetivo do Ministério Público conforme lei brasileira.' },
                { id: 'nao', title: 'Não, não há filhos menores ou incapazes', desc: 'Permite desfechos extrajudiciais simplificados em cartório de notas.' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  id={`diagnostic-minors-${opt.id}`}
                  onClick={() => setState({ ...state, minors: opt.id as any, step: 4 })}
                  className="p-6 text-left border border-black/[0.06] hover:border-[#D0AE72] bg-[#FAF9F7]/40 hover:bg-white transition-all group flex flex-col justify-between"
                >
                  <span className="font-serif text-base text-[#050505] group-hover:text-[#D0AE72] transition-colors font-medium">
                    {opt.title}
                  </span>
                  <span className="font-sans text-xs text-[#111111]/60 mt-2 leading-relaxed">
                    {opt.desc}
                  </span>
                </button>
              ))}
            </div>
            <button
              onClick={() => setState({ ...state, step: 2 })}
              className="text-xs uppercase tracking-widest font-semibold text-black/50 hover:text-black transition-colors"
            >
              Voltar
            </button>
          </div>
        )}

        {/* STEP 4: DIAGNOSTIC BLUEPRINT RESULTS */}
        {state.step === 4 && currentResult && (
          <div className="md:py-2">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 border-b border-black/[0.05] pb-4 gap-2">
              <span className="font-sans text-[10px] uppercase tracking-widest text-[#D0AE72] font-semibold">
                Estudo de Viabilidade & Rito Estimado
              </span>
              <span className="px-3 py-1 bg-[#D0AE72]/15 text-[#BFA064] font-serif italic text-xs">
                {currentResult.badge}
              </span>
            </div>

            <h4 className="font-serif text-2xl sm:text-3xl font-light text-[#050505] mb-5 tracking-tight">
              {currentResult.title}
            </h4>

            <p className="font-sans text-xs sm:text-sm text-[#111111]/75 leading-relaxed font-light mb-8">
              {currentResult.description}
            </p>

            {/* Practical requirements checklist */}
            <div className="bg-[#FAF9F7] border border-black/[0.04] p-6 mb-8">
              <h5 className="font-serif text-sm font-medium text-black mb-4">Critérios Legais Identificados:</h5>
              <ul className="space-y-3">
                {currentResult.requirements.map((req, i) => (
                  <li key={i} className="flex gap-3 items-start text-xs text-[#111111]/70 leading-relaxed font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D0AE72] mt-1.5 shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between border-t border-black/[0.05] pt-8">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-black/40 block">Duração Estimada Pela Prática:</span>
                <span className="font-serif text-sm text-[#050505] font-semibold block">{currentResult.timeframe}</span>
              </div>

              <div className="flex items-center gap-4 w-full md:w-auto">
                <button
                  onClick={reset}
                  className="px-5 py-3.5 border border-black/10 hover:border-black text-[10px] uppercase tracking-[0.2em] font-bold text-black transition-all"
                >
                  Refazer
                </button>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#D0AE72] hover:bg-[#BFA064] text-black text-[10px] uppercase tracking-[0.2em] font-bold text-center flex-1 md:flex-none transition-all"
                >
                  Agendar Consulta Estratégica
                </a>
              </div>
            </div>
            
            <p className="text-[10px] text-center md:text-left text-[#111111]/45 mt-6 font-light">
              * Nota de Confidencialidade e Responsabilidade: As respostas fornecidas indicam caminhos rituais preliminares sob o Código Civil brasileiro e destinam-se a subsidiar o posterior atendimento humano personalizado. Toda a sua jornada e o seu caso serão avaliados exclusivamente de forma humanizada, artesanal e com sigilo profissional absoluto pela Dra. Izabela Costa.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
