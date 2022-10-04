export interface Post {
  id: number;
  mainImage: string;
  title: string;
  author: string;
  description: string;
  date: string;
  body: string;
  categories: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
}
