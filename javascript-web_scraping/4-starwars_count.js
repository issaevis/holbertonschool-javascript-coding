#!/usr/bin/node
/*
Dear Guillaume,

if I ever see you, I will stab you just because
this exercise made me doubt my future as a software developer

Frankly, Evis
*/
const request = require('request');
const process = require('process');

const link = process.argv[2];
let resultPrinted = false;

request(link, (error, response, body) => {
  if (error) {
    console.error(error);
  } else if (response.statusCode !== 200) {
    console.error('Status Code: ' + response.statusCode);
  } else {
    const result = JSON.parse(body);
    for (const rezultz of result.results) {
      for (const character of rezultz.characters) {
        if (character.endsWith('18/')) {
          request(character, (error, response, body) => {
            if (error) {
              console.error(error);
            } else if (response.statusCode !== 200) {
              console.error('Error code: ' + response.statusCode);
            } else {
              const results = JSON.parse(body);
              if (!resultPrinted) { // Check if result is not already printed
                console.log(results.films.length);
                resultPrinted = true; // Set the flag to true after printing
              }
            }
          });
        }
      }
    }
  }
});
