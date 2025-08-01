'use strict';

const publicPath = "./dist";
const resourcesPath = "./assets";

var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer');

gulp.task('sass', async function () {
    return gulp.src([resourcesPath + '/scss/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded',
            precision: 10
        }).on('error', sass.logError))
        .pipe(postcss([
            autoprefixer({
                overrideBrowserslist: ['last 2 versions']
            })]))
        .pipe(sourcemaps.write('../sourcemaps'))
        .pipe(gulp.dest(publicPath + '/css'));
});

gulp.task('deploy', async function () {
    return gulp.src([resourcesPath + '/scss/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded',
            precision: 10
        }).on('error', sass.logError))
        .pipe(postcss([
            autoprefixer({
                overrideBrowserslist: ['last 2 versions']
            })]))
        .pipe(sourcemaps.write('../sourcemaps'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('imagemin', async function () {
    return gulp.src(resourcesPath + '/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
});

gulp.task('imagemin', function () {
    gulp.watch([resourcesPath + '/images/**'], ['imagemin']);
});

gulp.task('watch', function () {
    gulp.watch([resourcesPath + '/scss/**/*.scss'], ['imagemin', 'sass']);
});
