const sql = require('../config/PostgresConfig.js')
const {assertValidUsername} = require('../utilities/PostgresUtilities')
const {hashValue} = require('../utilities/HashUtilities')

const getUser = async (name) =>  {
    const isValid = assertValidUsername(name);
    if (!isValid) {
        throw "Invalid username";
    }
    return await sql `SELECT id, username FROM users WHERE username=${name}`
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