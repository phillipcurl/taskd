import { QUERIES } from './Query';
import { Subscription } from './Subscription';
import { MUTATIONS } from './Mutation';
import { AuthPayload } from './AuthPayload';

export default {
  Query: {
    ...QUERIES
  },
  Mutation: {
    ...MUTATIONS
  },
  Subscription,
  AuthPayload
};
