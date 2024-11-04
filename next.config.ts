module.exports = {
    /**
     * @param {{ module: { rules: { test: RegExp; use: string[]; }[]; }; }} config
     */
    webpack(config: { module: { rules: { test: RegExp; use: string[]; }[]; }; }) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
      return config;
    },
  };