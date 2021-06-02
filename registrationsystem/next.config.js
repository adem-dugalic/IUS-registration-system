// const withImages = require("next-images");

// module.exports = withImages();
module.exports = {
  env: {
    MONGO_URI:
      "mongodb+srv://admin:admin@cluster0.amqyj.gcp.mongodb.net/IUSSystem?retryWrites=true&w=majority",
  },
  future: {
    webpack5: true,
  },
  webpack: (config) => {
    // load worker files as a urls with `file-loader`
    config.module.rules.unshift({
      test: /pdf\.worker\.(min\.)?js/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[contenthash].[ext]",
            publicPath: "_next/static/worker",
            outputPath: "static/worker",
          },
        },
      ],
    });

    return config;
  },
};
