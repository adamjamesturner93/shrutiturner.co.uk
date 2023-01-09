import { Document } from '@contentful/rich-text-types';

export type Post = {
  title: string;
  date: Date;
  excerpt: string;
  slug: string;
  coverImage: {
    url: string;
  };
  content: {
    json: Document;
    links: { assets: { block: any[] } };
  };
  photoCredit?: any;
  tagsCollection: string[];
};
