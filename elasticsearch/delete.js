var client = require('./connection.js');

client.indices.delete({index: 'rekognition'},function(err,resp,status) {  
  console.log("delete",resp);
});