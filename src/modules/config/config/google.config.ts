import { registerAs } from '@nestjs/config'
import * as process from 'process'

export default registerAs('google', () => {
    return {
        rootApi: process.env.GOOGLE_ROOT_API
    }
})