const User = {
    id : "",
    username: "",
    tracks: [],
    friends: [],
    initUser: (id, username) => {
        this.id = id;
        this.username = username;
        return this;
    }

}

module.exports = {User}