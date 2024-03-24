import { IsDateString, IsOptional } from 'class-validator'

export class DatePeriodInput {
    @IsDateString()
    @IsOptional()
    startDate: Date

    @IsOptional()
    @IsDateString()
    endDate: Date
}