var gulp = require('gulp'),
    uglify = require('uglify'),
    pump = require('pump');

require('gulp-release-it')(gulp);

var paths = {
  js: './src/*.js',
};

gulp.task('default', ['minify']);

gulp.task('clean',function(cb){
  del([
    './www/templates/*'
  ], cb);
});

gulp.task('minify', ['clean'], function(cb){
  pump([
    gulp.src(paths.js), 
    uglify({
      preserveComments: true  
    }), 
    gulp.dest('dist')
  ], cb);
});

gulp.task('watch', function() {
  gulp.watch(paths.js, ['minify']);
});
