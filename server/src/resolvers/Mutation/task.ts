import { getUserId, Context } from '../../util/auth';

export const TASK_MUTATIONS = {
  async capture(parent, { title }, ctx: Context, info) {
    const userId = getUserId(ctx);
    return ctx.db.mutation.createTask(
      {
        data: {
          title,
          createdBy: {
            connect: { id: userId }
          }
        }
      },
      info
    );
  }
}