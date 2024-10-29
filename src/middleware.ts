/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from "next-auth";

import authConfig from "@/auth.config";

const { auth } = NextAuth(authConfig);

export default auth(async (req) => {});
