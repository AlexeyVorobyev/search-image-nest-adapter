import { Module } from '@nestjs/common'
import { GoogleImageModule } from '@core/google/image/google-image.module'

@Module({
    imports: [
        GoogleImageModule
    ],
    exports: [
        GoogleImageModule
    ]
})
export class GoogleModule {
}