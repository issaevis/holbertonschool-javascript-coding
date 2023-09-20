#!/usr/bin/node
const request = require('request');
const process = require('process');

const link = process.argv[2];
const tasks = new Map();

request(link, (error, response, body) => {
  if (error) {
    console.error(error);
  } else if (response.statusCode !== 200) {
    console.error('Status Code: ' + response.statusCode);
  } else {
    const results = JSON.parse(body);
    for (const task of results) {
      if (task.completed === true) {
        const userId = task.userId;
        if (tasks.has(userId)) {
          tasks.set(userId, tasks.get(userId) + 1);
        } else {
          tasks.set(userId, 1);
        }
      }
    }
    const formattedOutput = {};
    tasks.forEach((value, key) => {
      formattedOutput[key] = value;
    });

    console.log(formattedOutput);
  }
});
