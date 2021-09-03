// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteor-collection-logging.js.
import { name as packageName } from "meteor/meteor-collection-logging";

// Write your tests here!
// Here is an example.
Tinytest.add('meteor-collection-logging - example', function (test) {
  test.equal(packageName, "meteor-collection-logging");
});
