const app = require('express')()
const port = 8001

app.get('/', (req, res) => {res.send('Hello World!')})

app.listen(port, () => {
    console.log('app now listening on port: ' + port)
});