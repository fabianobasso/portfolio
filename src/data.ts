export type Lang = 'pt' | 'en'

export const perfil = {
    nome: 'Fabiano Basso Antonio',
    telefone: '(48) 98816-9638',
    email: 'fabiano.basso2017@gmail.com',
    linkedin: 'https://www.linkedin.com/in/fabiano-basso',
    github: 'https://github.com/fabianobasso'
}

export interface Experiencia { cargo: string; periodo: string; empresa: string; contexto: string; itens: string[] }
export interface Projeto { titulo: string; ano: string; texto: string; cv?: string; stack: string[] }

const wa = (m: string) => `https://api.whatsapp.com/send?phone=5548988169638&text=${encodeURIComponent(m)}`
export const filtrosTech = ['PHP', 'Java', 'Angular', 'React', 'Vue.js', 'Python']

const pt = {
    ui: {
        nav: ['Início', 'Serviços', 'Sobre', 'Experiência', 'Projetos', 'Contato'],
        cargo: 'Sênior e Líder Técnico', h1: 'Desenvolvedor Full Stack', ola: 'Olá, eu sou',
        falar: 'Fale comigo', baixar: 'Baixar currículo', cvArquivo: './Fabiano-CV.pdf', cvNome: 'Fabiano-Basso-Antonio-CV.pdf',
        whatsapp: wa('Olá Fabiano! Vi seu portfólio e gostaria de conversar.'), local: 'Florianópolis, SC, Brasil',
        servicosT: 'Serviços', servicosS: 'Do banco de dados à interface, com foco em segurança, desempenho e escalabilidade.',
        sobreT: 'Sobre mim', expT: 'Experiência', expS: 'GovTech, sistemas de gestão, varejo, logística, saúde animal e e-commerce.',
        formT: 'Formação, idiomas e conhecimento adicional', idiomasT: 'Idiomas', adicT: 'Conhecimento adicional',
        projT: 'Projetos', projS: 'Sistemas e sites desenvolvidos de ponta a ponta ao longo da carreira. Projetos confidenciais (NDA).',
        todos: 'Todos', filtrar: 'Filtrar projetos por tecnologia',
        contT: 'Fale comigo', contS: 'Vaga, projeto ou uma ideia para tirar do papel: me chame e eu respondo.',
        nome: 'Nome', email: 'E-mail', assunto: 'Assunto', msg: 'Mensagem...', assuntos: ['Oportunidade de trabalho', 'Projeto freelance', 'Outro assunto'],
        enviar: 'Enviar por e-mail', mailSub: 'Contato pelo portfólio', trocar: 'EN', trocarRotulo: 'Switch to English',
        numeros: [['20+', 'Anos com tecnologia'], ['4+', 'Anos em GovTech'], ['2', 'Sistemas: saúde e educação']],
        servicos: [
            ['Sistemas de gestão', 'ERP e CRM sob medida, com controle de acesso, relatórios e rotinas administrativas automatizadas.'],
            ['Dashboards e indicadores', 'Painéis gerenciais que transformam dados operacionais em decisões.'],
            ['APIs REST e integrações', 'Integração entre sistemas internos e serviços externos, incluindo mensageria via Twilio (SMS/WhatsApp).'],
            ['Web e mobile', 'Aplicações responsivas e apps com React, Vue 3, Angular, TypeScript e React Native.'],
            ['E-commerce e pagamentos', 'Lojas, marketplaces e integração com gateways de pagamento.'],
            ['Automação e DevOps', 'Docker, CI/CD e AWS para entregas confiáveis, com observabilidade em Grafana e Prometheus.']
        ],
        destaques: [['PHP', 'PHP', 'da 5.5 à 8.3'], ['JS', 'JavaScript e TypeScript', 'React, Vue, Angular, Node.js'], ['Py', 'Python e Java', 'Django e sistemas de gestão'], ['DB', 'Dados', 'PostgreSQL, MySQL, Redis'], ['Ops', 'Cloud e DevOps', 'AWS, Docker, CI/CD']],
        cv: { contato: 'Contato', comp: 'Competências técnicas', idiomas: 'Idiomas', form: 'Formação acadêmica', adic: 'Conhecimento adicional', resumo: 'Resumo', exp: 'Experiência profissional', proj: 'Projetos selecionados', dom: 'Domínio de negócio', cargo: 'Desenvolvedor Full Stack Sênior e Líder Técnico', introProj: 'Atua como desenvolvedor freelancer desde 2003. Projetos confidenciais (NDA); seleção representativa.' }
    },
    resumo: {
        destaque: 'Programando desde 2003, em tempo integral na área desde 2016.',
        texto: [
            'Desenvolvedor Full Stack Sênior e Líder Técnico, com mais de 20 anos de contato com tecnologia: programando desde 2003 e, desde 2016, dedicado integralmente à carreira em desenvolvimento de software. Reúne experiência em desenvolvimento, liderança técnica, suporte e infraestrutura.',
            'Nos últimos anos, atua em empresas privadas de tecnologia (GovTech) contratadas via licitação por prefeituras, desenvolvendo sistemas de saúde (usados por hospitais e UPAs municipais) e de educação (usados pela rede municipal de ensino). Experiência em aplicações web, integrações, dashboards e sistemas de gestão, com atuação em PHP (de legados na 5.5 a sistemas modernos na 8.3), JavaScript/TypeScript, React, Vue, Angular, Java, Node.js, PostgreSQL, MySQL/MariaDB, MongoDB, Redis, AWS, Docker e CI/CD. Entregou, de ponta a ponta e sozinho, sistemas de gestão para o varejo.',
            'Utiliza Inteligência Artificial aplicada ao desenvolvimento de software como apoio à análise, implementação, revisão e refatoração de código, investigação de problemas, documentação e automação, mantendo sempre validação e responsabilidade técnica.'
        ]
    },
    experiencias: [
        { cargo: 'Desenvolvedor Full Stack', periodo: 'dez/2025 – atual', empresa: 'Startup (Confidencial)', contexto: 'GovTech · São Paulo e Região', itens: [
            'Empresa privada de tecnologia contratada por município via licitação; atuação no sistema de educação, utilizado pela rede municipal de ensino (escolas).',
            'Desenvolvimento de aplicações web, dashboards gerenciais, APIs REST e integrações com sistemas internos e serviços externos, incluindo Redis (cache) e AWS (infraestrutura em nuvem), e integrações de mensageria via Twilio (SMS/WhatsApp); modelagem e otimização de bancos de dados.',
            'Implementação de automações e interfaces responsivas, com foco em desempenho, segurança, escalabilidade e qualidade de código; uso de IA como apoio à análise, revisão e documentação.'] },
        { cargo: 'Desenvolvedor Líder de Projeto | Full Stack', periodo: 'out/2021 – nov/2025 (4a 2m)', empresa: 'Troupe Tecnologia', contexto: 'GovTech · São Paulo e Região', itens: [
            'Mais de quatro anos em empresa privada de tecnologia contratada por municípios via licitação, atuando em dois sistemas: saúde (usado por hospitais e UPAs municipais) e educação (usado pela rede municipal de ensino).',
            'Desenvolvimento e manutenção de aplicações web, sistemas de gestão, dashboards, APIs REST e integrações entre sistemas, com modelagem e otimização de bancos de dados.',
            'Liderança técnica no ciclo completo das soluções, aplicando práticas de segurança, desempenho, escalabilidade e qualidade de código.'] },
        { cargo: 'Técnico de TI', periodo: 'abr/2018 – abr/2020 (2a 1m)', empresa: 'Apoio Informática', contexto: 'Paulínia, SP', itens: [
            'Administração de servidores Linux, bancos de dados e ambientes de virtualização (XenServer, Proxmox VE).',
            'Implantação de firewalls pfSense, suporte a usuários e manutenção de infraestrutura corporativa.'] },
        { cargo: 'Estagiário de TI', periodo: 'jun/2017 – abr/2018 (11m)', empresa: 'Unicamp', contexto: 'Campinas e Região', itens: ['Suporte técnico a colaboradores e manutenção de sistemas e equipamentos em ambiente hospitalar.'] },
        { cargo: 'Estagiário', periodo: 'set/2016 – mai/2017 (9m)', empresa: 'Be Create', contexto: 'Campinas e Região', itens: ['Desenvolvimento de websites em WordPress/PHP, edição multimídia e copywriting para campanhas de marketing digital.'] }
    ] as Experiencia[],
    competencias: [
        { grupo: 'Backend', itens: ['PHP (5.5 a 8.3)', 'Slim Framework', 'Java', 'Python', 'Django', 'Node.js', 'Express.js', 'APIs REST'] },
        { grupo: 'Frontend', itens: ['React', 'React Native', 'Vue 3', 'Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS/Sass'] },
        { grupo: 'Dados e cache', itens: ['PostgreSQL', 'MySQL/MariaDB', 'MongoDB', 'SQLite', 'Redis'] },
        { grupo: 'Cloud e DevOps', itens: ['AWS', 'Docker', 'CI/CD', 'GitHub Actions', 'Jenkins', 'Linux', 'pfSense'] },
        { grupo: 'Observabilidade', itens: ['Grafana', 'Prometheus'] },
        { grupo: 'Integrações e mensageria', itens: ['Twilio (SMS/WhatsApp)', 'Integrações entre sistemas'] },
        { grupo: 'Inteligência Artificial', itens: ['Análise', 'Desenvolvimento', 'Revisão e refatoração', 'Documentação', 'Automação de código'] },
        { grupo: 'Práticas', itens: ['POO', 'Arquitetura modular', 'Segurança', 'Performance', 'Escalabilidade', 'Clean Code', 'Multi-tenancy', 'Row-Level Security (RLS)', 'Auditoria de dados'] }
    ],
    projetos: [
        { titulo: 'Plataforma de Entregas Rápidas', ano: '2020', stack: ['PHP', 'Slim', 'Vue.js', 'Google Maps API'],
            texto: 'Plataforma de entregas rápidas e valorização de motoboys, desenvolvida integralmente sozinho (requisitos, PO, QA e Full Stack), com três modalidades de serviço (econômico, normal, urgente), rastreamento de pedidos em tempo real com integração à API do Google Maps e função de combinação de entregas para otimização de rotas.',
            cv: 'Plataforma de entregas e valorização de motoboys, feita sozinho (requisitos, PO, QA e Full Stack): três modalidades de serviço, rastreamento em tempo real com Google Maps e combinação de entregas para otimizar rotas.' },
        { titulo: 'Sistema de Controle de Ponto', ano: '2020', stack: ['Python', 'Django', 'React', 'React Native'],
            texto: 'Sistema de controle de jornada com áreas distintas para colaborador e gestor, desenvolvido integralmente sozinho (requisitos, PO, QA e Full Stack), com versões web e mobile.',
            cv: 'Controle de jornada com áreas de colaborador e gestor, web e mobile, feito sozinho de ponta a ponta.' },
        { titulo: 'Landing Pages, Agência de Marketing', ano: '2019', stack: ['React', 'Vue.js'],
            texto: 'Desenvolvimento frontend de landing pages de alta conversão em React.js e Vue.js para clientes dos setores financeiro, hotelaria e de energia eólica.',
            cv: 'Landing pages de alta conversão em React.js e Vue.js para os setores financeiro, hotelaria e energia eólica.' },
        { titulo: 'Sistema para Clínica Veterinária', ano: '2017–2018', stack: ['PHP', 'Slim', 'Vue.js', 'PostgreSQL', 'RLS'],
            texto: 'Sistema completo de gestão veterinária multi-tenant, com agendamentos, prontuário clínico, controle de estoque e financeiro, integração à API do Google Maps para logística do serviço de busca e entrega de pets. Modelagem própria do banco em PostgreSQL, com auditoria de dados e Row-Level Security (RLS) para isolamento de dados entre clientes.',
            cv: 'Gestão veterinária multi-tenant: agendamentos, prontuário, estoque, financeiro e logística de busca e entrega de pets com Google Maps; PostgreSQL com auditoria e Row-Level Security (RLS).' },
        { titulo: 'Gestão para Loja de Material de Construção', ano: '2015–2018', stack: ['Angular', 'Java', 'MySQL'],
            texto: 'Sistema de gerenciamento feito do zero por mim, com manutenção e melhorias contínuas de 2015 a 2018. Orçamentos com validade convertidos em pedido com um clique; venda assistida (balcão e caixa) em múltiplas unidades de medida (metros, m², m³, quilos, caixas); estoque físico x disponível (empenhado), lotes e tonalidades e alerta de estoque mínimo; agendamento e roteirização de entregas, separação de mercadorias e retirada posterior; crediário próprio, cotação de compras e faturamento quinzenal ou mensal.',
            cv: 'Gestão para loja de material de construção, feita do zero e mantida por 3 anos: orçamentos e pedidos, múltiplas unidades de medida, estoque (lotes e empenhado), entregas e crediário.' },
        { titulo: 'Gestão para Loja de Roupas', ano: '2010–2015', stack: ['Angular', 'PHP', 'PostgreSQL'],
            texto: 'Sistema para loja de roupas (varejo de moda), freelancer para um amigo, com suporte ao sistema de 2010 a 2015. Grade de produtos (cor x tamanho) com código de barras por variação; coleções e estações; PDV com comissões, histórico do cliente (CRM) e cupom de troca; controle de condicional (leva em casa) e trocas com vale-crédito; cashback e promoções automatizadas; contas a receber de cartões e sugestão de compras por giro (curva A).',
            cv: 'Gestão para loja de roupas (freelancer, suporte de 2010 a 2015): grade cor x tamanho, PDV com comissões, condicional, trocas com vale-crédito, cashback e compras por giro.' },
        { titulo: 'Sistema de Chamados (Help Desk)', ano: '2006–2010', stack: ['CakePHP', 'PHP', 'MySQL'],
            texto: 'Sistema de abertura de chamados criado para a empresa de TI em que eu atuava no suporte, quando surgiu a oportunidade. Abertura por portal web e e-mail com formulários por tipo de problema e anexos; roteamento por regras, prioridades e prazos de atendimento (SLA); histórico centralizado, notificações de mudança de status e base de conhecimento; painéis com tempo médio de atendimento e volume de chamados.',
            cv: 'Sistema de chamados (Help Desk) criado para a empresa de TI em que atuava no suporte: roteamento, prioridades e SLA, histórico, notificações e painéis de atendimento.' },
        { titulo: 'Sites e Blogs (início da carreira)', ano: '2003–2006', stack: ['WordPress', 'PHP', 'HTML', 'JavaScript'],
            texto: 'Início da carreira: criação de diversos sites, entre eles sites pessoais com blog e páginas de divulgação de pousadas e serviços, com WordPress, PHP, HTML e JavaScript.' }
    ] as Projeto[],
    dominio: 'GovTech: sistemas de saúde (hospitais e UPAs municipais) e de educação (rede municipal de ensino) contratados por prefeituras via licitação; sistemas de gestão (ERP/CRM), dashboards gerenciais e indicadores. Varejo (material de construção e moda), logística e delivery (rastreamento em tempo real, otimização de rotas), controle de jornada/RH, saúde animal (sistemas veterinários multi-tenant), help desk, e-commerce e marketplaces, gateways de pagamento, automação de processos administrativos.',
    formacao: [
        { curso: 'Análise e Desenvolvimento de Sistemas', onde: 'Centro Universitário Salesiano de São Paulo', ano: '2017–2020' },
        { curso: 'Bacharelado em Administração', onde: 'Anhanguera Educacional', ano: '2010–2014' }
    ],
    idiomas: [{ nome: 'Inglês', nivel: 'Leitura técnica; conversação básica' }],
    adicional: [{ tech: 'Laravel', uso: 'Projetos freelance/pessoais' }, { tech: 'Spring Boot', uso: 'Estudo autônomo' }]
}

