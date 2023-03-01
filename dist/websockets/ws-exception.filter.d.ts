import { ArgumentsHost, WsExceptionFilter } from '@nestjs/common';
import { WsException } from '@nestjs/websockets';
export declare class WebsocketsExceptionFilter implements WsExceptionFilter {
    catch(_exception: WsException, host: ArgumentsHost): void;
}
