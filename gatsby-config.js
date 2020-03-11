module.exports = {
  siteMetadata: {
    title: `Partha J Borah`,
    description: `Digital product designer and developer, Bengaluru, India`,
    author: `@parthajb`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `partha-jyoti-borah`,
        short_name: `parthajb`,
        start_url: `/`,
        background_color: `#101214`,
        theme_color: `#101214`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `IBM Plex Sans`,
            variants: [`300i`, `400`, `500`]
          },
          {
            family: `IBM Plex Serif`,
            variants: [`400`, `500`]
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
