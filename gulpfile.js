var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
gulp.task('styles', function () {
    return gulp.src([
            './assets/styles/app.scss'
        ])
        .pipe(sass({
            includePaths: [
                './bower_components/foundation/scss'
            ]
        }))
        .pipe(concat('app.css'))
        .pipe(gulp.dest('./public/css'));
});
gulp.task('scripts', function () {
    gulp.src([
            './bower_components/jquery/dist/jquery.js',
            './bower_components/foundation/js/foundation.js',
            './bower_components/foundation/js/foundation/foundation.alerts.js',
            'assets/scripts/app.js'
        ])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/js'));
    return gulp.src('./bower_components/modernizr/modernizer.js')
        .pipe(gulp.dest('./public/js'));
});


gulp.task('watch', function () {
    gulp.watch('./assets/styles/**/*.scss', ['styles']);
    gulp.watch('./assets/scripts/**/*.js', ['scripts']);
});
gulp.task('default', ['styles', 'scripts']);