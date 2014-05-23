
var gulp = require('gulp');
var gUtil = require('gulp-util');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var stripModule = require('gulp-strip-module');

var gulpif = require('gulp-if');
var args   = require('yargs').argv;

var handleErrors = require('../utils/handleErrors');
var config = require('../config');

var isProduction = args.type === 'production';

// gUtil.log(isProduction); 
var outputFolder = config.outputFolder,
    outputFilename = config.outputFilename,
    filesToCombine = config.files;

//create task
gulp.task('build_flux', function(){

  return gulp.src(filesToCombine)
        .on('error', handleErrors)
        .pipe(stripModule())
        .on('error', handleErrors)
        .pipe(concat(outputFilename))
        .on('error', handleErrors)
        .pipe(gulpif(isProduction, uglify()))
        .on('error', handleErrors)
        .pipe(gulp.dest(outputFolder));
});

//watch task
gulp.watch('build_flux', [

  'build_flux'
]);
