# ToDo React Redux App

A Todo App using React and Redux
  
### Pre-requisites

* NodeJS (v10.6.0 used )
* NPM (6.1.0 used)

### Setup
  Clone the repository to your local machine.
  ```
    npm install
    npm run start:prod  //Open http://localhost:3000
    npm run test       //to run test cases
  ```

### Features

* Login using unique username: 'test' and password : 'test'
* User can view her/his task list
* User can add/remove task
* All changes can be persistent to allow view them in next sign in by the same user. When user logouts, the data is saved in a json file.
* Each task displays the date it was last modified at.
* User can check/uncheck any task on their list

### Technical Features
* Run performance and audit tests.

  First, run the express server in one terminal.
  ```
    npm run start:prod
  ```
  Then, in another instance of terminal run,
  ```
    npm run audit
  ```
  This will open the performance report after simulation.
  
* Different webpack profiles for Production and Dev
* GZip Compression used in Express Server
* Hot Module Replacement for dev server
* Responsive UI


### Libraries Used

* ReactJS
* Jest
* Redux
* Webpack
* ExpressJS
* Lighthouse

### Things I would have done if I had more time
* More tests
* Refactoring 
* JWT for session management
* Filter for different tasks
* Dashboard for overall tasks and stats.
* React Router

