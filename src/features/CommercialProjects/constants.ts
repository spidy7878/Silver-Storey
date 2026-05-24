export interface GalleryProject {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const galleryProjects: GalleryProject[] = [
  {
    id: 1,
    title: 'Corporate Suite',
    description:
      'A sleek and modern corporate office with open-plan workspaces',
    image: '/images/2bhk.avif',
  },
  {
    id: 2,
    title: 'Boutique Lobby',
    description:
      'An elegant hotel lobby with premium finishes and warm lighting',
    image: '/images/3bhk.avif',
  },
  {
    id: 3,
    title: 'Executive Lounge',
    description:
      'A sophisticated executive lounge blending comfort with luxury',
    image: '/images/4bhk.avif',
  },
  {
    id: 4,
    title: 'Retail Showroom',
    description:
      'A contemporary retail space designed to elevate the brand experience',
    image: '/images/5bhk.avif',
  },
  {
    id: 5,
    title: 'Conference Hall',
    description: 'A refined conference hall with state-of-the-art aesthetics',
    image: '/images/3bhk.avif',
  },
  {
    id: 6,
    title: 'Sky Office',
    description:
      'A high-rise office interior with panoramic views and minimal design',
    image: '/images/4bhk.avif',
  },
];
