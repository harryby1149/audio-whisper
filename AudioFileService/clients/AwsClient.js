const {
    S3Client,
    GetObjectCommand,
    PutObjectCommand
} = require("@aws-sdk/client-s3");

const REGION = process.env.AWS_REGION;

// Bucket name is static for now, will require lookup later
const BUCKET_NAME = process.env.BUCKET_NAME;



const getObject = async (keyName) => {
        const s3 = new S3Client({region: REGION});
        const requestParams = {region: REGION, Bucket: BUCKET_NAME, Key: keyName}
        const getObjectCommand = new GetObjectCommand(requestParams);
        return s3.send(getObjectCommand)
}

const postObject = async (keyName,  body) => {
    const s3 = new S3Client({region: REGION});
        const requestParams = {region: REGION, Bucket: BUCKET_NAME, Key: keyName, Body: body}
        const putObjectCommand = new PutObjectCommand(requestParams);
        return s3.send(putObjectCommand)
}

exports.getObject = getObject;
exports.postObject = postObject