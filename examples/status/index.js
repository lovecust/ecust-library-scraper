/**
 * Created by fisher at 11:05 PM on 5/29/17.
 */

'use strict';

const LibraryStatus = require('../../status');

LibraryStatus.status().then(status => {
	console.log('Ecust Library Status: ', status);
}).catch(ex => console.error(ex));
