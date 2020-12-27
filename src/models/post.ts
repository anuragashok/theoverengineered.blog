import { Author } from './author';

export type Post = {
  title: string;
  slug: string;
  heroImageUrl: string;
  description: string;
  body: string;
  author: Author;
  publishDate: string;
  tags: string[];
  type: string;
};
