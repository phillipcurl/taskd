import { AUTH_QUERIES } from './auth';
import { POST_QUERIES } from './post';

export const QUERIES = {
  ...AUTH_QUERIES,
  ...POST_QUERIES
};
