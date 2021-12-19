import { YahooFinanceHandler } from './handlers/YahooFinanceHandler';
import { Message } from './model/Message';
import { MessageHandler } from './model/MessageHandler';

export class Processor {
  private handlers: Array<MessageHandler> = [];

  constructor() {
    this.handlers.push(new YahooFinanceHandler());
  }

  handleMessage(message: Message) {
    this.handlers.map((h) => h.handle(message));
  }
}
