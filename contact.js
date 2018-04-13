
var program = require('commander');
var {addContact, getContact} = require('./logic.js');

program
	.version('1.0.0')
	.description('Contact management System');


program
	.command('addContact <firstname> <lastname> <phone> <email>')
	.alias('a')
	.description('Add a contact ')
	.action(function(firstname, lastname, phone, email){
		addContact({firstname, lastname, phone, email});
	});

program
	.command('getContact <name')
	.alias('g')
	.description('Retrieve a Contact')
	.action(function(name){
		getContact(name);
	});


program.parse(process.argv);



