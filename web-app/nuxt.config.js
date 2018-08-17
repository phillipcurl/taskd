module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s | Taskd',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        meta: 'description',
        content: 'Nuxt.js project'
      },
      {
        property: 'og:image',
        content: 'https://user-images.githubusercontent.com/904724/26879447-689b56a8-4b91-11e7-968f-5eea1d6c71b4.png'
      },
      {
        property: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        property: 'twitter:site',
        content: '@company'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  /*
   ** Global CSS
   */
  css: ['~assets/scss/main.scss'],

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#19a974'
  },

  /*
   ** Customize the progress-bar color
   */
  manifest: {
    name: 'Company | Company Slogan',
    short_name: 'Company',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#19a974',
    description: 'Long company description.',
    related_applications: [{
        platform: 'web'
      },
      {
        platform: 'play',
        url: 'https://play.google.com/store/apps/details?id=company.android.id'
      }
    ]
  },
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa',
    '@nuxtjs/apollo',
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '~/modules/auth/module.js'
    // ['@nuxtjs/google-analytics', { ua: 'UA-{{ID}}' }]
  ],
  plugins: [
    '~/plugins/vuex-router-sync',
    '~/plugins/filters'
  ],
  router: {
    middleware: ['https', 'auth']
  },
  // Give apollo module options
  apollo: {
    clientConfigs: {
      default: '~/apollo/client-configs/default.js'
    }
  },
  build: {
    extend(config, ctx) {
      const urlLoader = config.module.rules.find(
        rule => rule.loader === 'url-loader'
      );
      urlLoader.test = /\.(png|jpe?g|gif)$/;

      config.module.rules.push({
        test: /\.svg$/,
        loader: 'svg-inline-loader',
        exclude: /node_modules/
      });

      return config;
    }
  }
};