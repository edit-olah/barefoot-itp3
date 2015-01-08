// gulp plugin variables
var gulp = require('gulp'),
    gutil = require('gulp-util');
    
// gulp tasks
gulp.task('coffee', function(){
    gulp.src(coffeeSources)
      .pipe(coffee({bare: true})
        .on('error', gutil.log))
      .pipe(gulp.dest('components/scripts'));
});


