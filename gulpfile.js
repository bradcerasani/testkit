var gulp = require('gulp');
var browserSync = require('browser-sync');

// Set the url to test
var url = "http://foundationcapital.com";

// Set test options
var options = {
  clicks: true,
  location: true,
  forms: true,
  scroll: true
};

gulp.task('default', function() {
  browserSync.init(['/'], {
    proxy: url,
    ghostMode: options
  });
});
