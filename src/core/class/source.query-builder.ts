import { EGoogleEndpoint } from '@core/google/enum/google-endpoint.enum'
import { EGoogleImageParam } from '@core/google/image/enum/google-image-param.enum'

export abstract class SourceQueryBuilder {
    protected constructor(
        private readonly root: string,
        private readonly endpoint: string,
    ) {
        this.query = new URL(`${this.root}/${this.endpoint}`)
    }

    protected query: URL

    toString() {
        return this.query.toString()
    }

    toURL() {
        return this.query
    }

    protected setParam(key: string, values: string[]) {
        const formattedValues = values.join(',')

        this.query.searchParams.set(key, formattedValues)
    }
}