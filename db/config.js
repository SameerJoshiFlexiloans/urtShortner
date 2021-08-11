const mongoose = require('mongoose');
const { Schema }=require('mongoose');

const options={useNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect('mongodb+srv://sameers_database:1234@cluster0.fijit.mongodb.net/urlShortner?retryWrites=true&w=majority', options);

const db = mongoose.connection;

const urlSchema = new Schema({
    id:String,
    url:String,
    user:Number
});

const urlShort = mongoose.model('urlshort',urlSchema);

exports.saver = async (id,url,user)=>{
    const doc = urlShort({id:id,url:url,user:user});
    return doc.save();
}

exports.fetchBigUrl = async (id)=>{
    return urlShort.findOne({id:id});
}