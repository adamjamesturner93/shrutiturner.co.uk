export type Post = {
  title: string;
  date: Date;
  excerpt: string;
  slug: string;
  coverImage: {
    url: string;
  };
  markdown: string;
  photoCredit?: any;
  tagsCollection: string[];
};
