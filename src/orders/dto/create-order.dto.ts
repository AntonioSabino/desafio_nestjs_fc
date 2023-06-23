import { IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  assetId: string;

  @IsNumber()
  price: number;
}
