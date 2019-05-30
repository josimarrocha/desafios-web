'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()
sass.compiler = require('node-sass')

//gulp.task('sass', complilaSass)

function complilaSass() {
    return gulp
        .src('sass/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream())
}
gulp.task('sass', complilaSass)

function browser() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
}
gulp.task('browser', browser)

function watch() {
    gulp.watch('sass/**/*.scss', complilaSass)
    gulp.watch('*.html').on('change', browserSync.reload)
}
gulp.task('watch', watch)

gulp.task('default', gulp.parallel('watch', 'browser', 'sass'))