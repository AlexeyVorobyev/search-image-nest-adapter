import { Injectable, MethodNotAllowedException } from '@nestjs/common'
import { ImageListInput } from '@modules/image/input/image-list.input'
import { ModuleRef } from '@nestjs/core'
import { EImageSource } from '@core/enum/image-source.enum'
import { sourceImageServiceToken } from '@core/register/source-image-service.register'
import { SourceImageService } from '@core/class/source-image.service'
import { sourceImageParserToken } from '@modules/parser/image/register/source-image-parser.register'
import { SourceImageParser } from '@modules/parser/image/class/source-image.parser'

@Injectable()
export class ImageService {
    constructor(
        private moduleRef: ModuleRef,
    ) {
    }

    async list(input: ImageListInput) {
        const [
            sourceImageService,
            sourceImageParser
        ] = await Promise.all([
            this.getSourceImageService(input.source),
            this.getSourceImageParser(input.source)
        ])

        const rawData = await sourceImageService.sourceImageListFetch(input.simpleFilter)

        return await sourceImageParser.sourceImageParse(rawData)
    }

    private async getSourceImageService(key: EImageSource) {
        try {
            return this.moduleRef.get(
                sourceImageServiceToken(key),
                {
                    strict: false,
                },
            ) as SourceImageService
        } catch {
            throw new MethodNotAllowedException()
        }
    }

    private async getSourceImageParser(key: EImageSource) {
        try {
            return this.moduleRef.get(
                sourceImageParserToken(key),
                {
                    strict: false,
                },
            ) as SourceImageParser
        } catch {
            console.log('here')
            throw new MethodNotAllowedException()
        }
    }
}