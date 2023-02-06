/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // https://react-svgr.com/docs/next/
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [ // Se podría usar solo "@svgr/webpack" en esta linea para concluir la configuración de SVGR con Webpack
      {
        loader: "@svgr/webpack",
        options: {
          // para poder dar referencias a los SVG y usar useRef()
          ref: true,
          // ^^^^^^
          // Configuración del plugin SVGO para traer los ID en los SVG:
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      cleanupIDs: {
                        remove: false,
                        // minify: false,
                        // prefix: 'xxx',
                        force: true,
                      },
                    },
                  },
                },
              ],
            },
          },
        },
        // ^^^^^^
      ],
    });
    return config;
  },
};
