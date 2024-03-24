import { SourceImageParser } from '@modules/parser/image/class/source-image.parser'
import { EImageSource } from '@core/enum/image-source.enum'
import { Injectable } from '@nestjs/common'
import { JSDOM } from 'jsdom'

@Injectable()
export class GoogleImageParser extends SourceImageParser {
    static sourceKey: EImageSource = EImageSource.google

    constructor() {
        super()
    }

    async sourceImageParse(input: string): Promise<string[]> {
        const dom = new JSDOM(input)

        const imagesArray = Array.from<HTMLImageElement>(
            dom.window.document.getElementsByTagName('img')
        )

        return imagesArray
            .map((item) => item.src)
            .filter((item) => item.includes('http'))
    }
}