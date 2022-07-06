import { diamond, equilateral } from './patterns/index.js';
import { hasPermission } from './utils/index';
import validateUsers from './utils/validation';
import { Iusers } from './interfaces';

export const users: Iusers[] = [
  {
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
  },
  {
    traineeEmail: 'trainee2@successive.tech',
    reviewerEmail: 'reviewer2@g.tech',
  },
  {
    traineeEmail: 'trainee121@successive.tech',
    reviewerEmail: 'reviewer101@successive.tech',
  },
];

export const regex = /^([A-Za-z0-9_\-\.])+\@(successive.tech)$/;

// Prints the diamond pattern.
diamond(8);

// Prnints the equilateral triangles pattern
equilateral(5);

hasPermission('getUsers', 'trainer', 'write');

validateUsers(users);
