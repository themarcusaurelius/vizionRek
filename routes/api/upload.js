const express = require('express');
const router = express.Router();
const client = require('../../elasticsearch/connection');

const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'ddarvbfef', 
    api_key: '216782351853344', 
    api_secret: 'ew3UlLV4_6-Ft3z9zpVsRpLtpT0'
});

router.post('/', (req, res) => {
  const values = Object.values(req.files)
  const promises = values.map(image => cloudinary.uploader.upload(image.path, 
    { 
      categorization: "aws_rek_tagging",
      auto_tagging: 0.7  
     }
    ))
  Promise
    .all(promises)
    .then(results => res.json(results))
    .catch((err) => res.status(400).json(err))
  
  Promise
    .all(promises)
    .then(image => {
        //console.log(image[0].info.categorization.aws_rek_tagging.data)
        client.index({  
            index: 'rekognition',
            id: '1',
            type: 'image',
            body: {
            "public_id": image[0].public_id,
            "version": image[0].version,
            "signature": image[0].signature,
            "width": image[0].width,
            "height": image[0].height,
            "resource_type": image[0].resource_type,
            "created_at": image[0].created_at,
            "tags": image[0].tags,
            "bytes": image[0].bytes,
            "type": image[0].type,
            "etag": image[0].etag,
            "placeholder": image[0].placeholder,
            "url": image[0].url,
            "secure_url": image[0].secure_url,
            "original_filename": image[0].original_filename,
            "results": image[0].info.categorization.aws_rek_tagging.data
            }
        }, (err, res, status) => {
            console.log('Photo Uploaded TO Vizion.ai!');
        })
    })
    .catch(err => {
      console.log(err);
    })
})

module.exports = router 
