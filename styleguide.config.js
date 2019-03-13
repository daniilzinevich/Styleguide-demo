module.exports = {
  title: 'Components',
  version: process.env.npm_package_version,
  assetsDir: './src/assets',
  components: './src/components/[A-Z]*.vue',
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css	',
        },
      ],
    },
  },
}