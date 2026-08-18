import { createHash, timingSafeEqual } from 'crypto';

/**
 * Digest of a refresh token, for storage instead of the token itself.
 *
 * SHA-256 rather than bcrypt on purpose: bcrypt silently truncates its input
 * at 72 bytes, and the first 72 characters of a JWT are the header plus the
 * opening claims, which are identical across every token issued to the same
 * user. Hashing with bcrypt would therefore accept a rotated-out token. A
 * refresh token is already high-entropy, so a plain digest is the right tool.
 */
export function hashRefreshToken(refreshToken: string): string {
  return createHash('sha256').update(refreshToken).digest('hex');
}

export function refreshTokenMatches(
  refreshToken: string,
  storedHash?: string | null,
): boolean {
  if (!refreshToken || !storedHash) return false;

  const candidate = Buffer.from(hashRefreshToken(refreshToken), 'hex');
  const stored = Buffer.from(storedHash, 'hex');

  if (candidate.length !== stored.length) return false;
  return timingSafeEqual(candidate, stored);
}
