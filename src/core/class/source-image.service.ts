import { Builder } from 'builder-pattern'
import { UniversalError } from '@src/shared-modules/common/class/universal-error'
import { EUniversalExceptionType } from '@src/shared-modules/common/enum/exceptions'
import { EImageSource } from '@core/enum/image-source.enum'

export abstract class SourceImageService {
    static sourceKey: EImageSource
    async sourceImageListFetch(input:string):Promise<any> {
        Builder(UniversalError)
            .messages(['Method not implemented'])
            .exceptionBaseClass(EUniversalExceptionType.server)
            .build().throw()
    }
}