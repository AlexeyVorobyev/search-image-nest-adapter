import {Controller, Get, Query, UseGuards} from '@nestjs/common'
import {ApiBadRequestResponse, ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags} from '@nestjs/swagger'
import { ImageListInput } from '@modules/image/input/image-list.input'
import { ImageService } from '@modules/image/image.service'
import { UniversalExceptionAttributes } from '@src/shared-modules/common/attributes/universal-exception.attributes'
import { ImageListAttributes } from '@modules/image/attributes/image-list.attributes'
import {JwtRestAuthGuard} from '@src/shared-modules/common/guard/jwt-rest-auth.guard'

@Controller('image')
@ApiTags('image')
@UseGuards(JwtRestAuthGuard)
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
    @ApiBearerAuth()
    @Get('list')
    async list(@Query() input: ImageListInput) {
        return this.imageService.list(input)
    }
}