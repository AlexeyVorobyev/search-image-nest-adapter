import { Type } from '@nestjs/common'
import { ApiProperty } from '@nestjs/swagger'
import { ListMetaAttributes } from '@modules/common/attributes/list-meta.attributes'

export function listAttributesFactory<Entity>(classRef: Type<Entity>) {
    class ListAttributes {
        @ApiProperty({
            description: 'Array of items',
            type: classRef
        })
        data: Entity[]

        @ApiProperty({
            description: 'Meta of list',
            type: ListMetaAttributes
        })
        meta: ListMetaAttributes
    }

    return ListAttributes
}