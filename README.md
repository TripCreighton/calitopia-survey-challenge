# Product Description
SurveysAPI is a JSON REST API for creating, modifying, and submitting surveys. A survey is an ordered list of survey questions. Supported types of questions include:
- Text Entry (free form) (ex: "What is your name")
- Multiple Choice (ex: "Which color do you like the best? Choose one: [Orange, Green, Blue, Red]")
- Date (ex: "What is your birthdate?")
  - NOT timestamp; this is date-only

# Challenge Overview
This challenge has two parts (instructions for each appear below):
1. Coding Portion
2. Written Portion

Submission Instructions:
- Clone this repository and create your own remote to push it to.
- Implement the coding portion.
- Include your response to the written portion in the README.
- When ready, invite me to your remote.
  - Note: I will not look at git history.

# Coding Portion Instructions
## Requirements
Implement REST API endpoints (JSON) for the following pieces of functionality:
- Create a survey
  - See "Product Description" for types of questions you must support
- Modify a previously created survey
  - Add/Remove questions
  - Modify a question
  - Reorder questions
- Submit to a survey

You may organize the code however you see fit, including creating/moving files/folders.

In addition to the code, please also provide _brief_ overview of its usage, so I can see the API design. This can come in the form of comments, README, or an external script that demonstrates the use of each endpoint.

### Note:
These are just use cases, not necessarily API endpoints. Your API can have .

## Tech Specs
- Must be runnable on a Node version >v10
- Must be pure nodejs (no typescript)
- Must be runnable as Express server using `npm run dev` script and accessible locally on port 3001
  - This is already provided

## Getting Started
- Clone this repo
- `npm install`
- `npm run dev`

## You will be graded on:
- API Design (Usability for clients)
- Code Readability
- Overall Simplicty
- Extensibility

## Tips
 - You may choose any persistent storage system, we recommend you use [Firebase](https://firebase.google.com/)
 - Feel free to use any search engine of your choice.

#### Example questions you should ask to evaluate your submission (but not implement):
(This list is not exhaustive)
- How easy would it be for a new contributor to pick up the project?
- How easy would it be to plug in a new database layer?
- How easy would it be to add another type of survey question?
- How easy would it be to add other new features (search surveys / submissions, list submissions, store user data, etc)?

## You will NOT be graded on
- Performance (Readable code > Optimized code)
- 3rd party package choice (Use whichever packages you prefer to get the task done)

# Written Portion Instructions
Create a brief (one-paragraph, or bulleted list) of what technical steps would be required to deploy this app to production.

# Questions / Issues?
Email me at k@saporo.us and I will respond as soon as I can.