const en: typeof pt = {
    ui: {
        nav: ['Home', 'Services', 'About', 'Experience', 'Projects', 'Contact'],
        cargo: 'Senior & Tech Lead', h1: 'Full Stack Developer', ola: "Hi, I'm",
        falar: 'Get in touch', baixar: 'Download CV', cvArquivo: './Fabiano-CV-en.pdf', cvNome: 'Fabiano-Basso-Antonio-CV-EN.pdf',
        whatsapp: wa("Hi Fabiano! I saw your portfolio and I'd like to talk."), local: 'Florianópolis, SC, Brazil',
        servicosT: 'Services', servicosS: 'From database to interface, focused on security, performance and scalability.',
        sobreT: 'About me', expT: 'Experience', expS: 'GovTech, management systems, retail, logistics, animal health and e-commerce.',
        formT: 'Education, languages and additional knowledge', idiomasT: 'Languages', adicT: 'Additional knowledge',
        projT: 'Projects', projS: 'Systems and websites built end to end throughout my career. Confidential projects (NDA).',
        todos: 'All', filtrar: 'Filter projects by technology',
        contT: 'Get in touch', contS: 'A job, a project or an idea to get off the ground: reach out and I will reply.',
        nome: 'Name', email: 'E-mail', assunto: 'Subject', msg: 'Message...', assuntos: ['Job opportunity', 'Freelance project', 'Other'],
        enviar: 'Send by e-mail', mailSub: 'Contact from portfolio', trocar: 'PT', trocarRotulo: 'Mudar para português',
        numeros: [['20+', 'Years in tech'], ['4+', 'Years in GovTech'], ['2', 'Systems: health and education']],
        servicos: [
            ['Management systems', 'Custom ERP and CRM with access control, reports and automated administrative routines.'],
            ['Dashboards and metrics', 'Management panels that turn operational data into decisions.'],
            ['REST APIs and integrations', 'Integration between internal systems and external services, including Twilio messaging (SMS/WhatsApp).'],
            ['Web and mobile', 'Responsive applications and apps with React, Vue 3, Angular, TypeScript and React Native.'],
            ['E-commerce and payments', 'Stores, marketplaces and payment gateway integration.'],
            ['Automation and DevOps', 'Docker, CI/CD and AWS for reliable delivery, with Grafana and Prometheus observability.']
        ],
        destaques: [['PHP', 'PHP', 'from 5.5 to 8.3'], ['JS', 'JavaScript and TypeScript', 'React, Vue, Angular, Node.js'], ['Py', 'Python and Java', 'Django and management systems'], ['DB', 'Data', 'PostgreSQL, MySQL, Redis'], ['Ops', 'Cloud and DevOps', 'AWS, Docker, CI/CD']],
        cv: { contato: 'Contact', comp: 'Technical skills', idiomas: 'Languages', form: 'Education', adic: 'Additional knowledge', resumo: 'Summary', exp: 'Professional experience', proj: 'Selected projects', dom: 'Business domain', cargo: 'Senior Full Stack Developer & Tech Lead', introProj: 'Freelance developer since 2003. Confidential projects (NDA); representative selection.' }
    },
    resumo: {
        destaque: 'Programming since 2003, full time in the field since 2016.',
        texto: [
            'Senior Full Stack Developer and Tech Lead with over 20 years of exposure to technology: programming since 2003 and, since 2016, fully dedicated to a software development career. Experience in development, technical leadership, support and infrastructure.',
            'In recent years, I have worked at private technology companies (GovTech) hired through public bidding by city governments, building health systems (used by municipal hospitals and emergency care units) and education systems (used by the municipal school network). Experience in web applications, integrations, dashboards and management systems, with PHP (from legacy 5.5 to modern 8.3), JavaScript/TypeScript, React, Vue, Angular, Java, Node.js, PostgreSQL, MySQL/MariaDB, MongoDB, Redis, AWS, Docker and CI/CD. Delivered retail management systems end to end, on my own.',
            'I use Artificial Intelligence in software development to support analysis, implementation, code review and refactoring, troubleshooting, documentation and automation, always keeping technical validation and accountability.'
        ]
    },
    experiencias: [
        { cargo: 'Full Stack Developer', periodo: 'Dec/2025 – present', empresa: 'Startup (Confidential)', contexto: 'GovTech · São Paulo area', itens: [
            'Private technology company hired by a city government through public bidding; working on the education system used by the municipal school network.',
            'Development of web applications, management dashboards, REST APIs and integrations with internal systems and external services, including Redis (cache) and AWS (cloud infrastructure), and messaging integrations via Twilio (SMS/WhatsApp); database modeling and optimization.',
            'Implementation of automations and responsive interfaces focused on performance, security, scalability and code quality; use of AI to support analysis, review and documentation.'] },
        { cargo: 'Project Lead Developer | Full Stack', periodo: 'Oct/2021 – Nov/2025 (4y 2m)', empresa: 'Troupe Tecnologia', contexto: 'GovTech · São Paulo area', itens: [
            'Over four years at a private technology company hired by city governments through public bidding, working on two systems: health (used by municipal hospitals and emergency care units) and education (used by the municipal school network).',
            'Development and maintenance of web applications, management systems, dashboards, REST APIs and system integrations, with database modeling and optimization.',
            'Technical leadership across the full solution lifecycle, applying security, performance, scalability and code quality practices.'] },
        { cargo: 'IT Technician', periodo: 'Apr/2018 – Apr/2020 (2y 1m)', empresa: 'Apoio Informática', contexto: 'Paulínia, SP', itens: [
            'Administration of Linux servers, databases and virtualization environments (XenServer, Proxmox VE).',
            'pfSense firewall deployment, user support and corporate infrastructure maintenance.'] },
        { cargo: 'IT Intern', periodo: 'Jun/2017 – Apr/2018 (11m)', empresa: 'Unicamp', contexto: 'Campinas area', itens: ['Technical support for staff and maintenance of systems and equipment in a hospital environment.'] },
        { cargo: 'Intern', periodo: 'Sep/2016 – May/2017 (9m)', empresa: 'Be Create', contexto: 'Campinas area', itens: ['Website development in WordPress/PHP, multimedia editing and copywriting for digital marketing campaigns.'] }
    ],
    competencias: [
        { grupo: 'Backend', itens: ['PHP (5.5 to 8.3)', 'Slim Framework', 'Java', 'Python', 'Django', 'Node.js', 'Express.js', 'REST APIs'] },
        { grupo: 'Frontend', itens: ['React', 'React Native', 'Vue 3', 'Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS/Sass'] },
        { grupo: 'Data and cache', itens: ['PostgreSQL', 'MySQL/MariaDB', 'MongoDB', 'SQLite', 'Redis'] },
        { grupo: 'Cloud and DevOps', itens: ['AWS', 'Docker', 'CI/CD', 'GitHub Actions', 'Jenkins', 'Linux', 'pfSense'] },
        { grupo: 'Observability', itens: ['Grafana', 'Prometheus'] },
        { grupo: 'Integrations and messaging', itens: ['Twilio (SMS/WhatsApp)', 'System integrations'] },
        { grupo: 'Artificial Intelligence', itens: ['Analysis', 'Development', 'Review and refactoring', 'Documentation', 'Code automation'] },
        { grupo: 'Practices', itens: ['OOP', 'Modular architecture', 'Security', 'Performance', 'Scalability', 'Clean Code', 'Multi-tenancy', 'Row-Level Security (RLS)', 'Data auditing'] }
    ],
    projetos: [
        { titulo: 'Express Delivery Platform', ano: '2020', stack: pt.projetos[0].stack,
            texto: 'Express delivery platform that rewards motorcycle couriers, built entirely on my own (requirements, PO, QA and Full Stack), with three service levels (economy, standard, urgent), real-time order tracking with Google Maps API integration and a delivery-batching feature for route optimization.',
            cv: 'Delivery platform that rewards couriers, built solo (requirements, PO, QA, Full Stack): three service levels, real-time tracking with Google Maps and delivery batching for route optimization.' },
        { titulo: 'Time Tracking System', ano: '2020', stack: pt.projetos[1].stack,
            texto: 'Work-hours tracking system with separate areas for employees and managers, built entirely on my own (requirements, PO, QA and Full Stack), with web and mobile versions.',
            cv: 'Work-hours tracking with employee and manager areas, web and mobile, built solo end to end.' },
        { titulo: 'Landing Pages, Marketing Agency', ano: '2019', stack: pt.projetos[2].stack,
            texto: 'Frontend development of high-conversion landing pages in React.js and Vue.js for clients in finance, hospitality and wind energy.',
            cv: 'High-conversion landing pages in React.js and Vue.js for finance, hospitality and wind energy clients.' },
        { titulo: 'Veterinary Clinic System', ano: '2017–2018', stack: pt.projetos[3].stack,
            texto: 'Complete multi-tenant veterinary management system with scheduling, clinical records, inventory and financial control, and Google Maps API integration for the pet pick-up and delivery service. Custom PostgreSQL data model with data auditing and Row-Level Security (RLS) to isolate data between clients.',
            cv: 'Multi-tenant veterinary management: scheduling, records, inventory, finance and pet pick-up/delivery logistics with Google Maps; PostgreSQL with auditing and Row-Level Security (RLS).' },
        { titulo: 'Building Materials Store Management', ano: '2015–2018', stack: pt.projetos[4].stack,
            texto: 'Management system built from scratch by me, with continuous maintenance and improvements from 2015 to 2018. Quotes with expiry dates converted to orders in one click; assisted sales (counter and checkout) in multiple units of measure (meters, m², m³, kilos, boxes); physical vs. available stock (committed), lots and shades, and minimum-stock alerts; delivery scheduling and routing, order picking and later pick-up; in-house credit, purchase quotations and biweekly or monthly invoicing.',
            cv: 'Management system for a building materials store, built from scratch and maintained for 3 years: quotes and orders, multiple units of measure, stock (lots, committed), deliveries and in-house credit.' },
        { titulo: 'Clothing Store Management', ano: '2010–2015', stack: pt.projetos[5].stack,
            texto: 'System for a clothing store (fashion retail), freelance work for a friend, with ongoing support from 2010 to 2015. Product grid (color x size) with barcode per variation; collections and seasons; POS with commissions, customer history (CRM) and exchange vouchers; take-home "on approval" control and exchanges with store credit; cashback and automated promotions; card receivables and purchase suggestions by turnover (A-curve).',
            cv: 'Clothing store management (freelance, support 2010 to 2015): color x size grid, POS with commissions, on-approval control, exchanges with store credit, cashback and turnover-based purchasing.' },
        { titulo: 'Help Desk Ticketing System', ano: '2006–2010', stack: pt.projetos[6].stack,
            texto: 'Ticketing system built for the IT company where I worked in support, when the opportunity came up. Tickets opened by web portal and e-mail with forms per issue type and attachments; rule-based routing, priorities and service-level deadlines (SLA); centralized history, status-change notifications and a knowledge base; dashboards with average handling time and ticket volume.',
            cv: 'Help desk ticketing system built for the IT company where I worked in support: routing, priorities and SLA, history, notifications and service dashboards.' },
        { titulo: 'Websites and Blogs (early career)', ano: '2003–2006', stack: pt.projetos[7].stack,
            texto: 'Start of my career: built many websites, including personal sites with blogs and promotional pages for inns and services, using WordPress, PHP, HTML and JavaScript.' }
    ],
    dominio: 'GovTech: health systems (municipal hospitals and emergency care units) and education systems (municipal school network) hired by city governments through public bidding; management systems (ERP/CRM), management dashboards and indicators. Retail (building materials and fashion), logistics and delivery (real-time tracking, route optimization), time tracking/HR, animal health (multi-tenant veterinary systems), help desk, e-commerce and marketplaces, payment gateways, administrative process automation.',
    formacao: [
        { curso: 'Systems Analysis and Development', onde: 'Centro Universitário Salesiano de São Paulo', ano: '2017–2020' },
        { curso: "Bachelor's in Business Administration", onde: 'Anhanguera Educacional', ano: '2010–2014' }
    ],
    idiomas: [{ nome: 'English', nivel: 'Technical reading; basic conversation' }],
    adicional: [{ tech: 'Laravel', uso: 'Freelance/personal projects' }, { tech: 'Spring Boot', uso: 'Self-study' }]
}

export const content: Record<Lang, typeof pt> = { pt, en }
