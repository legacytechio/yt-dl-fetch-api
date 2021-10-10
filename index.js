const fetch = require('node-fetch')
const fs = require('fs')

fetch('https://m.youtube.com/youtubei/v1/player?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': '95'
    },
    body: JSON.stringify({
        context: {
            client: {
                clientName: 'ANDROID',
                clientVersion: '16.20'
            }
        },
        videoId: 'yNCCOkUlOII'
    })
})
    .then(res => res.json())
    .then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })