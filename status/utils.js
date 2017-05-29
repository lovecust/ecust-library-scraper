/**
 * Created by fisher at 6:00 PM on 8/20/16.
 */

'use strict';

/**
 * Check whether the library status parsed is acceptable logically.
 *
 * @param status{Object} Library status.
 */
exports.isLibraryStatusAcceptable = function (status) {
	return (
		status &&
		0 <= status.today &&
		6 === status.available.length && 6 === status.occupied.length &&
		status.available[0] + status.occupied[0] === 36 &&
		status.available[1] + status.occupied[1] === 322 &&
		status.available[2] + status.occupied[2] === 461 &&
		status.available[3] + status.occupied[3] === 372 &&
		status.available[4] + status.occupied[4] === 349 &&
		status.available[5] + status.occupied[5] === 56 &&
		0 <= status.minutes && 1440 >= status.minutes
	);
};

