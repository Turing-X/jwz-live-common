import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

const appData = new Mongo.Collection('appData');

Meteor.appData = appData;
