import * as bcrypt from 'bcrypt';
import { hashRefreshToken, refreshTokenMatches } from './refresh-token-hash';

// Two refresh tokens issued to the same user: identical header and opening
// claims, different `iat`/`exp` and signature at the tail.
const header = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
const claims = 'eyJyb2xlcyI6IkFkbWluaXN0cmFkb3IiLCJ1dWlkIjoiYWJjZGVm';
const oldToken = `${header}.${claims}MTExMTExMTEx.c2lnbmF0dXJlLW9uZQ`;
const newToken = `${header}.${claims}Mjk5OTk5OTk5.c2lnbmF0dXJlLXR3bw`;

describe('refresh token hashing', () => {
  it('does not store the token itself', () => {
    expect(hashRefreshToken(oldToken)).not.toContain(oldToken);
  });

  it('accepts the token it was derived from', () => {
    expect(refreshTokenMatches(oldToken, hashRefreshToken(oldToken))).toBe(true);
  });

  it('rejects a rotated-out token', () => {
    expect(refreshTokenMatches(oldToken, hashRefreshToken(newToken))).toBe(
      false,
    );
  });

  it('rejects when nothing is stored', () => {
    expect(refreshTokenMatches(oldToken, undefined)).toBe(false);
    expect(refreshTokenMatches(oldToken, null)).toBe(false);
    expect(refreshTokenMatches('', hashRefreshToken(oldToken))).toBe(false);
  });

  it('rejects a stored value of the wrong length', () => {
    expect(refreshTokenMatches(oldToken, 'deadbeef')).toBe(false);
  });

  // Guards the reason this is SHA-256 and not bcrypt: bcrypt truncates at 72
  // bytes, and these two tokens are identical up to byte 72, so bcrypt would
  // have accepted the rotated-out token above.
  it('bcrypt would have accepted the rotated-out token', async () => {
    expect(oldToken.slice(0, 72)).toEqual(newToken.slice(0, 72));
    await expect(bcrypt.compare(oldToken, await bcrypt.hash(newToken, 10))).resolves.toBe(true);
  });
});
