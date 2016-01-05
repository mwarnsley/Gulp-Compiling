//Gulp.js configuration

//Include gulp and plugins

var gulp = require('gulp');

var source = 'source/',
	dest = 'build/',

	images = {
		in: source +  'images/*.*',
		out: dest + 'images/'
	};

//manage images

gulp.task('images', function(){
	return gulp.src(images.in)
		.pipe(gulp.dest(images.out));
});

//default task

gulp.task('default', function(){

});