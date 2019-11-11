const express = require('express');
const axios = require('axios')
const router = express.Router();
const client = require('../../elasticsearch/connection');

const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'dbo4wi1ai', 
    api_key: '447564735638479', 
    api_secret: 'fnfiQzfPWFdEm8ixDZ3wfZBsm74'
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

      var geoip = [];
    
      axios({
        url: 'http://ip-api.io/api/json',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
      })
      .then(res => {
        geoip.push(res.data)

        client.index({ 
          index: 'rekognition',
          id: image[0].public_id,
          type: 'image',
          body: {
            "created_at": image[0].created_at,
            "etag": image[0].tags,
            "url": image[0].url,
            "secure_url": image[0].secure_url,
            "results": image[0].info.categorization.aws_rek_tagging.data,
            "city": geoip[0].city,
            "region": geoip[0].region_name,
            "country": geoip[0].country_name,
            "zip code": geoip[0].zip_code,
            "time zone": geoip[0].time_zone,
            "geo_point": [ geoip[0].latitude, geoip[0].longitude ],
            "ipAdd": geoip[0].ip,
            "ip": geoip[0].ip,
            "location": { 
              lat: geoip[0].latitude, 
              lon: geoip[0].longitude
            }
          },
        }, (err, res, status) => {
            if (res.ok) {
              console.log('Photo Uploaded To Vizion.ai!')
            }

            console.log(err)
            //console.log("This is the data" + JSON.stringify(geoip[0]));
        })
      })
    })
    .catch(err => {
      console.log(err);
    })
})

module.exports = router 