import { HiOutlineDocumentAdd } from 'react-icons/hi';
import { SchemaType } from '@sanity/types';

const Post: SchemaType = {
  name: 'post',
  title: 'Posts',
  icon: HiOutlineDocumentAdd,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'excerpt',
      description: 'Write a short pararaph of this post (For SEO Purposes)',
      title: 'Excerpt',
      rows: 5,
      type: 'text',
      validation: (Rule) =>
        Rule.max(160).error(
          'SEO descriptions are usually better when its below 160',
        ),
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
          options: {
            isHighlighted: true,
          },
        },
      ],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    // {
    //   name: 'content',
    //   title: 'Content',
    //   type: 'text',
    // },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
};

export default Post;
