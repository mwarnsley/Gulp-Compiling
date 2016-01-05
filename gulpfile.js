//Gulp.js configuration

//Include gulp and plugins
var gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
	newer = require('gulp-newer'),
	del = require('del');

//set variables for the folders in which we will use for gulp
var source = 'source/',
	dest = 'build/',

	images = {
		in: source +  'images/*.*',
		out: dest + 'images/'
	};

//cleans the build folders
gulp.task('clean', function(){
	del([
		dest + '*'
	]);
});

//manage images
gulp.task('images', function(){
	return gulp.src(images.in)
		.pipe(newer(images.out))
		.pipe(imagemin())
		.pipe(gulp.dest(images.out));
});

//default task
gulp.task('default',['images'], function(){
//image changes
gulp.watch(images.in, ['images']);
});