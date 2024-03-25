import { EGoogleEndpoint } from '@core/google/enum/google-endpoint.enum'
import { EGoogleImageParam } from '@core/google/image/enum/google-image-param.enum'
import { SourceQueryBuilder } from '@core/class/source.query-builder'

export class GoogleQueryBuilder extends SourceQueryBuilder {
    constructor(
        root: string,
        endpoint: EGoogleEndpoint,
    ) {
        super(root, endpoint)
    }

    setImageParam(key: EGoogleImageParam, values: string[]) {
        this.setParam(key, values)

        return this
    }
}