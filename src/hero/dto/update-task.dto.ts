import { IsNotEmpty } from "class-validator";

export class updateTasStatuskDto{
    @IsNotEmpty()
    status:string;

    @IsNotEmpty()
    id: number
}