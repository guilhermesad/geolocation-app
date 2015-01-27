# GeoLocation App #

This is a simple GeoLocation app that retrieves the user's location and gives detailed information about it. It is also possible to search for the physical location of a website, which is displayed on a map.

After searching for a website's location, the user can compare its position with the website's. Whenever the user resets its location or searches for a different website, the map is updated accordingly.

This application uses the [IP-API](http://ip-api.com) to retrieve information about IPs locations.

### Configuring ###

* Clone the repository
* Update your npm: `npm update`
* Install the command line tools: `npm install -g bower grunt-cli`
* Install the app dependencies: `npm install` and `bower install`

### Running ###

* Go to the repository root
* Run `grunt serve`

### Testing ###

* Go to the repository root
* Run `grunt test`

### JS Libraries ###

The following list shows which main JS libraries were used and why.

* **AngularJS** (http://angularjs.org/) - AngularJS provides a well-structured framework for creating frontend web apps. Simply refactoring the original application into a new Angular one showed how much simpler it can get. Building the app on Angular felt intuitive and resulted in a more maintainable and readable code.
* **Angular Google Maps** (http://angular-ui.github.io/angular-google-maps) - This Angular library granted an easier and simpler way to access Google Maps features.
* **Grunt** (http://gruntjs.com/) - Grunt is a JavaScript task runner that helped a lot on automating the app execution and testing. It can also be used for deployment, minification and linting.
* **Karma** (http://karma-runner.github.io/) - Karma was used with Jasmine for the unit and end-to-end tests of the application.
* **Jasmine** (http://jasmine.github.io/) - Jasmine is a JavaScript library for testing the application in a Behavior-Driven way, which ensures the user is interacting with the app the way he should.
* **Twitter Bootstrap** (https://twitter.github.com/bootstrap/) - Twitter Bootstrap is the must-use framework for developing responsive web apps.

### Notes ###

* The application is packed with many basic functionality libraries. Although not all of them are used, they make a good foundation in the construction of any modern web app. For this reason it was decided to leave them intact in the code, also in the case of future enhancements.

### Contributors ###

* Guilherme Sad - gorgulhoguilherme@gmail.com
