import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  async create(createOrderDto: CreateOrderDto) {
    const { assetId, price } = createOrderDto;

    const order = await this.prismaService.order.create({
      data: {
        asset: { connect: { id: assetId } },
        price,
        status: 'pending',
      },
    });

    return order;
  }

  async findAll() {
    const orders = await this.prismaService.order.findMany({
      include: { asset: true },
    });

    return orders;
  }
}
