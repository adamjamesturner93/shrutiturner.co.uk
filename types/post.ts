export type Post = {
  title: string;
  date: Date;
  excerpt: string;
  slug: string;
  coverImage: {
    url: string;
  };
  content: any;
  photoCredit?: any;
  tagsCollection: string[];
};
