import connectToDatabase from "@/dataBase/connectdb";
import UserModel from "@/dataBase/models/user";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        const { name, email } = user;
        await connectToDatabase();

        try {
          let existingUser = await UserModel.findOne({ email });

          if (!existingUser) {
            await UserModel.create({
              email,
              name,
              isCreator: false, 
            });
          }
          return true;
        } catch (error) {
          console.error("Error during sign in:", error);
          return false; // stop sign-in on error
        }
      }
      return true; // allow other providers by default
    },

    async jwt({ token, user }) {
      if (user?.email) {
        await connectToDatabase();
        const dbUser = await UserModel.findOne({ email: user.email }).lean();

        if (dbUser) {
          token.id = dbUser._id.toString();
          token.email = dbUser.email;
          token.name = dbUser.name;
          token.isCreator = dbUser.isCreator;
        }
      }
      return token;
    },

    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.isCreator = token.isCreator;
      }
      return session;
    },
  },
};
