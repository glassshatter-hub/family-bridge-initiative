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
    'hero.subtitle': '한인 가정이 미국에서 번영할 수 있도록 옹호, 자원 및 지원을 제공합니다',
    'hero.getHelp': '지금 도움 받기',
    'hero.learnMore': '더 알아보기',
    
    // Mission
    'mission.title': '우리의 미션',
    'mission.text': '한인가정옹호단은 포괄적인 지원 서비스, 옹호 및 커뮤니티 구축을 통해 한인 이민 가정에 힘을 실어주는 데 전념하고 있습니다. 우리는 문화적 격차를 해소하고 가족들이 도전을 헤쳐나가고 새로운 집에서 성공적인 삶을 구축할 수 있도록 자원을 제공합니다.',
    
    // Services
    'services.title': '우리가 하는 일',
    'services.subtitle': '한인 가정의 요구에 맞춘 포괄적인 지원 서비스',
    'services.language.title': '언어 서비스',
    'services.language.desc': '의료, 법률 및 교육 환경을 위한 전문 통역 및 번역 서비스',
    'services.family.title': '가족 지원',
    'services.family.desc': '가족 관계를 강화하고 갈등을 해결하기 위한 상담, 중재 및 자원',
    'services.education.title': '교육 지원',
    'services.education.desc': '학교 시스템 탐색, 튜터링 프로그램 및 대학 준비 지원',
    'services.legal.title': '법률 안내',
    'services.legal.desc': '이민 지원, 문서 준비 및 신뢰할 수 있는 법률 전문가 추천',
    'services.community.title': '커뮤니티 연결',
    'services.community.desc': '커뮤니티 유대를 구축하기 위한 문화 행사, 지원 그룹 및 네트워킹 기회',
    
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
    'contact.title': '연락하기',
    'contact.subtitle': '저희가 도와드리겠습니다. 지원과 안내를 위해 연락주세요.',
    'contact.form.name': '이름',
    'contact.form.email': '이메일',
    'contact.form.phone': '전화번호',
    'contact.form.message': '메시지',
    'contact.form.send': '메시지 보내기',
    'contact.email.title': '이메일 보내기',
    'contact.email.text': '언제든지 이메일을 보내주세요',
    
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
