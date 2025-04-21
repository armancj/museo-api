import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EntryFormService } from './entry-form.service';
import { EntryFormController } from './entry-form.controller';
import { EntryFormEntity, EntryFormSchema } from './schema/entry-form.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: EntryFormEntity.name,
        schema: EntryFormSchema,
      },
    ]),
  ],
  controllers: [EntryFormController],
  providers: [EntryFormService],
  exports: [EntryFormService],
})
export class EntryFormModule {}