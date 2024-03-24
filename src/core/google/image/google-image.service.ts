import { GoogleFetchService } from '@core/google/fetch/google-fetch.service'
import { Inject, Injectable } from '@nestjs/common'
import googleConfig from '@modules/config/config/google.config'
import { ConfigType } from '@nestjs/config'
import { GoogleQueryBuilder } from '@core/google/query-builder/google.query-builder'
import { EGoogleEndpoint } from '@core/google/enum/google-endpoint.enum'
import { EImageParam } from '@core/google/image/enum/image-param.enum'
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
            .setImageParam(EImageParam.tbm, [TBM_PARAM_VALUE])
            .setImageParam(EImageParam.search, [input])

        console.log(googleQueryBuilder.toString())

        const result = await this.googleFetchService.fetch(googleQueryBuilder.toString())

        return result.data
    }
}