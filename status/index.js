/**
 * Created by Fisher on 9/6/2016 at 21:17
 *
 * Get Ecust library status.
 */
'use strict';

const curl = require('curlrequest');
const cheerio = require('cheerio');
const utils = require('./utils');
const constants = require('./constants');


/**
 * Get Ecust library status.
 *
 * @return {Promise} Resolve json status object.
 */
exports.status = () => new Promise((resolve, reject) => {
	curl.request({url: constants.URL_LIBRARY_STATUS}, (err, response) => {
		if (err) {return reject(['Failed to fetch library status!', err, response]);}
		let cur = new Date();
		let status = {
			available: [],
			occupied: [],
			today: 0,
			// Data got time in minutes.
			minutes: cur.getHours() * 60 + cur.getMinutes()
		};
		let $ = cheerio.load(response);
		for (let i = 0; i < constants.FLOORS_COUNT; i++) {
			let pre = `#Label${i + 1}`;
			status.occupied[i] = +$(`${pre}f1`).text();
			status.available[i] = +$(`${pre}f2`).text();
		}
		status.today = +$('#LabelAll').text();
		if (!utils.isLibraryStatusAcceptable(status)) {return reject('Parsed response is not acceptable: ' + JSON.stringify(status));}
		resolve(status);
	});
});
