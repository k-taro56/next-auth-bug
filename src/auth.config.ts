import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { verifyPassword } from "./utils/hash";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        // the following line causes the error
        const passwordsMatch = await verifyPassword(
          "password",
          "$argon2id$v=19$m=19456,t=2,p=1$TVwPYVOkJ8V3/q+es0X+Pw$ADJmV7DU7+ANV55Nm4upib75MSox0AZEpXlq9kiyTy4"
        );
      },
    }),
  ],
} satisfies NextAuthConfig;
