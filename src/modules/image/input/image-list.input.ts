import { ApiProperty, PickType } from '@nestjs/swagger'
import { ListInput } from '@modules/common/input/list.input'
import { EImageSource } from '@core/enum/image-source.enum'
import { IsBoolean, IsEnum, IsOptional } from 'class-validator'
import { Transform, Type } from 'class-transformer'
import { apiPayloadToBooleanAdapter } from '@modules/common/adapter/api-payload-to-boolean.adapter'

export class ImageListInput extends PickType(ListInput, ['simpleFilter', 'page', 'perPage']) {
    @IsOptional()
    @IsEnum(EImageSource)
    @ApiProperty({
        description: 'Source of retrieved data',
        enum: EImageSource,
        default: EImageSource.google,
        required: false,
    })
    source: EImageSource = EImageSource.google

    @IsOptional()
    @IsBoolean()
    @Transform(apiPayloadToBooleanAdapter)
    @ApiProperty({
        description: 'Perform healthcheck of images',
        default: false,
        required: false,
        type: Boolean,
    })
    healthCheck: boolean = false

    @IsOptional()
    @Type(() => Number)
    @ApiProperty({
        description: 'Max image retrieval timeout for healthcheck in ms',
        required: false,
        type: Number,
    })
    healthCheckTimeout: number
}
