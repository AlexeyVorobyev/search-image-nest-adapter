import { Module } from '@nestjs/common'
import { GoogleImageParser } from '@modules/parser/image/google/google-image.parser'
import { sourceImageParserRegister } from '@modules/parser/image/register/source-image-parser.register'
import { YandexImageParser } from '@modules/parser/image/google/yandex-image.parser'

@Module({
    providers: [
        ...sourceImageParserRegister(GoogleImageParser),
        ...sourceImageParserRegister(YandexImageParser)
    ],
})
export class ParserImageModule {
}