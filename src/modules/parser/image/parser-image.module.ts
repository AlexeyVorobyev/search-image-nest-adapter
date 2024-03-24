import { Module } from '@nestjs/common'
import { GoogleImageParser } from '@modules/parser/image/google/google-image.parser'
import { sourceImageParserRegister } from '@modules/parser/image/register/source-image-parser.register'

@Module({
    providers: [
        ...sourceImageParserRegister(GoogleImageParser),
    ],
})
export class ParserImageModule {
}