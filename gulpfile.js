//Gulp.js configuration

//Include gulp and plugins

var gulp = require('gulp'),
	imagemin = require('gulp-imagemin');

var source = 'source/',
	dest = 'build/',

	images = {
		in: source +  'images/*.*',
		out: dest + 'images/'
	};

//manage images

gulp.task('images', function(){
	return gulp.src(images.in)
		.pipe(imagemin())
		.pipe(gulp.dest(images.out));
});

//default task

gulp.task('default', function(){

});