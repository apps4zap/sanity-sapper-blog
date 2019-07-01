// fulfillment.js
export default {
  name: 'fulfillment',
  type: 'document',
  title: 'Fulfillment',
  of: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be short and descriptive'
    },
    {
      name: 'response',
      type: 'speech'
    }
  ]
}
