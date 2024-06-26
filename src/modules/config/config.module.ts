import { Module } from '@nestjs/common'
import appConfig from '@modules/config/config/app.config'
import swaggerConfig from '@modules/config/config/swagger.config'
import { ConfigModule as ConfigNestModule } from '@nestjs/config'
import { validate } from '@modules/config/env.validation'
import googleConfig from '@modules/config/config/google.config'
import yandexConfig from '@modules/config/config/yandex.config'
import imageServiceConfig from '@modules/config/config/image-service.config'

@Module({
    imports: [
        ConfigNestModule.forRoot({
            envFilePath: `env/.env.${process.env.NODE_ENV}`,
            isGlobal: true,
            load: [
                appConfig,
                swaggerConfig,
                googleConfig,
                yandexConfig,
                imageServiceConfig,
            ],
            validate: validate,
        }),
    ],
})
export class ConfigModule {
}