import { getUserId, Context } from '../../util/auth';

export const AUTH_QUERIES = {
  me(parent, args, ctx: Context, info) {
    const id = getUserId(ctx);
    return ctx.db.query.user({ where: { id } }, info);
  }
};
