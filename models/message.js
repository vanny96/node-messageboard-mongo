var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MessageSchema = new Schema(
    {
        text: {type: String, minlength: 5},
        user: {type: String, minlength: 5}
    }
)

module.exports = mongoose.model('Message', MessageSchema);