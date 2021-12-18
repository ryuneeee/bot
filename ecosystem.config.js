module.exports = {
    apps : [
        {
          name: "bot",
          script: "./dist/index.js",
          watch: true,
          env: {
              "PORT": 3000,
              "NODE_ENV": "development"
          },
          env_production: {
              "PORT": 3000,
              "NODE_ENV": "production",
          }
        }
    ]
  }