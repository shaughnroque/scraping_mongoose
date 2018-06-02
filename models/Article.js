var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Article = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    note: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }
});

var Article = mongoose.model("Article", Article);
module.exports = Article