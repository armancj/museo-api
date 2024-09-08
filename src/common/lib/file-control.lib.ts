export class FileControl {
  readonly extension: string;
  readonly sizeMb: number;

  constructor(readonly name: string, readonly value: Express.Multer.File) {
    this.extension = this.value.originalname.slice(
      ((this.value.originalname.lastIndexOf('.') - 1) >>> 0) + 2,
    );
    this.sizeMb = this.value.size / (1024 * 1024);
  }

  isValidExtension(extensions: string[]): boolean {
    return extensions.includes(this.extension);
  }

  isValidMimeType(mimetypes: string[]): boolean {
    return mimetypes.includes(this.value.mimetype);
  }

  isValidLowerThanSizeMb(sizeMb: number) {
    return this.sizeMb < sizeMb;
  }
}
