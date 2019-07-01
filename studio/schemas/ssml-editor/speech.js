// speech.js
export default {
  name: 'speech',
  type: 'array',
  title: 'SSML Editor',
  of: [
    {
      type: 'block',
      styles: [],
      lists: [],
      marks: {
        decorators: [],
        annotations: [
          {type: 'alias'},
          {type: 'emphasis'},
          {type: 'prosody'},
          {type: 'sayAs'}
        ]
      }
    }
  ]
}
