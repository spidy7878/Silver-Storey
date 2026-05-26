export interface SanityImageRef {
  _type: 'image';
  asset: { _ref: string; _type: 'reference' };
}

export interface SanityCategory {
  _id: string;
  name: string;
  price: string;
  image?: SanityImageRef;
  order: number;
}

export interface SanityVideo {
  _id: string;
  title: string;
  youtubeId: string;
  description?: string;
  order: number;
}

export interface SanityGalleryItem {
  _key: string;
  title: string;
  description: string;
  image: SanityImageRef;
}

export interface SanityProjectPage {
  _id: string;
  title: string;
  slug: { current: string };
  heroTitle: string;
  heroSubtitle?: string;
  heroImage?: SanityImageRef;
  gallery: SanityGalleryItem[];
}
