/**
 * Grade formatting for LMS exporters.
 * Moodle XML <defaultgrade> uses dot decimals with 7 fractional digits, e.g. 0.5000000.
 * Must NOT concatenate "${points}.0000000" — that yields invalid values like 0.5.0000000.
 */

function formatMoodleDefaultGrade(points) {
	const value = Number(points);
	if (!Number.isFinite(value) || value < 0) {
		return (1).toFixed(7);
	}
	return value.toFixed(7);
}

/** QTI normalMaximum — dot decimal string for XML attributes */
function formatQtiMaxScore(points) {
	const value = Number(points);
	if (!Number.isFinite(value) || value < 0) {
		return '1';
	}
	return Number.isInteger(value) ? String(value) : String(value);
}

module.exports = {
	formatMoodleDefaultGrade,
	formatQtiMaxScore,
};
