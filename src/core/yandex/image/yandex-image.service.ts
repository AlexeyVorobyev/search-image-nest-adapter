import { Inject, Injectable } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import { SourceImageService } from '@core/class/source-image.service'
import { EImageSource } from '@core/enum/image-source.enum'
import { YandexQueryBuilder } from '@core/yandex/yandex.query-builder'
import { EYandexEndpoint } from '@core/yandex/enum/yandex-endpoint.enum'
import { EYandexImageParam } from '@core/yandex/image/enum/yandex-image-param.enum'
import yandexConfig from '@modules/config/config/yandex.config'
import { YandexFetchService } from '@core/yandex/fetch/yandex-fetch.service'

@Injectable()
export class YandexImageService extends SourceImageService {
    static sourceKey: EImageSource = EImageSource.yandex

    constructor(
        @Inject(yandexConfig.KEY)
        private yandexConfiguration: ConfigType<typeof yandexConfig>,
        private yandexFetchService: YandexFetchService,
    ) {
        super()
    }

    async sourceImageListFetch(input: string): Promise<string> {
        const googleQueryBuilder = new YandexQueryBuilder(
            this.yandexConfiguration.rootApi,
            EYandexEndpoint.imagesSearch,
        )

        googleQueryBuilder
            .setImageParam(EYandexImageParam.search, [input])

        const result = await this.yandexFetchService.fetch(googleQueryBuilder.toString())

        return result.data
    }
}