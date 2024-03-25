import { TransformFnParams } from 'class-transformer'
import { UniversalError } from '@src/shared-modules/common/class/universal-error'
import { Builder } from 'builder-pattern'
import { EUniversalExceptionType } from '@src/shared-modules/common/enum/exceptions'

export const apiPayloadToBooleanAdapter = <Entity>(transformPayload: TransformFnParams): boolean => {
    if (transformPayload.value === 'true') {
        return true
    }
    if (transformPayload.value === 'false') {
        return false
    }

    Builder(UniversalError)
        .messages([
            'Not correct value for boolean',
            'Use true or false'
        ])
        .exceptionBaseClass(EUniversalExceptionType.badRequest)
        .build().throw()
}