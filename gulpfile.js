var gulp = require('gulp'),
	sass = require('gulp-sass'),
	minifyCss = require('gulp-minify-css');

gulp.task('sass', function() {
	return gulp.src('./sass/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./pubcs'));
});

gulp.task('css',function(){
	gulp.src('./pubcs/*.css')
	.pipe(minifyCss())
	.pipe(gulp.dest('./mincss'));
});

gulp.task('watch',function() {
	gulp.watch('./sass/*.scss', ['sass']);
});

gulp.task('default',['sass','watch','css'],function(){
	
});
