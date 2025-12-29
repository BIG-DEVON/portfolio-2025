import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      description: 'The unique URL for this project (e.g. /work/neon-brand)',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'e.g. Branding, Web Design, 3D',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true, // Allows you to crop the image in the dashboard
      },
    }),
    defineField({
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        layout: 'grid',
      },
      description: 'Upload multiple screenshots or photos for the case study showcase.',
    }),

    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      description: 'Used on the home page gallery.',
    }),
    defineField({
      name: 'content',
      title: 'Full Story',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
      description: 'The long case study text and extra images.',
    }),
  ],
})