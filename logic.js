var mongoose = require('mongoose');
var assert = require('assert');

mongoose.Promise = global.Promise;

var database = mongoose.connect('mongodb://localhost:27017/contact-manager');

function toLower(word){
	return word.toLowerCase();
}

var contactSchema = mongoose.Schema({
	firstname:{
		type: String,
		set: toLower
	},

	lastname:{
		type: String,
		set: toLower
	},

	phone:{
		type: String,
		set: toLower
	},

	email:{
		type: String,
		set: toLower
	},
});


var Contact = mongoose.model('Contact',contactSchema);


var addContact = function(contact){
	Contact.create(contact, function(err){
		//assert.equal(null, err);
		if(err){
			console.log(err);
		}
		console.log('Contact added');
	});
}

var getContact = function(name){

	var searched = new RegExp(name, 'i');      //Ignoring case of name
	Contact.find({$or: [{firstname: searched}, {lastname: searched}]})
	.exec(function(err, contact){
		assert.equal(null, err);
		console.log(contact);
		console.log(`${contact.length} matches`);
	});
}


module.exports = {addContact, getContact};


