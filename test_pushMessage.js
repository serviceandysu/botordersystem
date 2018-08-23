'use strict'
const line = require('./index')

// init with auth token
line.init({
  accessToken: '{249P8WysFwyn7jWTU9Ibl8lVi465CaxqiIDAkOwScPP8hNUxKcXH5j+XN+O3jGzHyDGF9qRDtQWApyPKFcywzvADeU8lBfrOpakV91E7GuBisqZMJ96i6RrQOLENZ3Ef1GWKWOJ9by7uONRsWoJrNgdB04t89/1O/w1cDnyilFU=}',
  // (Optional) for webhook signature validation
  channelSecret: '{77cb22a8bb719dafd11d9739d3510584}'
})

line.client
  .pushMessage({
    to: '{YOUR_MID}',
    messages:[
        {
            "type":"text",
            "text":"Hello, world1"
        },
        {
            "type":"text",
            "text":"Hello, world2"
        }
    ]
  })
  .then(() => console.log({success: true}))
  .catch(err => console.log(err))
