const mix = require('laravel-mix');

mix.copy('node_modules/bulma_scss/css/bulma.css', 'public/dist')
  .sass('scss/cypher-bulma-utilities.scss', 'public/dist')
  .browserSync({
    proxy: 'http://127.0.0.1:19021',
    files: ["public/**/*"],
    port: 19023,
    ui: {
      port: 19024
    },
    watch: true
  });
