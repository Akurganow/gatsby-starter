/* eslint-disable global-require */
const aliases = require('./scripts/aliases')

module.exports = {
  siteMetadata: {
    title: 'Gatsby starter',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-purgecss',
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        svgo: true,
        svgoConfig: {
          cleanupIDs: true,
        },
      },
    },

    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-root-import',
      options: aliases,
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby starter',
        short_name: 'Gatsby starter',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'minimal-ui',
        orientation: 'any',
        icons: [
          {
            src: '/favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png',
          },
          {
            src: '/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
          },
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-offline',
  ],
}
