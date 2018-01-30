let mix = require('laravel-mix')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// browser syncr for reloading in dev watch
mix.browserSync(process.env.APP_URL)

// chunks compile path
mix.webpackConfig({
  output: {
    chunkFilename: 'js/chunks/[name].js'
  }
})

// aliases
mix.webpackConfig({
  resolve: {
    alias: {
      'styles': path.resolve('./resources/assets/sass/'),
      'utils': path.resolve('./resources/assets/js/utils')
    }
  }
})

mix.react('resources/assets/js/app.js', 'public/js')
  .sass('resources/assets/sass/app.scss', 'public/css')
