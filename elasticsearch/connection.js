var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client({  
  hosts: [
    "https://vzbk7yo4g94tt0hmrx:yl5w5nbernhy3h5l@espnap.vizion.ai:443"
  ],
  log: 'trace'
});

module.exports = client;     