import { Module } from '@nestjs/common'
import { GoogleModule } from '@core/google/google.module'
import { ImageController } from '@modules/image/image.controller'
import { ImageService } from '@modules/image/image.service'
import { ParserModule } from '@modules/parser/parser.module'

@Module({
    imports: [
        GoogleModule,
        ParserModule,
    ],
    controllers: [
        ImageController,
    ],
    providers: [
        ImageService,
    ],
})
export class ImageModule {
}