import { AUTH_MUTATIONS } from './auth';
import { POST_MUTATIONS } from './post';
import { TASK_MUTATIONS } from './task';

export const MUTATIONS = {
  ...AUTH_MUTATIONS,
  ...POST_MUTATIONS,
  ...TASK_MUTATIONS
};
