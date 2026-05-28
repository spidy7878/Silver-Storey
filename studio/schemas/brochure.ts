import { defineField, defineType } from 'sanity';

export const brochure = defineType({
  name: 'brochure',
  title: 'Brochure',
  type: 'document',
  fields: [
    defineField({
      name: 'file',
      title: 'Brochure File (PDF)',
      type: 'file',
      options: { accept: '.pdf,.PDF' },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { filename: 'file.asset.originalFilename' },
    prepare({ filename }) {
      return { title: filename ?? 'Brochure' };
    },
  },
});
