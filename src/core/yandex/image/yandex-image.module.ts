import { Module } from '@nestjs/common'
import { GoogleFetchModule } from '@core/google/fetch/google-fetch.module'
import { GoogleFetchService } from '@core/google/fetch/google-fetch.service'
import { GoogleImageService } from '@core/google/image/google-image.service'
import { sourceImageServiceRegister } from '@core/register/source-image-service.register'
import { YandexFetchModule } from '@core/yandex/fetch/yandex-fetch.module'
import { YandexImageService } from '@core/yandex/image/yandex-image.service'

@Module({
    imports: [YandexFetchModule],
    providers: [
        ...sourceImageServiceRegister(YandexImageService)
    ],
})
export class YandexImageModule {
}