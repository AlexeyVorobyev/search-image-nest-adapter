import { SourceImageParser } from '@modules/parser/image/class/source-image.parser'
import { EImageSource } from '@core/enum/image-source.enum'
import { Injectable } from '@nestjs/common'
import { JSDOM } from 'jsdom'

@Injectable()
export class YandexImageParser extends SourceImageParser {
    static sourceKey: EImageSource = EImageSource.yandex

    constructor() {
        super()
    }

    async sourceImageParse(input: string): Promise<string[]> {
        const dom = new JSDOM(input)

        const imagesArray = Array.from<HTMLImageElement>(
            dom.window.document.getElementsByTagName('img')
        )

        const divItems = Array.from<HTMLDivElement>(
            dom.window.document.getElementsByTagName('div')
        )

        const dataRootDiv = divItems
            .filter((item) => item.className === 'Root')
            .filter((item) => item.hasAttribute('data-state'))

        const dataStatesText =   dataRootDiv
            .map((item) => item.getAttribute('data-state'))
            .join('|')

        const regexFindLinks = new RegExp('https:\/\/[A-Za-z&\/0-9\.\\-%]+\.jpg', 'mg')

        return [...dataStatesText.match(regexFindLinks)]
    }
}