import { registerAs } from '@nestjs/config'
import * as process from 'process'

export default registerAs('yandex', () => {
    return {
        rootApi: process.env.YANDEX_ROOT_API
    }
})