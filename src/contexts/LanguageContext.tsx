import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ko';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  en: {
    // Navigation
    'nav.mission': 'Mission',
    'nav.services': 'Services',
    'nav.board': 'Board',
    'nav.contact': 'Contact',
    'nav.getHelp': 'Get Help',
    
    // Hero
    'hero.title': 'Supporting Korean Families in Our Community',
    'hero.subtitle': 'Providing advocacy, resources, and support to help Korean families thrive in America',
    'hero.getHelp': 'Get Help Now',
    'hero.learnMore': 'Learn More',
    
    // Mission
    'mission.title': 'Our Mission',
    'mission.text': 'Korean Families Advocates is dedicated to empowering Korean immigrant families through comprehensive support services, advocacy, and community building. We bridge cultural gaps and provide resources to help families navigate challenges and build successful lives in their new home.',
    
    // Services
    'services.title': 'What We Do',
    'services.subtitle': 'Comprehensive support services tailored to the needs of Korean families',
    'services.language.title': 'Language Services',
    'services.language.desc': 'Professional interpretation and translation services for medical, legal, and educational settings',
    'services.family.title': 'Family Support',
    'services.family.desc': 'Counseling, mediation, and resources to strengthen family relationships and resolve conflicts',
    'services.education.title': 'Education Assistance',
    'services.education.desc': 'Help navigating the school system, tutoring programs, and college preparation support',
    'services.legal.title': 'Legal Guidance',
    'services.legal.desc': 'Immigration assistance, document preparation, and referrals to trusted legal professionals',
    'services.community.title': 'Community Connection',
    'services.community.desc': 'Cultural events, support groups, and networking opportunities to build community ties',
    
    // Board
    'board.title': 'Our Board Members',
    'board.subtitle': 'Dedicated leaders committed to serving our community',
    'board.member1.name': 'Board Member',
    'board.member1.role': 'Board Chair',
    'board.member2.name': 'Board Member',
    'board.member2.role': 'Vice Chair',
    'board.member3.name': 'Board Member',
    'board.member3.role': 'Secretary',
    'board.member4.name': 'Board Member',
    'board.member4.role': 'Treasurer',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'We\'re here to help. Reach out to us for support and guidance.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.email.title': 'Email Us',
    'contact.email.text': 'Send us an email anytime',
    
    // Footer
    'footer.quickLinks': 'Quick Links',
    'footer.contactUs': 'Contact Us',
    'footer.rights': 'All rights reserved.',
  },
  ko: {
    // Navigation
    'nav.mission': '미션',
    'nav.services': '서비스',
    'nav.board': '이사회',
    'nav.contact': '연락처',
    'nav.getHelp': '도움 받기',
    
    // Hero
    'hero.title': '우리 지역사회의 한인 가정을 지원합니다',
    'hero.subtitle': '코리안 패밀리즈 애드보케이츠(Korean Families Advocates)는 미국에서 자녀를 키우는 한국·한인 가정들이 학교, 병원, 복지·법원 등 아동 관련 시스템을 안전하게 이해하고 차별 없이 서비스를 받을 수 있도록 돕는 비영리 단체입니다.',
    'hero.getHelp': '지금 도움 받기',
    'hero.learnMore': '더 알아보기',
    
    // Mission
    'mission.title': '우리의 미션',
    'mission.text': '언어·문화 장벽으로 어려움을 겪는 한국 가정을 지원합니다.\n\n학교, 병원, 아동복지 등 아이와 관련된 결정 과정에서 부모의 목소리가 존중되도록 함께 옆에 서 있습니다.\n\n신뢰할 수 있는 정보와 통역·번역, 동행 지원을 통해 가정이 두려움 없이 질문하고 선택할 수 있는 환경을 만듭니다.',
    
    // Services
    'services.title': '우리가 하는 일',
    'services.subtitle': '한인 가정의 요구에 맞춘 포괄적인 지원 서비스',
    'services.language.title': '통역·번역 지원',
    'services.language.desc': '학교 회의(IEP, 상담, 징계·전학 관련 미팅 등), 병원 진료 설명, 검사 결과 안내, 아동복지국(ACS), 법원, 변호사와의 소통',
    'services.family.title': '동행·옹호(Advocacy) 서비스',
    'services.family.desc': '회의·면담에 함께 참석하여 부모의 입장을 정리해 드리고, 필요한 질문을 같이 준비합니다. 불이익이나 오해가 생기지 않도록 기록과 절차를 함께 확인합니다.',
    'services.education.title': '정보·교육 제공',
    'services.education.desc': '한국어로 된 가이드, 체크리스트, FAQ 제공. 부모 교육 워크숍, 소규모 설명회 개최',
    'services.legal.title': '우리의 약속',
    'services.legal.desc': '비밀 보장: 상담 내용과 서류는 외부에 공유되지 않습니다. 비판 없는 경청: 잘잘못을 따지기보다, 먼저 부모님의 이야기를 끝까지 듣겠습니다.',
    'services.community.title': '문화적 존중',
    'services.community.desc': '한국 문화와 가족의 방식이 존중받을 수 있는 현실적인 해결책을 함께 찾습니다.',
    
    // Board
    'board.title': '이사회 구성원',
    'board.subtitle': '우리 커뮤니티를 위해 헌신하는 리더들',
    'board.member1.name': '이사회 구성원',
    'board.member1.role': '이사회 의장',
    'board.member2.name': '이사회 구성원',
    'board.member2.role': '부의장',
    'board.member3.name': '이사회 구성원',
    'board.member3.role': '총무',
    'board.member4.name': '이사회 구성원',
    'board.member4.role': '재무',
    
    // Contact
    'contact.title': '상담·문의',
    'contact.subtitle': '문의 언어: 한국어 / 영어 모두 가능',
    'contact.form.name': '이름',
    'contact.form.email': '이메일',
    'contact.form.phone': '전화번호',
    'contact.form.message': '메시지',
    'contact.form.send': '메시지 보내기',
    'contact.email.title': '이메일 보내기',
    'contact.email.text': 'info@koreanfamiliesadvocates.org',
    
    // Footer
    'footer.quickLinks': '빠른 링크',
    'footer.contactUs': '연락처',
    'footer.rights': '모든 권리 보유.',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
