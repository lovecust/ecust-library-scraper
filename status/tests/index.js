/**
 * Created by fisher at 10:43 PM on 9/11/16.
 */

'use strict';

const assert = require('chai').assert;
const Utils = require('./../utils');
const LibraryStatus = require('./..');

describe('Library Status', () => {
	it('Should return expected library status.', done => {
		LibraryStatus.status().then(status => {
			assert(Utils.isLibraryStatusAcceptable(status), 'Expected acceptable library status!');
			done();
		}).catch(ex => done(ex));
	})
});

