import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateNewUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    picture: v.string(),
  },
  handler: async (convexToJson, args) => {
    const userData = await convexToJson.db
      .query("user")
      .filter((q) => q.eq(q.field("email"), args.email))
      .collect();

    if (userData.length === 0) {
      const data = {
        name: args.name,
        email: args.email,
        picture: args.picture,
        credits: 30,
      };
      const result = await convexToJson.db.insert("user", {
        ...data,
      });

      return {
        ...data,
        _id: result,
      };
    }

    return userData[0];
  },
});
