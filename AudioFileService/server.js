require('dotenv').config()
const app = require('express')()
const port = 8001
const AwsClient = require("./clients/AwsClient");

app.get('/audio/:audioObjectId', (req, res) => {
  AwsClient.getObject(req.params.audioObjectId).then((response)=>{
        console.log(response.Body);
        res.send('Hello World!')
    });
})

app.post('/audio', (req, res) => {
    AwsClient.postObject({fileId, body} = req).then((response) =>{
        console.log(response.Body);
    })
})

app.listen(port, () => {
    console.log('app now listening on port: ' + port)
});