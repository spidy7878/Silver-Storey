export const categoriesQuery = /* groq */ `
  *[_type == "category"] | order(order asc) {
    _id,
    name,
    price,
    image,
    order
  }
`;

export const videosQuery = /* groq */ `
  *[_type == "video"] | order(order asc) {
    _id,
    title,
    youtubeId,
    description,
    order
  }
`;

export const projectPageBySlugQuery = /* groq */ `
  *[_type == "projectPage" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    heroTitle,
    heroSubtitle,
    heroImage,
    "gallery": gallery[] {
      _key,
      title,
      description,
      image
    }
  }
`;

export const allProjectSlugsQuery = /* groq */ `
  *[_type == "projectPage"] { "slug": slug.current }
`;

export const allProjectPagesQuery = /* groq */ `
  *[_type == "projectPage"] | order(title asc) {
    title,
    "slug": slug.current
  }
`;

export const allBlogPostsQuery = /* groq */ `
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    author,
    publishedAt,
    "mainImageUrl": mainImage.asset->url
  }
`;

export const blogPostBySlugQuery = /* groq */ `
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    author,
    publishedAt,
    "mainImageUrl": mainImage.asset->url,
    body
  }
`;

export const allBlogSlugsQuery = /* groq */ `
  *[_type == "blogPost"] { "slug": slug.current }
`;
