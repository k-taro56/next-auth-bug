/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";

import authConfig from "./auth.config";
import { verifyPassword } from "./utils/hash";
import { db } from "./lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(db),
  providers: [
    Credentials({
      async authorize(credentials) {
        const passwordsMatch = await verifyPassword(
          "password",
          "$argon2id$v=19$m=19456,t=2,p=1$TVwPYVOkJ8V3/q+es0X+Pw$ADJmV7DU7+ANV55Nm4upib75MSox0AZEpXlq9kiyTy4"
        );
        // To suppress TS2322.
       return null;
      },
    }),
  ],
});
