(function () {
  'use strict';

  var translations = {
    pt: {
      'hero.tagline': 'Analista de Conteúdo e Operações',
      'hero.sub': 'Gestão de Comunidades · Análise de Dados · Experiência na ByteDance',
      'nav.presentation': 'Apresentação',
      'nav.experience': 'Experiência',
      'nav.projects': 'Projetos',
      'nav.cases': 'Casos',
      'nav.skills': 'Competências',
      'nav.languages': 'Idiomas',
      'nav.contact': 'Contato',
      'section1.title': 'Apresentação profissional',
      'intro.lead': 'Atuar em áreas administrativas, operacionais ou de tecnologia, aplicando experiência em gestão de comunidades, análise de dados e suporte operacional.',
      'intro.p2': 'Perfil com experiência em Big Tech: atuação na ByteDance/CapCut em análise estratégica de conteúdo, documentação de best cases e worst cases, planejamento de atividades para comunidades de criadores e suporte à gestão de ecossistemas de mais de 700 criadores.',
      'intro.metaLabel': 'Formação:',
      'intro.metaText': '2023–2026 — Em andamento: Ensino Médio + Curso Técnico de Informática.',
      'section2.title': 'Experiência profissional em destaque',
      'exp.role': 'Analista de Conteúdo (Content Analysis Manager)',
      'exp.role2': 'Administrador de Comunidade (Community Administrator)',
      'exp.bullet1': 'Análise estratégica de conteúdo, identificando melhores e piores desempenhos para geração de insights e melhoria contínua.',
      'exp.bullet2': 'Apuração, documentação e organização de best cases e worst cases, contribuindo para definição de boas práticas e padronização de processos.',
      'exp.bullet3': 'Planejamento e idealização de atividades estratégicas para verticais de conteúdo e engajamento da comunidade.',
      'exp.bullet4': 'Suporte direto à gestão no gerenciamento de comunidade com mais de 700 criadores e 13 monitores, auxiliando na coordenação operacional e organização de fluxos.',
      'exp.bullet5': 'Contribuição para melhoria do desempenho dos criadores por meio de orientação, análise de indicadores e suporte estratégico.',
      'exp.bullet6': 'Atuação na organização de processos, comunicação interna e execução de iniciativas voltadas ao crescimento e monetização da comunidade.',
      'exp.stat1': 'criadores na comunidade',
      'exp.stat2': 'monitores',
      'exp.stat3': 'comunidades WhatsApp',
      'exp.stat4': 'criadores ativos/média',
      'exp2.bullet1': 'Gestão e administração de 3 comunidades estratégicas no WhatsApp, com média de 300 criadores ativos.',
      'exp2.bullet2': 'Responsável pela organização, comunicação e suporte direto aos criadores, garantindo alinhamento com diretrizes e objetivos do projeto.',
      'exp2.bullet3': 'Atuação estratégica no engajamento e acompanhamento de criadores responsáveis por aproximadamente 70% do GMV trimestral das verticais PRO.',
      'exp2.bullet4': 'Monitoramento da atividade da comunidade, identificando oportunidades de melhoria e incentivando participação e desempenho.',
      'exp2.bullet5': 'Suporte operacional e estratégico, auxiliando criadores na execução de atividades, campanhas e iniciativas de monetização.',
      'exp2.bullet6': 'Contribuição para manutenção de alta performance da comunidade por meio de organização, comunicação eficiente e acompanhamento contínuo.',
      'section3.title': 'Projetos',
      'section4.title': 'Casos práticos de atuação',
      'case.problem': 'Desafio',
      'case.action': 'Ação',
      'case.result': 'Resultado',
      'case1.title': 'Análise de conteúdo e padronização de boas práticas',
      'case1.problem': 'Necessidade de identificar melhores e piores desempenhos de conteúdo para gerar insights e definir padrões de qualidade e melhoria contínua.',
      'case1.action': 'Análise estratégica de conteúdo, apuração e documentação de best cases e worst cases. Organização e contribuição para definição de boas práticas e padronização de processos operacionais.',
      'case1.result': 'Base estruturada de referências para a equipe, com insights acionáveis e processos padronizados para melhoria contínua das verticais de conteúdo.',
      'case2.title': 'Gestão e engajamento de comunidades no CapCut',
      'case2.problem': 'Gestão e administração de múltiplas comunidades estratégicas no WhatsApp, com centenas de criadores, exigindo organização, comunicação e alinhamento com diretrizes do projeto.',
      'case2.action': 'Gestão de 3 comunidades no WhatsApp, suporte direto aos criadores, acompanhamento estratégico dos responsáveis por ~70% do GMV das verticais PRO, execução de campanhas e iniciativas de monetização.',
      'case2.result': 'Manutenção de alta performance da comunidade por meio de organização, comunicação eficiente e acompanhamento contínuo, com foco em engajamento e monetização.',
      'section5.title': 'Competências e ferramentas',
      'skill1.title': 'Gestão de Comunidades Digitais',
      'skill1.desc': 'Administração de comunidades, engajamento de criadores e coordenação operacional.',
      'skill2.title': 'Análise de Dados e Indicadores',
      'skill2.desc': 'Identificação de desempenhos, geração de insights e decisões baseadas em dados.',
      'skill3.title': 'Suporte Operacional e Administrativo',
      'skill3.desc': 'Suporte direto a criadores, organização de fluxos e acompanhamento contínuo.',
      'skill4.title': 'Organização de Processos',
      'skill4.desc': 'Documentação, padronização e melhoria contínua de processos operacionais.',
      'skill5.title': 'Planejamento Estratégico e Análise de Conteúdo',
      'skill5.desc': 'Planejamento de atividades estratégicas, análise de conteúdo e comunicação profissional.',
      'tools.title': 'Outras competências',
      'tools.desc': 'Comunicação profissional, proatividade, organização e capacidade de trabalhar com múltiplas comunidades e verticais de conteúdo.',
      'section6.title': 'Idiomas',
      'lang.pt': 'Português — Nativo',
      'lang.en': 'Inglês — Intermediário',
      'lang.es': 'Espanhol — Básico',
      'section7.title': 'Contato',
      'footer.text': 'Vinicius Ribeiro — Analista de Conteúdo e Operações',
      'footer.sub': 'Experiência na ByteDance (CapCut) · Gestão de Comunidades · Análise de Dados',
      'proj2.context': 'Site de apresentação profissional — experiência em conteúdo, operações e gestão de comunidades na ByteDance/CapCut.',
      'proj2.bullet1': 'Objetivo: Apresentar perfil profissional de forma clara, com foco em análise de conteúdo, gestão de comunidades e suporte operacional.',
      'proj2.bullet2': 'Conteúdo: Experiência na ByteDance, competências em análise de dados, organização de processos e comunicação profissional.',
      'proj2.bullet3': 'Recursos: Modo escuro, tradução PT/EN, navegação fluida, seções de experiência, competências e contato.',
      'proj2.bullet4': 'Foco: Comunicação profissional e apresentação objetiva da trajetória em gestão de comunidades digitais.',
      'proj2.note': 'Você está nele agora. 👋'
    },
    en: {
      'hero.tagline': 'Content and Operations Analyst',
      'hero.sub': 'Community Management · Data Analysis · ByteDance Experience',
      'nav.presentation': 'About',
      'nav.experience': 'Experience',
      'nav.projects': 'Projects',
      'nav.cases': 'Cases',
      'nav.skills': 'Skills',
      'nav.languages': 'Languages',
      'nav.contact': 'Contact',
      'section1.title': 'Professional profile',
      'intro.lead': 'Seeking roles in administrative, operational, or technology areas, applying experience in community management, data analysis, and operational support.',
      'intro.p2': 'Profile with Big Tech experience: worked at ByteDance/CapCut in strategic content analysis, best and worst case documentation, activity planning for creator communities, and support for ecosystems of over 700 creators.',
      'intro.metaLabel': 'Education:',
      'intro.metaText': '2023–2026 — In progress: High School + Technical Course in Computer Science.',
      'section2.title': 'Highlighted professional experience',
      'exp.role': 'Content Analyst (Content Analysis Manager)',
      'exp.role2': 'Community Administrator',
      'exp.bullet1': 'Strategic content analysis, identifying best and worst performance to generate insights and continuous improvement.',
      'exp.bullet2': 'Investigation, documentation, and organization of best cases and worst cases, contributing to good practices and process standardization.',
      'exp.bullet3': 'Planning and design of strategic activities for content verticals and community engagement.',
      'exp.bullet4': 'Direct support to management in community management with over 700 creators and 13 moderators, assisting in operational coordination and flow organization.',
      'exp.bullet5': 'Contribution to creator performance improvement through guidance, indicator analysis, and strategic support.',
      'exp.bullet6': 'Work in process organization, internal communication, and execution of initiatives for community growth and monetization.',
      'exp.stat1': 'creators in community',
      'exp.stat2': 'moderators',
      'exp.stat3': 'WhatsApp communities',
      'exp.stat4': 'active creators/average',
      'exp2.bullet1': 'Management and administration of 3 strategic communities on WhatsApp, with an average of 300 active creators.',
      'exp2.bullet2': 'Responsible for organization, communication, and direct support to creators, ensuring alignment with project guidelines and objectives.',
      'exp2.bullet3': 'Strategic engagement and monitoring of creators responsible for approximately 70% of quarterly GMV of PRO verticals.',
      'exp2.bullet4': 'Community activity monitoring, identifying improvement opportunities and encouraging participation and performance.',
      'exp2.bullet5': 'Operational and strategic support, assisting creators in executing activities, campaigns, and monetization initiatives.',
      'exp2.bullet6': 'Contribution to maintaining high community performance through organization, efficient communication, and continuous monitoring.',
      'section3.title': 'Projects',
      'section4.title': 'Practical cases',
      'case.problem': 'Challenge',
      'case.action': 'Action',
      'case.result': 'Result',
      'case1.title': 'Content analysis and good practices standardization',
      'case1.problem': 'Need to identify best and worst content performance to generate insights and define quality standards and continuous improvement.',
      'case1.action': 'Strategic content analysis, investigation, and documentation of best and worst cases. Organization and contribution to good practices definition and operational process standardization.',
      'case1.result': 'Structured reference base for the team, with actionable insights and standardized processes for continuous improvement of content verticals.',
      'case2.title': 'Community management and engagement at CapCut',
      'case2.problem': 'Management and administration of multiple strategic communities on WhatsApp, with hundreds of creators, requiring organization, communication, and alignment with project guidelines.',
      'case2.action': 'Management of 3 communities on WhatsApp, direct support to creators, strategic monitoring of those responsible for ~70% of PRO verticals GMV, execution of campaigns and monetization initiatives.',
      'case2.result': 'Maintenance of high community performance through organization, efficient communication, and continuous monitoring, focused on engagement and monetization.',
      'section5.title': 'Skills and tools',
      'skill1.title': 'Digital Community Management',
      'skill1.desc': 'Community administration, creator engagement, and operational coordination.',
      'skill2.title': 'Data and Indicator Analysis',
      'skill2.desc': 'Performance identification, insight generation, and data-driven decisions.',
      'skill3.title': 'Operational and Administrative Support',
      'skill3.desc': 'Direct support to creators, flow organization, and continuous monitoring.',
      'skill4.title': 'Process Organization',
      'skill4.desc': 'Documentation, standardization, and continuous improvement of operational processes.',
      'skill5.title': 'Strategic Planning and Content Analysis',
      'skill5.desc': 'Strategic activity planning, content analysis, and professional communication.',
      'tools.title': 'Other competencies',
      'tools.desc': 'Professional communication, proactivity, organization, and ability to work with multiple communities and content verticals.',
      'section6.title': 'Languages',
      'lang.pt': 'Portuguese — Native',
      'lang.en': 'English — Intermediate',
      'lang.es': 'Spanish — Basic',
      'section7.title': 'Contact',
      'footer.text': 'Vinicius Ribeiro — Content and Operations Analyst',
      'footer.sub': 'ByteDance (CapCut) Experience · Community Management · Data Analysis',
      'proj2.context': 'Professional presentation site — experience in content, operations, and community management at ByteDance/CapCut.',
      'proj2.bullet1': 'Objective: Present professional profile clearly, focused on content analysis, community management, and operational support.',
      'proj2.bullet2': 'Content: ByteDance experience, competencies in data analysis, process organization, and professional communication.',
      'proj2.bullet3': 'Features: Dark mode, PT/EN translation, smooth navigation, experience, skills, and contact sections.',
      'proj2.bullet4': 'Focus: Professional communication and objective presentation of trajectory in digital community management.',
      'proj2.note': "You're looking at it right now. 👋"
    }
  };

  function setLang(lang) {
    var l = lang === 'en' ? 'en' : 'pt';
    document.documentElement.lang = l === 'en' ? 'en' : 'pt-BR';
    document.title = l === 'en' ? 'Vinicius Ribeiro | Content and Operations Analyst' : 'Vinicius Ribeiro | Analista de Conteúdo e Operações';

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
