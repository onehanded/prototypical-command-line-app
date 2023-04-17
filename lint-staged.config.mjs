/*
 * Configuration for lint-staged (https://github.com/okonet/lint-staged)
 *
 * Had to configure lint-staged this way rather than using package.json to
 * limit Jest's code coverage reporting to the staged files.
 *
 * It seems that setting 'collectCoverageFrom' in the Jest config file so that
 * Jest will report coverage for all source files, not just those with tests,
 * breaks the coverage reporting with '--findRelatedTests' CLI option. Instead
 * of limiting coverage to the related tests it reports on everything that
 * matches the 'collectCoverageFrom' glob in the config file.
 */
export default {
  /*
   * Runs ESLint & Prettier on Javascript & Typescript files and runs jest
   * limiting code coverage to the staged files.
   */
  'src/**/*.{js,jsx,ts,tsx}': (filenames) => {
    return [
      'eslint --fix ' + filenames.join(' '),
      'prettier --write ' + filenames.join(' '),
      'jest --bail --findRelatedTests ' +
        filenames
          .map((filename) => {
            return '--collectCoverageFrom=' + filename;
          })
          .join(' ') +
        ' ' +
        filenames.join(' '),
    ];
  },
  /*
   * Runs ESLint & Prettier on Javascript & Typescript files in the root
   * directory.
   */
  './*.{js,mjs,jsx,ts,tsx}': (filenames) => {
    return [
      'eslint --fix ' + filenames.join(' '),
      'prettier --write ' + filenames.join(' '),
    ];
  },
  /*
   * Runs prettier for JSON files.
   */
  '*.json': (filenames) => {
    return 'prettier --write ' + filenames.join(' ');
  },
};
