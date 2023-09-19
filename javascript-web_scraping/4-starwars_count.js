#!/usr/bin/node
const request = require('request');
const process = require('process');

request(process.argv[2] + '18', (error, response, body) => {
  if (error) {
    console.error(error);
  } else if (response.statusCode !== 200) {
    console.error(`Response code: ${response.statusCode}`);
  } else {
    const results = JSON.parse(body);
    console.log(results.films.length);
  }
});
