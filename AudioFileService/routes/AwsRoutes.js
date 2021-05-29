const router = module.exports = require('express')()
const AwsClient = require('../clients/S3Client');

router.get('/audio/:audioObjectId', async (req, res) => {
    try {
        console.log("hitting endpoint")
        // pass response object and respond with contents of object from bucket ;
       await AwsClient.getObject(req.params.audioObjectId, res)
    } catch (error) {
        throw new Error ("Could not retrieve file from s3 " + error);
    }
})

router.post('/audio', (req, res) => {
    console.log(req.body);
    AwsClient.postObject(req.body.fileId, req.body.body, res)
})
