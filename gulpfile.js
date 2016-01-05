//Gulp.js configuration

//Include gulp and plugins
var gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
	newer = require('gulp-newer'),
	del = require('del'),
	pkg = require('./package.json');

//set variables for the folders in which we will use for gulp

//file locations
var devBuild = ((process.env.NODE_ENV || 'development').trim().toLowerCase() !== 'production'),
	source = 'source/',
	dest = 'build/',

	images = {
		in: source +  'images/*.*',
		out: dest + 'images/'
	};

//show build type
console.log(pkg.name + ' ' + pkg.version + ', ' + (devBuild ? 'development' : 'production') + ' build' );


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