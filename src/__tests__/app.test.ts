/*
 * Copyright (c) 2023 One Handed Ventures, LLC
 */

/*
 * Since Commander.js uses process.exit() to exit the application, we need to
 * mock it to throw an error instead. This allows us to catch the error and
 * assert that the correct exit code was used.
 */
jest.spyOn(process, 'exit').mockImplementation((number) => {
  throw new Error('exit(' + number + ')');
});

/**
 * This is a simple example of how to test a CLI application.
 */
describe('app', () => {
  let argv: string[];

  beforeEach(() => {
    jest.resetModules();

    argv = process.argv;
  });

  afterEach(() => {
    process.argv = argv;
  });

  /*
   * This test is a bit contrived, but it demonstrates how to test a CLI
   * application that uses process.argv to parse command line arguments.
   */
  test('it runs', async () => {
    const mock = jest.spyOn(console, 'log').mockImplementation(() => {
      undefined;
    });

    await run([]);

    expect(mock).toHaveBeenCalledWith('Hello, world!');
  });
});

/**
 * Run the app with the given arguments.
 *
 * @param args the arguments to pass to the app
 * @returns the app module
 */
async function run(args: string[]) {
  process.argv = ['node', 'app.js', ...args];

  return import('../app');
}
