import { EGoogleEndpoint } from '@core/google/enum/google-endpoint.enum'
import { EImageParam } from '@core/google/image/enum/image-param.enum'

export class GoogleQueryBuilder {
    constructor(
        private readonly root: string,
        private readonly endpoint: EGoogleEndpoint,
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

    setImageParam(key: EImageParam, values: string[]) {
        this.setParam(key, values)

        return this
    }

    private setParam(key: string, values: string[]) {
        console.log(values)
        const formattedValues = values.join(',')

        console.log(formattedValues)

        this.query.searchParams.set(key, formattedValues)
    }
}