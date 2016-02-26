'use strict';

var Users = require('../models/users.js');

function ClickHandler () {

	this.getClicks = function (req, res) {
	 console.log(req.headers)
		var result = {
			ipaddress: req.headers['x-forwarded-for'],
			language: req.headers['accept-language'].split(',')[0],
			software: req.headers['user-agent'].match(/\(([^)]+)\)/)[1]
		};

				res.json(result);
			;
	};


}

module.exports = ClickHandler;
