import * as bcrypt from 'bcrypt';

export async function hashedPassword(password: string) {
  return await bcrypt.hash(password, 10);
}
