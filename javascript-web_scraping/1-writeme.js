#!/usr/bin/node
const fs = require('fs');
const process = require('process');

const filename = process.argv[2];
const string = process.argv[3];

fs.writeFile(filename, string, err => {
  if (err) {
    console.error(err);
  }
  // it just works, don't question it dummo
});
