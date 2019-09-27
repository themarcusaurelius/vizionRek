var client = require('./connection.js');

client.indices.create({  
  index: 'rekognition',
  //type: 'image',
  body: {
    properties: {
      "geo_point": { type: "geo_point", store: true, lat_lon: true },
      "ip": { type: "ip" }
    }
  }
  }, (err, res, status) => {
      if (err) {
          console.log(err);
      }
      else {
          console.log('Successfully Created Index', status, res);
      }
},function(err,resp,status) {
  if(err) {
    console.log(err);
  }
  else {
    console.log("create",resp);
  }
});