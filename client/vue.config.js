module.exports = {
    devServer: {
        "proxy": {
          "/api/*": {
          "target": 'http://myplate.local',
          secure: false,
          https: false
          },
        },
        port: 5001,
        https: false,
        disableHostCheck: true,
        headers: {
          'Access-Control-Allow-Origin': '*'            
        }
    },
    // ...
  }