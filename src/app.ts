/*
 * Copyright (c) 2023 One Handed Ventures, LLC
 */
import {Command} from 'commander';

// Useful for debugging unhandled rejections.
// See https://nodejs.org/api/process.html#process_event_unhandledrejection
// for more information.
//
// process.on('unhandledRejection', (e) => {
//   console.error(e);
// });

const program = new Command();

program.version('0.0.1');

program.parse(process.argv);

console.log('Hello, world!');
