import { Module } from '@nestjs/common'
import { JwtOauth2Module } from '@src/shared-modules/jwt-oauth2/jwt-oauth2.module'
import { ConfigModule } from '@modules/config/config.module'

@Module({
    imports: [
        ConfigModule,
        JwtOauth2Module,
    ],
})
export class AppModule {
}
