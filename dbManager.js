var mongoose = require('mongoose');

/**
 * DBManager Module
 */
var DBManager = function() {
	mongoose.connect('mongodb://localhost:27017');
	this.db = mongoose.connection;
	this.db.on('error', console.error.bind(console, 'connection error:'));
	this.db.once('open', function callback () {
		console.log("mongo db connection OK.");
	});
}

DBManager.prototype = {
	createDBModel : function(name, schema) {
		var Schema = mongoose.Schema(schema);
		var Model = mongoose.model(name, Schema);
		return Model;
	}
}

module.exports = DBManager;