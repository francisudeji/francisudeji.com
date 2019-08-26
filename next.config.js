// const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')
const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/,
  options: {
    hastPlugins: [require('mdx-prism')]
  }
})

module.exports = withCSS(
  withMDX({
    pageExtensions: ['js', 'jsx', 'md', 'mdx']
  })
)
