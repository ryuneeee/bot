import { Message } from '../model/Message';
import { MessageHandler } from '../model/MessageHandler';

export class EchoHandler implements MessageHandler {
  handle(msg: Message) {
    msg.reply(msg.text());
  }
}
