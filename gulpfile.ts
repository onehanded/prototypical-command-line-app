import gulp from 'gulp';
import typescript from 'gulp-typescript';

// Create Typescript Gulp project
const project = typescript.createProject('tsconfig.json');

// Define build paths
const paths = {
  build: 'build',
};

/**
 * Transpiles Typescript files to build directory.
 */
export default function transpile() {
  return gulp
    .src(['src/**/*.ts', '!src/**/*.test.ts'])
    .pipe(project())
    .js.pipe(gulp.dest(paths.build));
}
