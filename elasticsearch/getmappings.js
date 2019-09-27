var client = require('./connection.js');

client.indices.getMapping({  
    index: 'rekognition',
    type: 'image'
  },
function (error,response) {  
    if (error){
      console.log(error.message);
    }
    else {
      console.log("Mappings:\n",response.rekognition.mappings.image.properties);
      
    }
});