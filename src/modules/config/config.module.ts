import { Module } from '@nestjs/common'
import appConfig from '@modules/config/config/app.config'
import swaggerConfig from '@modules/config/config/swagger.config'
import JwtConfig from '@modules/config/config/jwt.config'
import { ConfigModule as ConfigNestModule } from '@nestjs/config'
import { validate } from '@modules/config/env.validation'

@Module({
    imports: [
        ConfigNestModule.forRoot({
            envFilePath: `env/.env.${process.env.NODE_ENV}`,
            isGlobal: true,
            load: [appConfig, swaggerConfig, JwtConfig],
            validate: validate,
        }),
    ],
})
export class ConfigModule {
}