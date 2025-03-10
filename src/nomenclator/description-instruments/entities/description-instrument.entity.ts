import { ApiProperty } from '@nestjs/swagger';

export class DescriptionInstrument {
  @ApiProperty({ example: '123', description: 'The ID of the description instrument' })
  id: string;

  @ApiProperty({ example: 'Guitar', description: 'The name of the description instrument' })
  name: string;

  @ApiProperty({ example: 'A string instrument', description: 'The description of the instrument', required: false })
  description?: string;

  @ApiProperty({ example: true, description: 'The active status of the description instrument', required: false })
  active?: boolean;
}
