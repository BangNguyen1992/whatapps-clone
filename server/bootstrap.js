import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(function() {
  if (Meteor.users.find().count() != 0) return;

  Accounts.createUserWithPhone({
    phone: '+972501234567',
    profile: {
      name: 'User 1'
    }
  });

  Accounts.createUserWithPhone({
    phone: '+972501234568',
    profile: {
      name: 'User 2'
    }
  });

  Accounts.createUserWithPhone({
    phone: '+098765432111',
    profile: {
      name: 'Admin'
    }
  });
});