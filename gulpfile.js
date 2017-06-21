var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('min', function() {
    gulp.src('svg-icons.js')
        .pipe(rename('svg-icons.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('/'));
});

gulp.task('icons', function() {
    gulp.src('node_modules/bytesize-icons/dist/icons/*')
        .pipe(gulp.dest('./icons'));
});