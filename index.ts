export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: {
    title: string;
    content: string;
    faqs: ServiceFAQ[];
  };
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  condition: string;
  text: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ConsultationForm {
  name: string;
  gender: string;
  mobile: string;
  healthConcern: string;
}

export interface BlogPost {
  id: string;
  icon: string;
  date: string;
  title: string;
  excerpt: string;
}