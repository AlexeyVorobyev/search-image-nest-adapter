import { ApiProperty, PickType } from '@nestjs/swagger'
import { ListInput } from '@modules/common/input/list.input'
import { EImageSource } from '@core/enum/image-source.enum'
import { IsEnum, IsOptional } from 'class-validator'

export class ImageListInput extends PickType(ListInput, ['simpleFilter']) {
    @IsOptional()
    @IsEnum(EImageSource)
    @ApiProperty({
        description: 'Source of retrieved data',
        enum: EImageSource
    })
    source:EImageSource = EImageSource.google
}
