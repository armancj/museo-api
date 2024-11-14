import {Injectable, NotFoundException} from "@nestjs/common";
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";

@Injectable()
export class CommonRecordService<
    T extends Document,
    CreateDto,
    RecordEntity,
    RecordsEntity
> {
    constructor(
        @InjectModel('') private readonly model: Model<T>,
        private readonly singleEntityClass: new (...args: any[]) => RecordEntity,
        private readonly bulkEntityClass: new (...args: any[]) => RecordsEntity,
        private readonly embeddedFieldName: string,
    ) {}

    async create(uuid: string, createDto: CreateDto): Promise<RecordEntity> {
        return this.updateRecord(uuid, createDto);
    }

    async findAll(): Promise<RecordsEntity[]> {
        const records = await this.model.find({ deleted: false }).lean().exec();
        return this.bulkEntityClass['create'](records);
    }

    async findOne(uuid: string): Promise<RecordEntity> {
        const record = await this.model.findOne({ uuid, deleted: false }).lean().exec();
        if (!record) throw new NotFoundException('Not Found record');

        const embeddedData = record[this.embeddedFieldName];
        if (!embeddedData) throw new NotFoundException(`Not Found data for ${this.embeddedFieldName}`);

        return this.singleEntityClass['create'](embeddedData);
    }

    async update(uuid: string, updateDto: Partial<CreateDto>): Promise<RecordEntity> {
        await this.findOne(uuid);
        return this.updateRecord(uuid, updateDto);
    }

    async remove(uuid: string): Promise<void> {
        await this.findOne(uuid);
        await this.model.updateOne({ uuid }, { $unset: { [this.embeddedFieldName]: 1 } as any });
    }

    private async updateRecord(uuid: string, updateDto: Partial<CreateDto>): Promise<RecordEntity> {
        const updatedRecord = await this.model
            .findOneAndUpdate(
                { uuid, deleted: false },
                { $set: { [this.embeddedFieldName]: updateDto } as any },
                { new: true },
            )
            .lean()
            .exec();

        if (!updatedRecord) throw new NotFoundException('Not Found record');

        return this.singleEntityClass['create'](updatedRecord[this.embeddedFieldName]);
    }
}