var notify = require("gulp-notify");
var gUtil = require('gulp-util');

module.exports = function() {

	var args = Array.prototype.slice.call(arguments);
	gUtil.log(args);

	// Send error to notification center with gulp-notify
	notify.onError({
		title: "Compile Error",
		message: "<%= error.message %>"
	}).apply(this, args);

	// Keep gulp from hanging on this task
	this.emit('end');
};