
# LAB - 07

## api-server

### Author: Student/Group Name

### Requirements
API Server
- Create a repository called lab-07-api-server and copy the contents of the starter-code/api-server folder into it
- Add 404 and 500 error handling middleware to the server
- Complete the server’s full CRUD functionality, using the in-memory database.
- app.get()
- app.post()
- app.put()
- app.delete()
- JSDoc for all methods, routes
- Provide full swagger documentation
- Wire up to a custom port using the express-swagger-generator npm module
- Note that your routes might be different as well as the returned data shape … update accordingly
- Engineering Note - Testing servers without side-effects is crucial. More critical is not having to manage starting/stopping a server in multiple environments.

- Testing
- Server tests have been partially provided
- Complete the tests to cover all of your routes
- Write unit tests for the middleware
- Write unit tests for the data model



### Links and Resources
* [submission PR](http://xyz.com)
* [travis](http://xyz.com)
* [back-end](http://xyz.com) (when applicable)
* [front-end](http://xyz.com) (when applicable)

#### Documentation
* [api docs](http://xyz.com) (API servers)
* [jsdoc](http://xyz.com) (Server assignments)
* [styleguide](http://xyz.com) (React assignments)

### Modules
#### `modulename.js`
##### Exported Values and Methods

###### `foo(thing) -> string`
Usage Notes or examples

###### `bar(array) -> array`
Usage Notes or examples

### Setup
#### `.env` requirements
* `PORT` - Port Number
* `MONGODB_URI` - URL to the running mongo instance/db

#### Running the app
* `npm start`
* Endpoint: `/foo/bar/`
  * Returns a JSON object with abc in it.
* Endpoint: `/bing/zing/`
  * Returns a JSON object with xyz in it.
  
#### Tests
* How do you run tests?
* What assertions were made?
* What assertions need to be / should be made?

#### UML
Link to an image of the UML for your application and response to events