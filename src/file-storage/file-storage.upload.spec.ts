import { BadRequestException } from '@nestjs/common';
import {
  ALLOWED_UPLOAD_MIME_TYPES,
  contentDispositionInline,
  parseByteRange,
  uploadFileFilter,
} from './file-storage.upload';

describe('parseByteRange', () => {
  const size = 1000;

  it('parses a closed range', () => {
    expect(parseByteRange('bytes=0-499', size)).toEqual({ start: 0, end: 499 });
  });

  it('defaults the end to the last byte', () => {
    expect(parseByteRange('bytes=500-', size)).toEqual({ start: 500, end: 999 });
  });

  it('resolves a suffix range to the last N bytes', () => {
    expect(parseByteRange('bytes=-200', size)).toEqual({ start: 800, end: 999 });
  });

  it('clamps an end past the file size', () => {
    expect(parseByteRange('bytes=0-99999', size)).toEqual({ start: 0, end: 999 });
  });

  // Regression: parseInt('abc') produced NaN, which reached the response as
  // "Content-Length: NaN" and broke the transfer instead of answering 416.
  it.each([
    ['bytes=abc-', 'non-numeric start'],
    ['bytes=-', 'no bounds at all'],
    ['bytes=', 'empty range'],
    ['items=0-10', 'wrong unit'],
    ['bytes=500-100', 'start after end'],
    ['bytes=5000-6000', 'start past the file'],
  ])('rejects %s (%s)', range => {
    expect(parseByteRange(range, size)).toBeNull();
  });

  it('rejects any range against an empty file', () => {
    expect(parseByteRange('bytes=0-10', 0)).toBeNull();
  });
});

describe('contentDispositionInline', () => {
  it('quotes a plain filename', () => {
    expect(contentDispositionInline('photo.png')).toContain('filename="photo.png"');
  });

  // Regression: the filename went into the header raw, so a CR/LF in the stored
  // name let the uploader append arbitrary response headers.
  it('strips CR and LF so headers cannot be injected', () => {
    const header = contentDispositionInline('a.png\r\nSet-Cookie: admin=1');

    expect(header).not.toContain('\r');
    expect(header).not.toContain('\n');
    expect(header).toContain('filename="a.pngSet-Cookie: admin=1"');
  });

  it('strips embedded quotes so the value cannot be closed early', () => {
    expect(contentDispositionInline('a".png')).toContain('filename="a.png"');
  });

  it('keeps a UTF-8 form for non-ascii names', () => {
    const header = contentDispositionInline('cerámica.png');

    expect(header).toContain("filename*=UTF-8''");
    expect(header).toContain(encodeURIComponent('cerámica.png'));
  });

  it('falls back to a generic name when nothing usable is left', () => {
    expect(contentDispositionInline('\r\n')).toContain('filename="file"');
  });
});

describe('uploadFileFilter', () => {
  const run = (mimetype: string) => {
    const callback = jest.fn();
    uploadFileFilter({}, { mimetype } as Express.Multer.File, callback);
    return callback;
  };

  it.each(ALLOWED_UPLOAD_MIME_TYPES)('accepts %s', mimetype => {
    expect(run(mimetype)).toHaveBeenCalledWith(null, true);
  });

  // SVG is XML and can carry script; these files are served back inline from
  // the same origin, so accepting it would be stored XSS.
  it.each(['image/svg+xml', 'text/html', 'application/javascript', 'application/x-msdownload'])(
    'rejects %s',
    mimetype => {
      const callback = run(mimetype);

      expect(callback).toHaveBeenCalledWith(expect.any(BadRequestException), false);
    },
  );
});
