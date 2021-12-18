import { Message } from './Message';

export interface MessageHandler {
  handle(msg: Message): any;
}
