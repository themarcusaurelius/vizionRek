var client = require('./connection.js');

function checkIndices() {
    client.indices.exists({index: 'rekognition'}, (err, res, status) => {
        if (res) {
            console.log('index already exists');
        } else {
            client.indices.create( {index: 'rekognition'}, (err, res, status) => {
            console.log(err, res, status);
        })
      }
    })
};

checkIndices()