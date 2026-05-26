export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  author?: string;
  publishedAt?: string;
  mainImageUrl?: string;
}

export interface BlogPostFull extends BlogPost {
  body?: any[];
}
