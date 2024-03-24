import { Module } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'
import { GoogleFetchService } from '@core/google/fetch/google-fetch.service'

@Module({
    imports: [HttpModule],
    providers: [GoogleFetchService],
    exports: [GoogleFetchService],
})
export class GoogleFetchModule {
}