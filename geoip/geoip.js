const axios = require('axios')

axios({
    url: 'https://api.muctool.de/whois',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
}).then(res => {
    console.log(res.data)
})