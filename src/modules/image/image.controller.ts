import { Controller, Get, Query } from '@nestjs/common'
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { ImageListInput } from '@modules/image/input/image-list.input'
import { ImageService } from '@modules/image/image.service'
import { UniversalExceptionAttributes } from '@src/shared-modules/common/attributes/universal-exception.attributes'
import { ImageListAttributes } from '@modules/image/attributes/image-list.attributes'

@Controller('image')
@ApiTags('image')
export class ImageController {
    constructor(
        private imageService: ImageService,
    ) {
    }

    @ApiBadRequestResponse({
        description: 'Some mistake occurred',
        type: UniversalExceptionAttributes,
    })
    @ApiOkResponse({
        description: 'Image list successfully received',
        type: ImageListAttributes,
    })
    @ApiOperation({
        summary: 'Image links list endpoint',
        description: 'Endpoint for getting list of image links by simple search parameter',
    })
    @Get('list')
    async list(@Query() input: ImageListInput) {
        return this.imageService.list(input)
    }
}