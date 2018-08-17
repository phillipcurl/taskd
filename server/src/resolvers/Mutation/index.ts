import { AUTH_MUTATIONS } from './auth';
import { POST_MUTATIONS } from './post';

export const MUTATIONS = {
  ...AUTH_MUTATIONS,
  ...POST_MUTATIONS
};
