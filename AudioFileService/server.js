require('dotenv').config()
const express = require('express');
const app = express();
const port = 8001;
const awsRoutes = require('./routes/AwsRoutes');
const userRoutes = require('./routes/UserRoutes')
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(awsRoutes)
app.use(userRoutes)

app.listen(port, () => {
    console.log('app now listening on port: ' + port)
});