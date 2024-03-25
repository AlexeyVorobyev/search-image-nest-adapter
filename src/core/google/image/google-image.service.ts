import { GoogleFetchService } from '@core/google/fetch/google-fetch.service'
import { Inject, Injectable } from '@nestjs/common'
import googleConfig from '@modules/config/config/google.config'
import { ConfigType } from '@nestjs/config'
import { GoogleQueryBuilder } from '@core/google/google.query-builder'
import { EGoogleEndpoint } from '@core/google/enum/google-endpoint.enum'
import { EGoogleImageParam } from '@core/google/image/enum/google-image-param.enum'
import { TBM_PARAM_VALUE } from '@core/google/image/const'
import { SourceImageService } from '@core/class/source-image.service'
import { EImageSource } from '@core/enum/image-source.enum'

@Injectable()
export class GoogleImageService extends SourceImageService {
    static sourceKey: EImageSource = EImageSource.google

    constructor(
        @Inject(googleConfig.KEY)
        private googleConfiguration: ConfigType<typeof googleConfig>,
        private googleFetchService: GoogleFetchService,
    ) {
        super()
    }

    async sourceImageListFetch(input: string): Promise<string> {
        const googleQueryBuilder = new GoogleQueryBuilder(
            this.googleConfiguration.rootApi,
            EGoogleEndpoint.search,
        )

        googleQueryBuilder
            .setImageParam(EGoogleImageParam.tbm, [TBM_PARAM_VALUE])
            .setImageParam(EGoogleImageParam.search, [input])

        const result = await this.googleFetchService.fetch(googleQueryBuilder.toString())

        return result.data
    }
}