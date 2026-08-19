import { BadRequestException } from '@nestjs/common';

/**
 * Upload ceiling for the generic file-storage endpoint.
 *
 * Multer buffers the whole upload in memory, so without a limit a single
 * request could exhaust the process heap.
 */
export const MAX_UPLOAD_BYTES = 50 * 1024 * 1024;

/**
 * Types the panel actually uploads: still images, video and audio attachments
 * for heritage records, plus PDF documentation.
 *
 * SVG is deliberately absent. It is an XML document that can carry script, and
 * these files are served back inline from the same origin.
 */
export const ALLOWED_UPLOAD_MIME_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'image/gif',
  'video/mp4',
  'video/webm',
  'video/ogg',
  'audio/mpeg',
  'audio/ogg',
  'audio/wav',
  'audio/webm',
  'application/pdf',
];

type FileFilterCallback = (error: Error | null, acceptFile: boolean) => void;

export function uploadFileFilter(
  _req: unknown,
  file: Express.Multer.File,
  callback: FileFilterCallback,
): void {
  if (!ALLOWED_UPLOAD_MIME_TYPES.includes(file.mimetype)) {
    callback(new BadRequestException(`Unsupported file type: ${file.mimetype}`), false);
    return;
  }
  callback(null, true);
}

/**
 * Builds a Content-Disposition header that cannot be broken out of.
 *
 * The stored filename is attacker-supplied, so quotes, CR and LF have to go:
 * a raw newline would let the uploader inject arbitrary response headers.
 */
export function contentDispositionInline(filename: string): string {
  const fallback = (filename ?? '')
    .replace(/[\r\n"\\]/g, '')
    .replace(/[^\x20-\x7e]/g, '_')
    .trim();

  const safeFallback = fallback.length > 0 ? fallback : 'file';

  return `inline; filename="${safeFallback}"; filename*=UTF-8''${encodeURIComponent(filename ?? '')}`;
}

/**
 * Parses a single `bytes=` range against the known file size.
 *
 * Returns null when the header is malformed or unsatisfiable so the caller can
 * answer 416 instead of emitting a NaN Content-Length.
 */
export function parseByteRange(
  range: string,
  size: number,
): { start: number; end: number } | null {
  const match = /^bytes=(\d*)-(\d*)$/.exec(range.trim());

  if (!match || size <= 0) {
    return null;
  }

  const [, rawStart, rawEnd] = match;

  if (rawStart === '' && rawEnd === '') {
    return null;
  }

  // A suffix range ("bytes=-500") asks for the last N bytes.
  if (rawStart === '') {
    const suffix = Number(rawEnd);
    if (suffix === 0) {
      return null;
    }
    return { start: Math.max(0, size - suffix), end: size - 1 };
  }

  const start = Number(rawStart);
  const end = rawEnd === '' ? size - 1 : Math.min(Number(rawEnd), size - 1);

  if (start > end || start >= size) {
    return null;
  }

  return { start, end };
}
