(function () {
  'use strict';

  var translations = {
    pt: {
      'hero.tagline': 'Analista de Operações e Projetos',
      'hero.sub': 'Gestão de Tecnologia da Informação · Big Tech · Liderança de equipes',
      'nav.presentation': 'Apresentação',
      'nav.experience': 'Experiência',
      'nav.projects': 'Projetos',
      'nav.cases': 'Casos',
      'nav.skills': 'Competências',
      'nav.languages': 'Idiomas',
      'nav.contact': 'Contato',
      'section1.title': 'Apresentação profissional',
      'intro.lead': 'Profissional de operações e projetos com experiência em Big Tech, atuação em gestão de comunidades digitais, otimização de processos e integração entre negócio e tecnologia.',
      'intro.p2': 'Perfil de gestor com base técnica em TI: atua em ambientes digitais de alta escala, com foco em resultados mensuráveis, indicadores de desempenho e liderança de equipes. Combina visão de processo com capacidade de executar e escalar operações em contexto global.',
      'intro.metaLabel': 'Formação:',
      'intro.metaText': 'Graduando em GTI — Gestão de Tecnologia da Informação. Previsão de conclusão: 2027.',
      'section2.title': 'Experiência profissional em destaque',
      'exp.role': 'Analista de Operações e Projetos',
      'exp.bullet1': 'Planejamento e coordenação de processos operacionais em ambiente global.',
      'exp.bullet2': 'Gestão de equipes e definição de estratégias de eficiência, engajamento e monetização.',
      'exp.bullet3': 'Monitoramento de indicadores de desempenho (KPIs) e tomada de decisão baseada em dados.',
      'exp.bullet4': 'Liderança de ecossistema com mais de 700 criadores ativos.',
      'exp.bullet5': 'Manutenção de 70% de atividade semanal e 50% de taxa de monetização.',
      'exp.bullet6': 'Supervisão de 30 monitores voluntários, com mentoria e padronização de processos.',
      'exp.bullet7': 'No fim de 2024, liderou iniciativas que elevaram a receita do app no Brasil, com crescimento expressivo do GMV diário de modelos PRO em relação à média anterior.',
      'exp.stat1': 'criadores ativos',
      'exp.stat2': 'atividade semanal',
      'exp.stat3': 'taxa de monetização',
      'exp.stat4': 'monitores supervisionados',
      'section3.title': 'Projetos acadêmicos em TI',
      'proj.context': 'Projeto desenvolvido durante a graduação em Gestão de Tecnologia da Informação (GTI).',
      'proj.btn': 'Ver cardápio online',
      'proj.bullet1': 'Objetivo: Solução digital para apresentação de cardápio, com foco em usabilidade e otimização de processos comerciais.',
      'proj.bullet2': 'Requisitos e organização: Mapeamento das necessidades do negócio e estruturação de categorias e itens (entradas, pratos principais, bebidas, sobremesas, pizzas).',
      'proj.bullet3': 'Fluxo e usabilidade: Navegação por categorias, exibição clara de descrições e preços, reserva de mesa e painel administrativo para gestão do menu.',
      'proj.bullet4': 'Tecnologia e processos: Uso da tecnologia para facilitar a consulta ao cardápio e melhorar a experiência do cliente e a operação do estabelecimento.',
      'proj.bullet5': 'Aprendizados: Sistemas de informação e tecnologia aplicada ao negócio, da concepção à entrega de valor para o usuário e para a operação.',
      'proj.figcaption': 'Interface do projeto —',
      'section4.title': 'Casos práticos de atuação',
      'case.problem': 'Problema',
      'case.action': 'Ação',
      'case.result': 'Resultado',
      'case1.title': 'Organização e otimização do suporte operacional',
      'case1.problem': 'Processos de suporte fragmentados e sem padronização, impactando tempo de resposta e consistência no atendimento.',
      'case1.action': 'Mapeamento dos fluxos existentes, documentação de procedimentos e definição de responsabilidades. Implementação de padrões de resposta e acompanhamento via indicadores.',
      'case1.result': 'Suporte mais previsível, com processos claros e métricas para acompanhamento contínuo da eficiência.',
      'case2.title': 'Engajamento e retenção de comunidade digital',
      'case2.problem': 'Necessidade de manter a comunidade ativa e engajada, com parte dos criadores pouco participativos ou em risco de evasão.',
      'case2.action': 'Estratégias de comunicação, eventos e incentivos alinhados aos objetivos da plataforma. Mentoria de monitores voluntários e padronização de práticas para amplificar o engajamento.',
      'case2.result': 'Manutenção de 70% de atividade semanal no ecossistema e 50% de taxa de monetização, com mais de 700 criadores ativos e equipe de 30 monitores estruturada.',
      'section5.title': 'Competências e ferramentas',
      'skill1.title': 'Gestão de Operações e Projetos',
      'skill1.desc': 'Planejamento, coordenação e acompanhamento de processos em ambiente global.',
      'skill2.title': 'Análise de Indicadores (KPIs)',
      'skill2.desc': 'Monitoramento de métricas e decisões baseadas em dados.',
      'skill3.title': 'Organização e otimização de processos',
      'skill3.desc': 'Mapeamento, documentação e melhoria contínua de fluxos operacionais.',
      'skill4.title': 'Comunicação e liderança de equipes',
      'skill4.desc': 'Gestão de equipes, mentoria e padronização de práticas.',
      'skill5.title': 'Sistemas de informação e TI aplicada ao negócio',
      'skill5.desc': 'Visão de tecnologia como suporte a processos e resultados de negócio.',
      'tech.title': 'Linguagens e tecnologias',
      'tech.desc': 'No projeto Cardápio Digital (Sabor & Arte): HTML, CSS, JavaScript e JSON. Conhecimento adicional:',
      'tools.title': 'Ferramentas',
      'tools.desc': 'Google Sheets, Excel, Notion, WhatsApp, plataformas digitais e documentação técnica. Uso cotidiano em dashboards, planejamento e comunicação com equipes e stakeholders.',
      'section6.title': 'Idiomas',
      'lang.pt': 'Português — Nativo',
      'lang.en': 'Inglês — Avançado',
      'section7.title': 'Contato',
      'footer.text': 'Vinícius Ribeiro — Analista de Operações e Projetos',
      'footer.sub': 'Graduando em GTI — Previsão de conclusão: 2027',
      'proj2.context': 'Projeto desenvolvido durante a graduação em GTI — site pessoal de apresentação profissional, construído do zero.',
      'proj2.bullet1': 'Objetivo: Apresentar perfil profissional de forma clara e objetiva, com foco em operações, projetos e TI aplicada ao negócio.',
      'proj2.bullet2': 'Tecnologias: HTML, CSS e JavaScript — estrutura semântica, design responsivo e interatividade.',
      'proj2.bullet3': 'Recursos: Modo escuro, tradução PT/EN, navegação fluida, animações sutis e seções de experiência, projetos acadêmicos, competências e contato.',
      'proj2.bullet4': 'Aprendizados: Organização da informação, usabilidade e aplicação de tecnologia para comunicação profissional.',
      'proj2.note': 'Você está nele agora. 👋'
    },
    en: {
      'hero.tagline': 'Operations and Projects Analyst',
      'hero.sub': 'IT Management · Big Tech · Team Leadership',
      'nav.presentation': 'About',
      'nav.experience': 'Experience',
      'nav.projects': 'Projects',
      'nav.cases': 'Cases',
      'nav.skills': 'Skills',
      'nav.languages': 'Languages',
      'nav.contact': 'Contact',
      'section1.title': 'Professional profile',
      'intro.lead': 'Operations and projects professional with Big Tech experience, digital community management, process optimization, and alignment between business and technology.',
      'intro.p2': 'Manager profile with a technical IT foundation: works in large-scale digital environments, focused on measurable results, performance indicators, and team leadership. Combines process vision with the ability to execute and scale operations in a global context.',
      'intro.metaLabel': 'Education:',
      'intro.metaText': 'Undergraduate in IT Management — Information Technology Management. Expected graduation: 2027.',
      'section2.title': 'Highlighted professional experience',
      'exp.role': 'Operations and Projects Analyst',
      'exp.bullet1': 'Planning and coordination of operational processes in a global environment.',
      'exp.bullet2': 'Team management and definition of efficiency, engagement, and monetization strategies.',
      'exp.bullet3': 'Monitoring of performance indicators (KPIs) and data-driven decision making.',
      'exp.bullet4': 'Leadership of an ecosystem with more than 700 active creators.',
      'exp.bullet5': 'Maintenance of 70% weekly activity and 50% monetization rate.',
      'exp.bullet6': 'Supervision of 30 volunteer moderators, with mentoring and process standardization.',
      'exp.bullet7': 'In late 2024, led initiatives that increased app revenue in Brazil, with significant growth in daily GMV for PRO models compared to the previous average.',
      'exp.stat1': 'active creators',
      'exp.stat2': 'weekly activity',
      'exp.stat3': 'monetization rate',
      'exp.stat4': 'supervised moderators',
      'section3.title': 'Academic projects in IT',
      'proj.context': 'Project developed during the undergraduate degree in Information Technology Management (ITM).',
      'proj.btn': 'View menu online',
      'proj.bullet1': 'Objective: Digital solution for menu presentation, focused on usability and optimization of business processes.',
      'proj.bullet2': 'Requirements and organization: Mapping of business needs and structure of categories and items (starters, main courses, drinks, desserts, pizzas).',
      'proj.bullet3': 'Flow and usability: Category navigation, clear display of descriptions and prices, table reservation, and admin panel for menu management.',
      'proj.bullet4': 'Technology and processes: Use of technology to facilitate menu browsing and improve customer experience and establishment operations.',
      'proj.bullet5': 'Learnings: Information systems and technology applied to business, from conception to delivery of value to the user and to operations.',
      'proj.figcaption': 'Project interface —',
      'section4.title': 'Practical cases',
      'case.problem': 'Problem',
      'case.action': 'Action',
      'case.result': 'Result',
      'case1.title': 'Support operations organization and optimization',
      'case1.problem': 'Fragmented support processes with no standardization, affecting response time and consistency of service.',
      'case1.action': 'Mapping of existing flows, documentation of procedures, and definition of responsibilities. Implementation of response standards and monitoring via indicators.',
      'case1.result': 'More predictable support, with clear processes and metrics for ongoing efficiency monitoring.',
      'case2.title': 'Digital community engagement and retention',
      'case2.problem': 'Need to keep the community active and engaged, with some creators barely participating or at risk of churn.',
      'case2.action': 'Communication strategies, events, and incentives aligned with platform goals. Mentoring of volunteer moderators and standardization of practices to amplify engagement.',
      'case2.result': 'Maintenance of 70% weekly activity in the ecosystem and 50% monetization rate, with over 700 active creators and a structured team of 30 moderators.',
      'section5.title': 'Skills and tools',
      'skill1.title': 'Operations and Project Management',
      'skill1.desc': 'Planning, coordination, and follow-up of processes in a global environment.',
      'skill2.title': 'Indicator Analysis (KPIs)',
      'skill2.desc': 'Metric monitoring and data-based decisions.',
      'skill3.title': 'Process organization and optimization',
      'skill3.desc': 'Mapping, documentation, and continuous improvement of operational flows.',
      'skill4.title': 'Communication and team leadership',
      'skill4.desc': 'Team management, mentoring, and standardization of practices.',
      'skill5.title': 'Information systems and IT applied to business',
      'skill5.desc': 'View of technology as support for processes and business results.',
      'tech.title': 'Languages and technologies',
      'tech.desc': 'In the Digital Menu project (Sabor & Arte): HTML, CSS, JavaScript, and JSON. Additional knowledge:',
      'tools.title': 'Tools',
      'tools.desc': 'Google Sheets, Excel, Notion, WhatsApp, digital platforms, and technical documentation. Daily use in dashboards, planning, and communication with teams and stakeholders.',
      'section6.title': 'Languages',
      'lang.pt': 'Portuguese — Native',
      'lang.en': 'English — Advanced',
      'section7.title': 'Contact',
      'footer.text': 'Vinícius Ribeiro — Operations and Projects Analyst',
      'footer.sub': 'Undergraduate in IT Management — Expected graduation: 2027',
      'proj2.context': 'Project developed during the undergraduate degree in IT Management — personal professional presentation site, built from scratch.',
      'proj2.bullet1': 'Objective: Present professional profile in a clear and objective way, focused on operations, projects, and IT applied to business.',
      'proj2.bullet2': 'Technologies: HTML, CSS, and JavaScript — semantic structure, responsive design, and interactivity.',
      'proj2.bullet3': 'Features: Dark mode, PT/EN translation, smooth navigation, subtle animations, and sections for experience, academic projects, skills, and contact.',
      'proj2.bullet4': 'Learnings: Information organization, usability, and application of technology for professional communication.',
      'proj2.note': "You're looking at it right now. 👋"
    }
  };

  function setLang(lang) {
    var l = lang === 'en' ? 'en' : 'pt';
    document.documentElement.lang = l === 'en' ? 'en' : 'pt-BR';
    document.title = l === 'en' ? 'Vinícius Ribeiro | Operations and Projects Analyst' : 'Vinícius Ribeiro | Analista de Operações e Projetos';

    var t = translations[l];
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] != null) el.textContent = t[key];
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === l);
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === l ? 'true' : 'false');
    });

    try { localStorage.setItem('portfolio-lang', l); } catch (e) {}
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLang(btn.getAttribute('data-lang'));
    });
  });

  try {
    var saved = localStorage.getItem('portfolio-lang');
    if (saved === 'en' || saved === 'pt') setLang(saved);
  } catch (e) {}
})();
