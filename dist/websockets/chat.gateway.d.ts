import { Socket, Server } from 'socket.io';
declare class ChatMessage {
    nickname: string;
    message: string;
}
export declare class ChatGateway {
    server: Server;
    handleMessage(message: ChatMessage, _client: Socket): void;
}
export {};
