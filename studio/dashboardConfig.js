export default {
  widgets: [
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
                  buildHookId: '5fd8c4aff371790785f4dd51',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-na7ssc7d',
                  apiId: '8f4a4ef7-3dc3-46c5-a944-bda5be48110c'
                },
                {
                  buildHookId: '5fd8c4b0213e5dfdaeb301f7',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-jnvwse51',
                  apiId: '028a2703-c251-4726-bac1-230c1e31737b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dflm25/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-jnvwse51.netlify.app', category: 'apps'}
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
