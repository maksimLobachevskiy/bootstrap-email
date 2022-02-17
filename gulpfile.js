"use strict";

const gulp = require("gulp");
const BootstrapEmail = require('bootstrap-email');
const gulp_bootstrap_email = require('gulp-bootstrap-email');
const template = new BootstrapEmail('email.html');
const { watch } = require("gulp");




const html = () => {
  return gulp.src('email.html')
    .pipe(gulp_bootstrap_email())
    .pipe(gulp.dest('./output'))
}

const watcher = () => {

  async function clean() {
    return watch("email.html").on("change", html)
  }
  clean();

};




exports.watcher = watcher;
exports.dev = watcher;