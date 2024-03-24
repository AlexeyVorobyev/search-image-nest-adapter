import { Provider } from '@nestjs/common'
import { SourceImageParser } from '@modules/parser/image/class/source-image.parser'

export function sourceImageParserRegister(
    sourceImageParser: Omit<typeof SourceImageParser, 'new'>,
) {
    return [
        sourceImageParser,
        {
            provide: sourceImageParserToken(sourceImageParser.sourceKey),
            useExisting: sourceImageParser,
        },
    ] as Provider[]
}

export const sourceImageParserToken = (name: string) => `${name}SourceImageParser`
