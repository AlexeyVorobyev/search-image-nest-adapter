import { Builder } from 'builder-pattern'
import { UniversalError } from '@src/shared-modules/common/class/universal-error'
import { EUniversalExceptionType } from '@src/shared-modules/common/enum/exceptions'
import { EImageSource } from '@core/enum/image-source.enum'

export abstract class SourceImageParser {
    static sourceKey: EImageSource

    async sourceImageParse(input: any): Promise<string[]> {
        Builder(UniversalError)
            .messages(['Method not implemented'])
            .exceptionBaseClass(EUniversalExceptionType.server)
            .build().throw()
        return []
    }
}