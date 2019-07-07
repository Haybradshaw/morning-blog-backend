var Schema = mongoose.Schema

var blogSchema = new Schema({
    title: String,
    name: String,
    post: String,
})

// Compile the schema into a model and export it
module.exports = mongoose.model('Blog', blogSchema)