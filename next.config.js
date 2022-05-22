module.exports = {
  swcMinify: true,
  compiler: {
    styledComponents: true,
    removeConsole: true,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./utils/sitemap");
    }

    return config;
  },
  // i18n: {
  //   locales: ["en", "de"],
  //   defaultLocale: "en",
  //   localeDetection: true,
  // },
};
