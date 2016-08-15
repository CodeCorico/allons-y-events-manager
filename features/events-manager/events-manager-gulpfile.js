'use strict';

module.exports = ['$gulp', function($gulp) {

  $gulp.task('eventsManager', function(done) {
    $gulp.src([
      'node_modules/events-manager/events-manager.js',
      'node_modules/events-manager/events-manager.min.js'
    ])
      .pipe($gulp.dest('./public/vendor'))
      .on('end', done);
  });

  return 'eventsManager';
}];
