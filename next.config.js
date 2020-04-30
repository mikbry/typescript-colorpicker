var path = require('path');

module.exports = {
  webpack(config, options) {
    const { dir, defaultLoaders } = options
    config.resolve.extensions.push('.ts', '.tsx')
    if (options.isServer) {
      config.externals = [
        'react',
        'react-dom',
        'styled-components',
        'styled-jsx',
        '@material-ui/core',
        ...config.externals
      ];
    }
    config.module.rules.push({
      test: /\\.+(ts|tsx)$/,
      include: [dir],
      exclude: /node_modules/,
      use: [
        defaultLoaders.babel,
        { loader: 'ts-loader', options: { transpileOnly: true } }
      ]
    }
    )
    return config
  }
}