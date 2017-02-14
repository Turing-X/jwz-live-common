import { Meteor } from 'meteor/meteor';

Meteor.publish('appData', () => Meteor.appData.find());
