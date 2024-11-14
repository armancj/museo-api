import { Module } from '@nestjs/common';
import { AssociatedDocumentationService } from './associated-documentation.service';
import { AssociatedDocumentationController } from './associated-documentation.controller';

@Module({
  controllers: [AssociatedDocumentationController],
  providers: [AssociatedDocumentationService],
})
export class AssociatedDocumentationModule {}
