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
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Work With Mayowa`,
        short_name: `WWM`,
        start_url: `/`,
        background_color: `#f3dbea`,
        theme_color: `#6A2C70`,
        icon: `src/assets/images/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-DMJNVEJ64G", // Google Analytics / GA
        ],
      }
    },
  ],
}
