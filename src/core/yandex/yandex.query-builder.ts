import { EGoogleEndpoint } from '@core/google/enum/google-endpoint.enum'
import { EGoogleImageParam } from '@core/google/image/enum/google-image-param.enum'
import { SourceQueryBuilder } from '@core/class/source.query-builder'
import { EYandexEndpoint } from '@core/yandex/enum/yandex-endpoint.enum'
import { EYandexImageParam } from '@core/yandex/image/enum/yandex-image-param.enum'

export class YandexQueryBuilder extends SourceQueryBuilder {
    constructor(
        root: string,
        endpoint: EYandexEndpoint,
    ) {
        super(root, endpoint)
    }

    setImageParam(key: EYandexImageParam, values: string[]) {
        this.setParam(key, values)

        return this
    }
}