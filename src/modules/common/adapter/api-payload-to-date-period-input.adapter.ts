import { plainToInstance } from 'class-transformer'

import { Builder } from 'builder-pattern'
import { DatePeriodInput } from '@modules/common/input/date-period.input'
import { UniversalError } from '@src/shared-modules/common/class/universal-error'
import { EUniversalExceptionType } from '@src/shared-modules/common/enum/exceptions'


export const apiPayloadToDatePeriodInputAdapter = (transformPayload: string): DatePeriodInput => {
    const splitString = transformPayload.split(',')
    if (splitString.length !== 2) {
        Builder(UniversalError)
            .messages([
                'Not correct value for date period criteria',
                'Must match /^{.+},{.+}$/g regular expression',
            ])
            .exceptionBaseClass(EUniversalExceptionType.badRequest)
            .build().throw()
    }
    const plainObject = {
        startDate: splitString[0].length ? splitString[0] : undefined,
        endDate: splitString[1].length ? splitString[1] : undefined,
    }

    return plainToInstance(DatePeriodInput, plainObject)
}