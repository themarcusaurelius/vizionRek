var client = require('./connection.js');

async function putMapping() {
    console.log("Creating Mapping index");

    client.indices.putMapping({  
    index: 'rekognition',
    type: 'image',
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
    });
}

putMapping()

