import { Module } from '@nestjs/common'
import { GoogleFetchModule } from '@core/google/fetch/google-fetch.module'
import { GoogleFetchService } from '@core/google/fetch/google-fetch.service'
import { GoogleImageService } from '@core/google/image/google-image.service'
import { sourceImageServiceRegister } from '@core/register/source-image-service.register'

@Module({
    imports: [GoogleFetchModule],
    providers: [
        ...sourceImageServiceRegister(GoogleImageService)
    ],
})
export class GoogleImageModule {
}