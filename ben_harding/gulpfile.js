const gulp = require('gulp');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');

var files = ['index.js', 'lib/**/*.js', 'bin/*', 'gulpfile.js'];

gulp.task('test:mocha', () => {
  return gulp.src('./test/**/*test.js')
    .pipe(mocha());
});

gulp.task('lint:test', () => {
  return gulp.src('./test/**/*test.js')
    .pipe(eslint({
      globals: {
        describe: true,
        it: true,
        after: true,
        beforeEach: true,
        afterEach: true
      }
    }))
    .pipe(eslint.format());
});

gulp.task('lint:slothbear_greet', () => {
  return gulp.src(files)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('test', ['test:mocha']);
gulp.task('lint', ['lint:test', 'lint:slothbear_greet']);