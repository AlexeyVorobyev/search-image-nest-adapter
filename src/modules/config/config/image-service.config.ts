import { registerAs } from '@nestjs/config'
import * as process from 'process'

export default registerAs('app', () => {
	return {
		requestConnectionTimeout: parseInt(process.env.IMAGE_SERVICE_REQUEST_CONNECTION_TIMEOUT) || 2000
	}
})