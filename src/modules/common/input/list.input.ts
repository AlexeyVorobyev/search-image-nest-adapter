import { IsNumber, IsOptional, IsPositive, IsString, Min, ValidateNested } from 'class-validator'
import { Transform, Type } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'
import { DatePeriodInput } from '@modules/common/input/date-period.input'
import { SortInput } from '@modules/common/input/sort-input'
import { ESortDirection } from '@modules/common/enum/sort-direction.enum'
import { apiPayloadToDatePeriodInputAdapter } from '@modules/common/adapter/api-payload-to-date-period-input.adapter'
import { apiPayloadToSortInputAdapter } from '@modules/common/adapter/api-payload-to-sort-input.adapter'
import { apiPayloadToArrayAdapter } from '@modules/common/adapter/api-payload-to-array.adapter'

export class ListInput {
    @ApiProperty({
        default: 0,
        required: false,
        type: Number,
    })
    @Min(0)
    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    page?: number = 0

    @ApiProperty({
        default: 5,
        required: false,
        type: Number,
    })
    @IsPositive()
    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    perPage?: number = 8

    @ApiProperty({
        default: '',
        required: false,
        type: String,
    })
    @IsString()
    @IsOptional()
    simpleFilter?: string

    @ApiProperty({
        description: 'Filter by entity id. Multiple criteria allowed with OR functionality',
        required: false,
        type: [String],
    })
    @IsOptional()
    @Transform((transformPayload) => (
        apiPayloadToArrayAdapter<string>(transformPayload)),
    )
    id?: string[]

    @ApiProperty({
        required: false,
        type: String,
        description: 'Datetime period criteria in the format: [createDateStart],[createDateEnd]',
        example: `${new Date(new Date().setFullYear(2023, 11, 1)).toISOString()},${new Date().toISOString()}`,
    })
    @ValidateNested()
    @IsOptional()
    @Transform((transformPayload) => apiPayloadToDatePeriodInputAdapter(transformPayload.value))
    createDatePeriod?: DatePeriodInput

    @ApiProperty({
        required: false,
        type: String,
        description: 'Datetime period criteria in the format: [updateDateStart],[updateDateEnd]',
        example: `${new Date(new Date().setFullYear(2023, 11, 1)).toISOString()},${new Date().toISOString()}`,
    })
    @ValidateNested()
    @IsOptional()
    @Transform((transformPayload) => apiPayloadToDatePeriodInputAdapter(transformPayload.value))
    updateDatePeriod?: DatePeriodInput

    @ApiProperty({
        required: false,
        type: String,
        isArray: true,
        description: 'Sorting criteria in the format: property,(ASC|DESC). Multiple sort criteria is supported',
        example: [`title,${ESortDirection.ascending}`, `subtitle,${ESortDirection.descending}`],
    })
    @IsOptional()
    @ValidateNested()
    @Transform((transformPayload) => (
        apiPayloadToArrayAdapter<SortInput>(transformPayload, (value) => apiPayloadToSortInputAdapter(value))),
    )
    sort?: SortInput[] = []
}