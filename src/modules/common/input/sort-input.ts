import { IsNotEmpty, IsString, Matches } from 'class-validator'
import { ESortDirection } from '@modules/common/enum/sort-direction.enum'


export class SortInput {
    @IsString()
    @IsNotEmpty()
    columnName: string

    @IsString()
    @IsNotEmpty()
    @Matches(/^(ASC|DESC)$/g)
    direction: ESortDirection
}