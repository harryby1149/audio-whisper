module.exports = {
    assertValidUsername : (string) => {
        return !string.includes(" ") && string.length > 0;
    }
}

