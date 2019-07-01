
// emphasis.js
export default {
  name: 'emphasis',
  type: 'object',
  title: 'Emphasis',
  description:
    'The strength of the emphasis put on the contained text',
  fields: [
    {
      name: 'level',
      type: 'string',
      options: {
        list: [
          { value: 'strong', title: 'Strong' },
          { value: 'moderate', title: 'Moderate' },
          { value: 'none', title: 'None' },
          { value: 'reduced', title: 'Reduced' }
        ]
      }
    }
  ]
}
