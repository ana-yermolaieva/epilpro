const { createFilePath } = require("gatsby-source-filesystem");
const path = require('path');

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === "MarkdownRemark") {
        const slug = createFilePath({ node, getNode, basePath: "posts"});
        createNodeField({
            node,
            name: "slug",
            value: slug
        })
    }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return graphql(`
    {
        allWpPost {
            nodes {
                slug
            }
        }
    }
    `).then(result => {
        result.data.allWpPost.nodes.forEach((node) => {
            createPage({
                path: `blog/${node.slug}`,
                component: path.resolve('./src/containers/Blog/BlogPost.jsx'),
                context: {
                    slug: node.slug
                }
            })
        });
    })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html" || stage === "develop-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /bad-module/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
  };

  /**
 * Workaround for missing sitePage.context:
 * Used for generating sitemap with `gatsby-plugin-react-i18next` and `gatsby-plugin-sitemap` plugins
 * https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v3-to-v4/#field-sitepagecontext-is-no-longer-available-in-graphql-queries
 */
exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    createTypes(`
    type SitePage implements Node {
      context: SitePageContext
    }
    type SitePageContext {
      i18n: i18nContext
    }
    type i18nContext {
        language: String,
        languages: [String],
        defaultLanguage: String,
        originalPath: String
        routed: Boolean
    }
  `)
}