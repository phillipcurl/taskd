import { AUTH_QUERIES } from './auth';
import { POST_QUERIES } from './post';
import { TASK_QUERIES } from './task';

export const QUERIES = {
  ...AUTH_QUERIES,
  ...POST_QUERIES,
  ...TASK_QUERIES
};
