var client = require('./connection.js');

client.index({  
  index: 'rekognition',
  id: image[0].public_id,
  type: 'image',
  body: {
  "version": image[0].version,
  "signature": image[0].signature,
  "width": image[0].width,
  "height": image[0].height,
  "resource_type": image[0].resource_type,
  "created_at": image[0].created_at,
  "tags": image[0].tags,
  "bytes": image[0].bytes,
  "etag": image[0].etag,
  "url": image[0].url,
  "secure_url": image[0].secure_url,
  //"results": image[0].info.categorization.aws_rek_tagging.data
  }
}, (err, res, status) => {
  console.log('Photo Uploaded TO Vizion.ai!');
})