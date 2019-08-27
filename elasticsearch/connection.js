var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client( {  
  hosts: [
    "https://vzy7vat14zfu0en1dc:k2jl2t8u98w930bx@espnap.vizion.ai:443"
  ]
});

module.exports = client;  