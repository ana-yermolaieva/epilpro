const { languages, defaultLanguage } = require('./languages');

module.exports = {
  siteMetadata: {
    title: "Katarina Epil"
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    { resolve: `gatsby-source-wordpress`, 
      options: {
        url: `https://katarinaepil.com/1w2p3/graphql`
      }
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    { resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    { resolve: `gatsby-source-filesystem`,
      options: {
        name: `locale`,
        path: `${__dirname}/locales`,
      },
    },
    { resolve: `gatsby-plugin-react-i18next`,
      options: {
        languages,
        defaultLanguage,
        siteUrl: `https://example.com`,
        i18nextOptions: {
          defaultNS: 'common',
          lowerCaseLng: true,
          saveMissing: false,
          interpolation: {
            escapeValue: false 
          },
          keySeparator: false,
          nsSeparator: false
        },
        pages: [
          {
            matchPath: '/ignored-page',
            languages: ['ua']
          }
        ]
      }
    },
    { resolve: 'gatsby-plugin-sitemap',
      options: {
        // exclude: ['/**/404', '/**/404.html'],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage(filter: {context: {i18n: {routed: {eq: false}}}}) {
              edges {
                node {
                  context {
                    i18n {
                      defaultLanguage
                      languages
                      originalPath
                    }
                  }
                  path
                }
              }
            }
          }
        `,
        serialize: ({site, allSitePage}) => {
          return allSitePage.edges.map((edge) => {
            const {languages, originalPath, defaultLanguage} = edge.node.context.i18n;
            const {siteUrl} = site.siteMetadata;
            const url = siteUrl + originalPath;
            const links = [
              {lang: defaultLanguage, url},
              {lang: 'x-default', url}
            ];
            languages.forEach((lang) => {
              if (lang === defaultLanguage) return;
              links.push({lang, url: `${siteUrl}/${lang}${originalPath}`});
            });
            return {
              url,
              changefreq: 'daily',
              priority: originalPath === '/' ? 1.0 : 0.7,
              links
            };
          });
        }
      }
    },
  ],
}
