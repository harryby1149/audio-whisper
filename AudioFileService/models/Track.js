function Track (id, author_id, audio_file_key, project_file_key, track_name, track_details) {
    this.id = id,
    this.authorId = author_id,
    this.audioFileKey = audio_file_key,
    this.projectFileKey = project_file_key,
    this.name = track_name,
    this.details = track_details
}

module.exports = Track;