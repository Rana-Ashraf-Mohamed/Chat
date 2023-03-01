import {ConnectedSocket,MessageBody,SubscribeMessage,WebSocketGateway,WebSocketServer} from '@nestjs/websockets';
import { IsNotEmpty, IsString } from 'class-validator';
import { Socket, Server } from 'socket.io';


class ChatMessage
{
  @IsNotEmpty()
  @IsString()
  nickname: string;
  
  @IsNotEmpty()
  @IsString()
  message: string;
}

@WebSocketGateway({
    cors: {
        origin: '*',
    }   
})


export class ChatGateway 
{
   @WebSocketServer()
   server: Server;

  @SubscribeMessage('text-chat')
  handleMessage(@MessageBody() message: ChatMessage,@ConnectedSocket() _client: Socket) 
  {
    console.log(message);
    this.server.emit('text-chat', 
    {
      ...message,
      time: new Date().toDateString(),
    });
  }
}