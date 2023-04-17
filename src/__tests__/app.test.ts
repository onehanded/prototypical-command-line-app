/*
 * Copyright (c) 2023 One Handed Ventures, LLC
 */

/**
 * This is a simple example of how to test a node application.
 */
describe('app', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  /*
   * This test is a bit contrived, but it demonstrates how to test a node
   * application.
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
