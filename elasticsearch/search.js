var client = require('./connection.js');

async function getRekognition() {
    await client.search({
        index: 'rekognition',
        type: 'image',
        body: {
          query: {
            match: {
              body: 'ip'
            }
          }
        }
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

getRekognition();