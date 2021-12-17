const mongoose = require('mongoose');

const collection = 'users';

const userSchema = {
    name: {type:String, required:[true, 'Name is required']},
    documentId: {type:String, required:[true, 'DocumentId is required']},
    noDocument: {type:String, required:[true, 'No. Document is required'], unique:true},
    birthday: {type:DateView, required:[true, 'Birthday is required']},
    sex: {type:String},
    city: {type:String},
    username: {type:String, required:[true, 'Username is required'], unique:true},
    password:  {type:String, required:[true, 'Password is required']},

}

const options = {
    timestamps:true,
}

const schema = new mongoose.Schema(usersSchema, options);

const User = mongoose.model(collection, schema);

module.exports = User;
