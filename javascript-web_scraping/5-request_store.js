#!/usr/bin/node
const request = require('request');
const process = require('process');
const fs = require('fs');

const link = process.argv[2];
const filename = process.argv[3];

request(link, (error, response, body) => {
  if (error) {
    console.error(error);
  } else if (response.statusCode !== 200) {
    console.error('Status Code: ' + response.statusCode);
  } else {
    fs.writeFile(filename, body, err => {
      if (err) {
        console.error(err);
      }
      // this file do be written
    });
  }
});
