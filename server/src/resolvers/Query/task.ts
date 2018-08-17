import { getUserId, Context } from '../../util/auth';

export const TASK_QUERIES = {
  allTasks(parent, args, ctx: Context, info) {
    const id = getUserId(ctx);
    const where = {
      // isPublished: false,
      createdBy: {
        id
      }
    };

    return ctx.db.query.tasks({ where }, info);
  },

  // drafts(parent, args, ctx: Context, info) {
  //   const id = getUserId(ctx);

  //   const where = {
  //     isPublished: false,
  //     author: {
  //       id
  //     }
  //   };

  //   return ctx.db.query.posts({ where }, info);
  // },

  task(parent, { id }, ctx: Context, info) {
    return ctx.db.query.task({ where: { id } }, info);
  }
};
