import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ParcelService {
  constructor(private readonly prisma: PrismaService) {}

    async getLatestLocation(parcelId: string) {
        return this.prisma.parcelLocation.findFirst({
        where: { parcelId },
        orderBy: { timestamp: 'desc' },
        });
    }
    async getLocationHistory(parcelId: string) {
        return this.prisma.parcelLocation.findMany({
            where: { parcelId },
            orderBy: { timestamp: 'asc' },
        });
    }
}
