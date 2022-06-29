export default {
  name: 'landingPage',
  title: 'Landing page',
  type: 'document',
  __experimental_actions: ['create', 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'tagLine',
      title: 'Tag Line',
      type: 'string',
    },
    {
      name: 'profileImage',
      title: 'Profile image',
      type: 'image',
      readOnly: false,
      options: {
        hotspot: true,
      },
    },
  ],
}
