import { Permission } from '../interfaces';

export const permission: Permission = {
  'getUsers': {
    all: ['head-trainer'],
    read: ['trainee', 'trainer'],
    write: ['trainer'],
    delete: [],
  },
};
