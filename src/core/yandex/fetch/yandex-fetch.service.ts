import { HttpService } from '@nestjs/axios'
import { catchError, firstValueFrom } from 'rxjs'
import { AxiosError } from 'axios'
import { Builder } from 'builder-pattern'
import { UniversalError } from '@src/shared-modules/common/class/universal-error'
import { EUniversalExceptionType } from '@src/shared-modules/common/enum/exceptions'
import { Injectable } from '@nestjs/common'
import { yandexFetchHeaders } from '@core/yandex/fetch/yandex-fetch-headers'

@Injectable()
export class YandexFetchService {
    constructor(
        private httpService: HttpService,
    ) {
    }

    async fetch(query: string) {

        return await firstValueFrom(
            this.httpService.get(query, {
                headers: yandexFetchHeaders
            }).pipe(
                catchError((error: AxiosError) => {
                    Builder(UniversalError)
                        .exceptionBaseClass(EUniversalExceptionType.badRequest)
                        .messages([
                            'Not correct request to yandex',
                            error.message,
                        ])
                        .build().throw()
                    throw 'An error happened!'
                }),
            ),
        )
    }
}