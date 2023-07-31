const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
const currentDiag = require('../db/diagnostics.json');

// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => {
  // TODO: Logic for sending all the content of db/diagnostics.json
});

// POST Route for a error logging
diagnostics.post('/', (req, res) => {
  // TODO: Logic for appending data to the db/diagnostics.json file
  console.info('This request is invalid')
  const { tip, topic, username} = req.body;

  if(tip && topic && username) {
    const diagnostics = {
      time,
      error_id,
      errors: {
        tip,
        topic,
        username
      }
    }

    fs.readFile('../db/diagnostics.json', 'utf8', (err, data) => {
      if(err) {
        console.error(err);
      } else {
        const parsedDiag = JSON.parse(data);
        parsedDiag.push(diagnostics)
        currentDiag.push(diagnostics)

        fs.writeFile('../db/diagnostics.json',
        JSON.stringify(parsedDiag, null, 4, 
          (writeErr) =>
            writeErr
              ? console.error(writeErr)
              : console.info('Successfully updated reviews!')
        ))
      }
    })
    const response = {
      status: 'success',
      body: diagnostics,
    }

    console.log(response);
    res.status(201).json(response);
  } else {
    res.status(500).json('Error in posting into diagnostics')
  }
});

module.exports = diagnostics;
