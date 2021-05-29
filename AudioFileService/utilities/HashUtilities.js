const argon2 = require('argon2');

const hashValue =  async (value) =>{ 
    try {
        const hash = await argon2.hash(value);
        return hash;
    } catch (err) {
        throw err;
    }
}

const verify = async (passwordHash, value) => {
    try {
        if(await argon2.verify( passwordHash , value)) {
            return true
        } else {
            return false
        }
    } catch (error) {
        console.log("Returning false due to argon package error " + error);
        return false
    }
}

module.exports = {
    hashValue,
    verify
}