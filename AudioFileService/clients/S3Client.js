const S3 = require("aws-sdk/clients/s3");

const REGION = process.env.AWS_REGION;

// Bucket name is static for now, will require lookup later
const BUCKET_NAME = process.env.BUCKET_NAME;


function getObject (keyName , res) {
        const s3 = new S3({region: REGION});
        const requestParams = {Bucket: BUCKET_NAME, Key: keyName}
        s3.getObject(requestParams, function(err, data) {
            if(err) { 
                console.log(err);
                return res.sendStatus(400);
            } 
            return res.send(data.Body.toString());
        });
}

const postObject = async (keyName,  body, res) => {
    const s3 = new S3({region: REGION});
        const requestParams = {Bucket: BUCKET_NAME, Key: keyName, Body: body}
        s3.putObject(requestParams, (err) => {
            if (err) {
                console.log(err);
                return res.sendStatus(400);
            }
            return res.sendStatus(200);
        });
}

exports.getObject = getObject;
exports.postObject = postObject