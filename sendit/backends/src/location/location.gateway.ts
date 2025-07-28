import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  OnGatewayConnection,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true }) // Enable CORS for frontend
export class LocationGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  @SubscribeMessage('joinParcelRoom')
  handleJoinParcelRoom(
    @MessageBody() data: { parcelId: string },
    client: Socket,
  ) {
    client.join(data.parcelId);
    console.log(`Client ${client.id} joined room ${data.parcelId}`);
  }

  sendLocationUpdate(parcelId: string, location: { latitude: number; longitude: number; timestamp: Date }) {
    this.server.to(parcelId).emit('locationUpdate', {
      parcelId,
      ...location,
    });
  }
}
