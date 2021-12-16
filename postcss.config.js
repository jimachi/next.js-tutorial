module.exports = {
  plugins: [
    'tailwindcss',
    'postcss-flexbugs-fixes',
    [
      'postcss-present-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false
        }
      }
    ]
  ],
  purge: [
    './pages/**/*.js',
    './components/**/*.js'
  ]
}
