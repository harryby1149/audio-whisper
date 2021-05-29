function User(id, username) {
    this.id = id,
    this.username = username,
    this.tracks = [],
    this.friends = []
}

module.exports = User;