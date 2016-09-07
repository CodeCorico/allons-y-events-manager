'use strict';

module.exports = function($gulp) {

  $gulp.task('eventsManager', function(done) {
    $gulp.src([
      'node_modules/events-manager/events-manager.js',
      'node_modules/events-manager/events-manager.min.js'
    ])
      .pipe($gulp.dist('vendor'))
      .on('end', done);
  });

  return 'eventsManager';
};
