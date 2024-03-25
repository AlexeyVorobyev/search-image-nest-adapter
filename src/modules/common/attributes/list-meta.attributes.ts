import { ApiProperty } from '@nestjs/swagger'

export class ListMetaAttributes {
    @ApiProperty({
        description: 'Total amount of elements in list',
        type: Number
    })
    totalElements: number

    @ApiProperty({
        description: 'Total amount of pages in list',
        type: Number
    })
    totalPages: number

    @ApiProperty({
        description: 'Current page',
        type: Number
    })
    currentPage: number

    @ApiProperty({
        description: 'Elements per page',
        type: Number
    })
    elementsPerPage: number
}