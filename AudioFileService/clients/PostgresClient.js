const sql = require('../config/PostgresConfig.js')
const {assertValidUsername} = require('../utilities/PostgresUtilities')
const {hashValue} = require('../utilities/HashUtilities')
const {User} = require('../models/User')

const getUser = async (name) =>  {
    const isValid = assertValidUsername(name);
    if (!isValid) {
        throw "Invalid username";
    }
    const userDeets = await sql`SELECT id, username FROM users`;
    const user = User.initUser(userDeets[0].id, userDeets[0].username);
    const tracks =  await sql `SELECT * FROM tracks WHERE tracks.author_id=${user.id}`
    const friends = await sql `SELECT users.id, users.username 
    FROM users, social_relationships AS sr 
    WHERE (sr.relationship='accepted' 
           AND (sr.initiating_user_id=${user.id} AND sr.receiving_user_id=users.id) 
           OR (sr.receiving_user_id=${user.id} AND sr.initiating_user_id=users.id))`
    user.tracks = tracks
    user.friends = friends
    return user;
}

const getPassword = async (name) => {
    const isUsernameValid = assertValidUsername(name);
    if (!isUsernameValid) {
        throw "Invalid username";
    }
    return await sql`SELECT password_hash FROM users WHERE username=${name}`
}

const postUser = async (name, password) => {
    const isUsernameValid = assertValidUsername(name);
    const isPasswordValid = assertValidUsername(password);
    if( !isUsernameValid || !isPasswordValid) throw "Invalid username or password, aborting the add user function";
    const passwordToSave = await hashValue(password);
    console.log(passwordToSave);
    return await sql`INSERT INTO users(username, password_hash) VALUES (${name}, ${passwordToSave})`;
}

module.exports = {
    getUser,
    getPassword,
    postUser
}