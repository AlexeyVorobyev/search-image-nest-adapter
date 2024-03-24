import { plainToInstance } from 'class-transformer'
import { Builder } from 'builder-pattern'
import { SortInput } from '@modules/common/input/sort-input'
import { UniversalError } from '@src/shared-modules/common/class/universal-error'
import { EUniversalExceptionType } from '@src/shared-modules/common/enum/exceptions'

export const apiPayloadToSortInputAdapter = (transformPayload: string): SortInput => {
    const splitString = transformPayload.split(',')
    if (splitString.length !== 2) {
        Builder(UniversalError)
            .messages([
                'Not correct value for sort criteria',
                'Must match /^{.+},(ASC|DESC)$/g regular expression'
            ])
            .exceptionBaseClass(EUniversalExceptionType.badRequest)
            .build().throw()
    }
    const plainObject = {
        columnName: splitString[0],
        direction: splitString[1],
    }

    return plainToInstance(SortInput, plainObject)
}