export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d1388362eadee2f952248d4',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-rhn2fgqx',
                  apiId: 'e2e88ed3-0c6b-48cc-9718-2a232969ecf8'
                },
                {
                  buildHookId: '5d138836f5ded6f5913a8605',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-t5uk29su',
                  apiId: '7386452b-0b8e-4c99-80e6-240761d5d9b8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/apps4zap/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-t5uk29su.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
