var client = require('./connection.js');

client.ping((error) => {
    if (error) {
      console.trace('elasticsearch cluster is down!');
    } console.log('All is well');
});