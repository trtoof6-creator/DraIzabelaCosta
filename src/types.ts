export interface ServiceItem {
  id: string;
  title: string;
  details: string[];
}

export interface PracticeArea {
  id: string;
  name: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  city: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}
