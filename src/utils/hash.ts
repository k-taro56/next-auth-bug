import * as argon2 from "@node-rs/argon2";

export const hashPassword = async (password: string): Promise<string> => {
  try {
    return await argon2.hash(password);
  } catch {
    throw new Error("Hashing failed");
  }
};

export const verifyPassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  try {
    return await argon2.verify(hash, password);
  } catch {
    throw new Error("Verification failed");
  }
};
