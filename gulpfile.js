var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var sourceFolder = 'src';

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {


    browserSync.init({
        server: "./" + sourceFolder,
        open: false,
        reloadOnRestart: true
    });

    gulp.watch(sourceFolder + "/*.scss", ['sass']);
    gulp.watch(sourceFolder + "/*.html").on('change', browserSync.reload);
    gulp.watch(sourceFolder + "/*.js").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(sourceFolder + "/*.scss")
        .pipe(sass())
        .pipe(gulp.dest(sourceFolder + "/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);