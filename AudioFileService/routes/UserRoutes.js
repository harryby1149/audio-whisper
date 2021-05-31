const router = module.exports = require('express')()
const {verify} = require('../utilities/HashUtilities');
const {getPassword, getUserSummary, postUser} = require('../clients/PostgresClient');
const Assertions = require('../utilities/PostgresUtilities');

router.post("/login", async (req, res) => {
    const {username, password} = req.body;
    const passwordHash = await getPassword(username)
    const isVerified = await verify(passwordHash[0].password_hash, password);
    if(isVerified){
        res.status(200)
        res.send(await getUserSummary(username))
    } else {
        res.status(401)
        res.send({error: "Incorrect username or password"})
    }
})

router.post('/user', async (req, res) => {
    const {username, password} = req.body;
    if ( !Assertions.assertValidUsername(username) || !Assertions.assertValidUsername(password) ) {
        return res.status(401).send({message: 'could not create user with invalid username or password'})
    }
    if (await getUser(username).count == 0 ) {
        return res.status(400).send({message: `user with username ${username} all ready exists`})
    } 
    try{
        const userAction = await postUser(username, password).catch(error => {console.log(error)});
        console.log("successfully added user: "+ userAction);
        res.status(200).send({message: 'user successfully added'})
    } catch (error) {
        res.status(500).send({message: "Intenral Server Error"})
    } 
}) 

router.get('/user/:userId', async (req, res) => {
    console.log(req.params.userId)
    const user = await getUserSummary(req.params.userId)
    res.send(user)
})