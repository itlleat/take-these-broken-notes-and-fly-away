# 11 Express.js: Note Taker

## Your Task

Your assignment is to modify starter code to create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.

The application’s front end has already been created. It's your job to build the back end, connect the two, and then deploy the entire application to Heroku.


## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```


## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```


## Mock-Up

The following images show the web application's appearance and functionality:

![Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.](./take-these-broken-notes-and-fly-away/Assets/11-express-homework-demo-01.png)

![Note titled “Balance accounts” reads, “Balance account books by end of day Monday,” with other notes listed on the left.](./take-these-broken-notes-and-fly-away/Assets/11-express-homework-demo-02.png)


## Getting Started

On the back end, the application should include a `db.json` file that will be used to store and retrieve notes using the `fs` module.

The following HTML routes should be created:

* `GET /notes` should return the `notes.html` file.

* `GET *` should return the `index.html` file.

The following API routes should be created:

* `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).


## Bonus

You haven’t learned how to handle DELETE requests, but this application offers that functionality on the front end. As a bonus, try to add the DELETE route to the application using the following guideline:

* `DELETE /api/notes/:id` should receive a query parameter that contains the id of a note to delete. To delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.


## Grading Requirements

> **Note**: If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing else
>
> * A repository that only includes starter code

This Challenge is graded based on the following criteria: 


### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

  * Application front end must connect to an Express.js back end.

  * Application back end must store notes that have a unique id in a JSON file.

  * Application must be deployed to Heroku.


### Deployment: 36%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository contains application code.


### Application Quality: 11%

* Application console is free of errors.


### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality README file with description, screenshot, and link to deployed application.


### Bonus: +10 Points

* Application allows users to delete notes.


## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository, with a unique name and a README describing the project.

- - -
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.



[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT "Click to view the MIT License on opensource.org")

# Take These Broken Notes And Fly Away

<details>
  <summary>Table of Contents</summary>
  <ol>
  <li><a href="#project-description">Project Description</a></li>
  <li><a href="#installation">Installation</a></li>
    <li><a href="#usage-information">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#test-instructions">Testing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#questions">Questions</a></li>
  </ol>
</details>

## Project Description

Welcome! This application is designed to help the user keep track of notes. Upon the visiting the page you will prompted on the screen to get started. Click to begin and you'll be whisked away to a second page where you are allowed to write, store, view, and delete notes. The application is using nodejs and an express framework for the back end. 


### Application Url

<img width="818" alt="commander-shape-screenshot" src="https://user-images.githubusercontent.com/118778670/223336467-a69d672d-4f15-4487-9f39-ed21d241b20b.png">

### GitHub 

https://drive.google.com/file/d/1MtRmk3c3yHt5h2eEeeW7ubZrQSRA6VP1/view

## Installation

To install, clone the repository or download a zip and open it in a folder of your choosing in VS Code. Navigate to the terminal in the project's root directory and type:

```bash
npm i
```

## Usage Information

Head to the terminal in the project root and type:

```bash
node index.js
```

Inquirer will prompt you to choose up to three characters, choose their color, and choose between a triangle, square, or circle. Finish up by choosing a color for your shape and voila! A new .svg file will appear in the examples folder.

## Contributing

### Guidelines

Please feel welcome to make additions, edit or expand it for your own personal use, or add pseudo code suggestions. If you'd like to make changes to the main branch please let me know through email.

## Test Instructions

In the tests folder there's a file called jest.test.js The file contains code and instructions to run tests.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT "Click to view the MIT License on opensource.org")

## Questions

### Please reach out via the links below to reach me with additional questions.

#### https://github.com/itlleat

#### scott.schulman84@gmail.com