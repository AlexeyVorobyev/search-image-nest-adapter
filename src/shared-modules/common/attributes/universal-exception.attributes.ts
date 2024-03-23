import { ApiProperty } from '@nestjs/swagger'

export class UniversalExceptionAttributes {
	@ApiProperty({
		type:[String]
	})
	message: string | string[]

	@ApiProperty()
	error: string

	@ApiProperty()
	statusCode: number
}