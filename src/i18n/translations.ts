export type Locale = 'pt' | 'en'

export const translations = {
  pt: {
    nav: {
      whyUs: 'Por que nós',
      stories: 'Histórias',
      method: 'Método',
      bookAssessment: 'Agendar avaliação',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
    },
    hero: {
      badge: 'Confiança em cada braçada',
      title1: 'Confie na água.',
      title2: 'Confie em você.',
      subtitle:
        'Aulas de natação com foco em segurança emocional, superação do medo e aprendizado inclusivo para todas as idades.',
      ctaPrimary: 'Começar sua jornada',
      ctaSecondary: 'Nosso método',
      testimonialQuote: 'Enfim me sinto segura.',
      testimonialName: 'Sarah',
      testimonialRole: 'Iniciante adulta',
      socialProof: 'Mais de',
      socialProofEnd: 'pessoas já nadam com confiança',
      imageAlt: 'Nadadora em ambiente calmo e seguro',
    },
    features: {
      label: 'Por que nós',
      title: 'Muito mais que aulas de natação',
      subtitle:
        'Sabemos que a água pode ser intimidadora. Nosso método transforma medo em liberdade.',
      items: [
        {
          title: 'Segurança emocional em primeiro lugar',
          description:
            'Sua confiança e conforto vêm antes de tudo. Aprenda no seu ritmo, sem pressão.',
        },
        {
          title: 'Turmas pequenas',
          description:
            'Grupos reduzidos para atenção personalizada e um ambiente acolhedor.',
        },
        {
          title: 'Instrutores empáticos',
          description:
            'Formados não só em natação, mas em compreender e acolher a ansiedade na água.',
        },
        {
          title: 'Metodologia comprovada',
          description:
            'Passo a passo que constrói confiança e habilidade ao mesmo tempo.',
        },
      ],
    },
    testimonials: {
      label: 'Histórias reais',
      title: 'Quem superou o medo e encontrou a água',
      subtitle: 'Depoimentos de quem conquistou a confiança e o prazer de nadar.',
      items: [
        {
          quote:
            'Tinha pavor de colocar o rosto na água. Depois de três sessões, já estou nadando e gostando.',
          author: 'Sarah J.',
          role: 'Iniciante adulta',
        },
        {
          quote:
            'A paciência e o acolhimento aqui são únicos. Não só me ensinaram a nadar — me ensinaram a confiar em mim.',
          author: 'Michael T.',
          role: 'Pai de aluna',
        },
        {
          quote:
            'Finalmente um lugar que entende ansiedade. Sem pressão, só apoio. Recomendo muito a Liv2swim.',
          author: 'Emily R.',
          role: 'Ex-nadadora com fobia',
        },
      ],
    },
    cta: {
      title: 'Comece com confiança',
      subtitle:
        'Agende uma sessão de avaliação experimental. Sem compromisso — só a chance de ver como podemos ajudar você ou seu filho a se sentir bem na água.',
      buttonPrimary: 'Agendar sessão experimental',
      buttonSecondary: 'Tirar dúvidas',
      benefits: [
        'Avaliação personalizada com instrutor experiente',
        'Conheça seu possível instrutor pessoalmente',
        'Defina seus objetivos e fale sobre suas preocupações',
      ],
    },
    footer: {
      tagline:
        'Ajudando pessoas a descobrir o prazer de nadar com base em confiança e segurança emocional. Venha para a água.',
      linksTitle: 'Links',
      contactTitle: 'Contato',
      quickLinks: [
        { label: 'Início', href: '#' },
        { label: 'Por que nós', href: '#features' },
        { label: 'Histórias', href: '#testimonials' },
        { label: 'Agendar avaliação', href: '#form' },
      ],
      rights: 'Todos os direitos reservados.',
    },
    form: {
      title: 'Cadastre-se',
      subtitle: 'Preencha seus dados e entraremos em contato para agendar sua avaliação.',
      name: 'Nome',
      namePlaceholder: 'Seu nome completo',
      phone: 'Telefone',
      phonePlaceholder: '(11) 99999-9999',
      level: 'Nível',
      levelPlaceholder: 'Selecione seu nível',
      levels: ['Iniciante', 'Intermediário', 'Avançado'],
      submit: 'Enviar',
      sending: 'Enviando...',
      success: 'Dados enviados! Entraremos em contato em breve.',
      error: 'Não foi possível enviar. Tente novamente ou entre em contato pelo telefone.',
      errorNotConfigured: 'Formulário não configurado. Defina VITE_FORM_SUBMIT_URL.',
    },
  },
  en: {
    nav: {
      whyUs: 'Why Us',
      stories: 'Stories',
      method: 'Method',
      bookAssessment: 'Book Assessment',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    hero: {
      badge: 'Confidence in every stroke',
      title1: 'Trust the water.',
      title2: 'Trust yourself.',
      subtitle:
        'Swimming lessons focused on emotional safety, overcoming fear, and inclusive learning for all ages.',
      ctaPrimary: 'Start your journey',
      ctaSecondary: 'Our method',
      testimonialQuote: 'I finally feel safe.',
      testimonialName: 'Sarah',
      testimonialRole: 'Adult beginner',
      socialProof: 'Over',
      socialProofEnd: 'people now swim with confidence',
      imageAlt: 'Swimmer in a calm and safe environment',
    },
    features: {
      label: 'Why Us',
      title: 'More than just swimming lessons',
      subtitle:
        'We understand that water can be intimidating. Our approach turns fear into freedom.',
      items: [
        {
          title: 'Emotional safety first',
          description:
            'Your confidence and comfort come first. Learn at your own pace, with no pressure.',
        },
        {
          title: 'Small group sizes',
          description:
            'Small groups for personalized attention and a supportive environment.',
        },
        {
          title: 'Empathetic instructors',
          description:
            'Trained not only in swimming but in understanding and supporting water anxiety.',
        },
        {
          title: 'Proven methodology',
          description:
            'A step-by-step approach that builds confidence and skill together.',
        },
      ],
    },
    testimonials: {
      label: 'Real stories',
      title: 'Who overcame fear and found the water',
      subtitle: 'Testimonials from people who gained confidence and joy in swimming.',
      items: [
        {
          quote:
            'I was terrified of putting my face in the water. After three sessions, I was swimming and enjoying it.',
          author: 'Sarah J.',
          role: 'Adult beginner',
        },
        {
          quote:
            'The patience and care here are unique. They didn’t just teach me to swim — they taught me to trust myself.',
          author: 'Michael T.',
          role: 'Parent of student',
        },
        {
          quote:
            'Finally a place that understands anxiety. No pressure, just support. I highly recommend Liv2swim.',
          author: 'Emily R.',
          role: 'Former phobic swimmer',
        },
      ],
    },
    cta: {
      title: 'Start with confidence',
      subtitle:
        'Book an assessment trial session. No commitment — just a chance to see how we can help you or your child feel at ease in the water.',
      buttonPrimary: 'Book trial session',
      buttonSecondary: 'Ask a question',
      benefits: [
        'Personalized assessment with an experienced instructor',
        'Meet your potential instructor in person',
        'Discuss your goals and concerns',
      ],
    },
    footer: {
      tagline:
        'Helping people discover the joy of swimming through confidence and emotional safety. Join us in the water.',
      linksTitle: 'Quick links',
      contactTitle: 'Contact',
      quickLinks: [
        { label: 'Home', href: '#' },
        { label: 'Why Us', href: '#features' },
        { label: 'Stories', href: '#testimonials' },
        { label: 'Book Assessment', href: '#form' },
      ],
      rights: 'All rights reserved.',
    },
    form: {
      title: 'Sign up',
      subtitle: 'Fill in your details and we’ll get in touch to schedule your assessment.',
      name: 'Name',
      namePlaceholder: 'Your full name',
      phone: 'Phone',
      phonePlaceholder: '(555) 123-4567',
      level: 'Level',
      levelPlaceholder: 'Select your level',
      levels: ['Beginner', 'Intermediate', 'Advanced'],
      submit: 'Submit',
      sending: 'Sending...',
      success: 'Submitted! We’ll get in touch soon.',
      error: 'Could not send. Please try again or contact us by phone.',
      errorNotConfigured: 'Form not configured. Set VITE_FORM_SUBMIT_URL.',
    },
  },
} as const

export type TranslationKeys = keyof (typeof translations)['pt']
