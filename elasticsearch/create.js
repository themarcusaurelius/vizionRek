var client = require('./connection.js');

client.indices.create({  
  index: 'image'
},function(err,resp,status) {
  if(err) {
    console.log(err);
  }
  else {
    console.log("create",resp);
  }
});