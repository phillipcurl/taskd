import { Context } from '../util/auth';

export const Subscription = {
  feedSubscription: {
    subscribe: (parent, args, ctx: Context, info) => {
      return ctx.db.subscription.post(
        {
          where: {
            node: {
              isPublished: true
            }
          }
        },
        info
      );
    }
  }
};
