var client = require('./connection.js');

client.indices.getMapping({  
    index: 'image',
    type: 'image',
  },
function (error,response) {  
    if (error){
      console.log(error.message);
    }
    else {
      console.log("Mappings:\n",response.gov.mappings.constituencies.properties);
    }
});