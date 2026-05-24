export interface GalleryProject {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const galleryProjects: GalleryProject[] = [
  {
    id: 1,
    title: 'Urban Escape',
    description: 'A modern urban bedroom setting with soft industrial accents',
    image: '/images/2bhk.avif',
  },
  {
    id: 2,
    title: 'Moonlit Dream',
    description: 'A serene and dreamy bedroom with moon and stars theme',
    image: '/images/3bhk.avif',
  },
  {
    id: 3,
    title: 'Vintage Elegance',
    description: 'An elegant bedroom with vintage furniture and décor',
    image: '/images/4bhk.avif',
  },
  {
    id: 4,
    title: 'Cozy Retreat',
    description: 'A cozy and inviting bedroom with warm tones',
    image: '/images/5bhk.avif',
  },
  {
    id: 5,
    title: 'Minimalist Haven',
    description:
      'A simplified and clutter-free space for a peaceful atmosphere',
    image: '/images/3bhk.avif',
  },
  {
    id: 6,
    title: 'Luxe Serenity',
    description: 'A luxurious retreat blending comfort with modern elegance',
    image: '/images/4bhk.avif',
  },
];
