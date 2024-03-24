import { Module } from '@nestjs/common'
import { ParserImageModule } from '@modules/parser/image/parser-image.module'

@Module({
    imports: [
        ParserImageModule
    ],
    exports: [
        ParserImageModule
    ]
})
export class ParserModule {
}