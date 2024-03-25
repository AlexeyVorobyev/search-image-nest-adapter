import { Module } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'
import { YandexFetchService } from '@core/yandex/fetch/yandex-fetch.service'

@Module({
    imports: [HttpModule],
    providers: [YandexFetchService],
    exports: [YandexFetchService],
})
export class YandexFetchModule {
}