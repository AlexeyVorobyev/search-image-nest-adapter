import { Module } from '@nestjs/common'
import { GoogleImageModule } from '@core/google/image/google-image.module'
import { YandexImageModule } from '@core/yandex/image/yandex-image.module'

@Module({
    imports: [
        YandexImageModule
    ],
    exports: [
        YandexImageModule
    ]
})
export class YandexModule {
}