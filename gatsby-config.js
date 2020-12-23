module.exports = {
  siteMetadata: {
    title: `Work With Mayowa`,
    description: `My full name is Oluwamayowa Adeyemi but everyone just calls me Mayowa.`,
    author: `@oluwa-nifemi`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        backgroundColor: "transparent",
        quality: 100,
        maxWidth: 4000,
        linkImagesToOriginal: false
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/Article/articleLayout.js`)
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              backgroundColor: "transparent",
              quality: 100,
              maxWidth: 4000,
              linkImagesToOriginal: false
            },
          },
        ],
      }
    }
  ],
}
