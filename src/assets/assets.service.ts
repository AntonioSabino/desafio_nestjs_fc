import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAssetDto } from './dto/create-asset.dto';

@Injectable()
export class AssetsService {
  constructor(private prismaService: PrismaService) {}

  create(data: CreateAssetDto) {
    return this.prismaService.asset.create({
      data,
    });
  }

  findAll() {
    return this.prismaService.asset.findMany();
  }
}
