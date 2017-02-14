// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by jwz-common.js.
import { name as packageName } from "meteor/jwz-common";

// Write your tests here!
// Here is an example.
Tinytest.add('jwz-common - example', function (test) {
  test.equal(packageName, "jwz-common");
});
