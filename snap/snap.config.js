module.exports = {
  cliOptions: {
    dist: "dist",
    outfileName: "bundle.js",
    src: "src/index.js",
    port: 8082
  },
  bundlerCustomizer: (browserify) => browserify.transform('brfs')
}