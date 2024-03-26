import { Inject, Injectable, MethodNotAllowedException } from '@nestjs/common'
import { ImageListInput } from '@modules/image/input/image-list.input'
import { ModuleRef } from '@nestjs/core'
import { EImageSource } from '@core/enum/image-source.enum'
import { sourceImageServiceToken } from '@core/register/source-image-service.register'
import { SourceImageService } from '@core/class/source-image.service'
import { sourceImageParserToken } from '@modules/parser/image/register/source-image-parser.register'
import { SourceImageParser } from '@modules/parser/image/class/source-image.parser'
import { ImageListAttributes } from '@modules/image/attributes/image-list.attributes'
import { Builder } from 'builder-pattern'
import { ListMetaAttributes } from '@modules/common/attributes/list-meta.attributes'
import { HttpService } from '@nestjs/axios'
import { firstValueFrom } from 'rxjs'
import { resolveAllProperties } from '@src/shared-modules/common/common/resolve-all-properties.function'
import { ConfigType } from '@nestjs/config'
import imageServiceConfig from '@modules/config/config/image-service.config'

@Injectable()
export class ImageService {
    constructor(
        @Inject(imageServiceConfig.KEY)
        private imageServiceConfiguration: ConfigType<typeof imageServiceConfig>,
        private httpService: HttpService,
        private moduleRef: ModuleRef,
    ) {
    }

    async list(input: ImageListInput): Promise<ImageListAttributes> {
        const [
            sourceImageService,
            sourceImageParser,
        ] = await Promise.all([
            this.getSourceImageService(input.source),
            this.getSourceImageParser(input.source),
        ])

        const rawData = await sourceImageService.sourceImageListFetch(input.simpleFilter)

        let parsedData = await sourceImageParser.sourceImageParse(rawData)

        console.log(input.healthCheck)

        if (input.healthCheck) {
            const healthCheckResults = await Promise.all(
                parsedData.map((link) => (
                    resolveAllProperties(
                        {
                            link: link,
                            healthCheckResult: this.healthCheck(
                                link,
                                input.healthCheckTimeout || this.imageServiceConfiguration.requestConnectionTimeout,
                            ),
                        },
                    )
                )),
            )

            parsedData = healthCheckResults
                .filter((item) => item.healthCheckResult)
                .map((item) => item.link)
        }

        return Builder<ImageListAttributes>()
            .data(
                parsedData.filter((_, index) => (
                    index >= input.perPage * input.page
                    && index <= input.perPage * (input.page + 1)
                )),
            )
            .meta(
                Builder<ListMetaAttributes>()
                    .currentPage(input.page)
                    .elementsPerPage(input.perPage)
                    .totalElements(parsedData.length)
                    .totalPages(Math.ceil(parsedData.length / input.perPage))
                    .build(),
            )
            .build()
    }

    private async healthCheck(link: string, timeout: number): Promise<boolean> {
        const controller = new AbortController()
        try {
            let response = null

            setTimeout(() => {
                if (response === null) {
                    controller.abort()
                }
            }, timeout)

            response = await firstValueFrom(
                this.httpService.get(link, {
                    signal: controller.signal,
                }),
            )

            return true
        } catch (e) {
            return false
        }
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