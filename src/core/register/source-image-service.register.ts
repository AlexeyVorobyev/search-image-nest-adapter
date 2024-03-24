import { SourceImageService } from '@core/class/source-image.service'
import { Provider } from '@nestjs/common'

export function sourceImageServiceRegister(
    sourceImageService: Omit<typeof SourceImageService, 'new'>,
) {
    return [
        sourceImageService,
        {
            provide: sourceImageServiceToken(sourceImageService.sourceKey),
            useExisting: sourceImageService,
        },
    ] as Provider[]
}

export const sourceImageServiceToken = (name: string) => `${name}SourceImageService`
