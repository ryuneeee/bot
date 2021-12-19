import { Message } from './Message';

export class SlackMessage implements Message {
  message: any;
  say: any;

  constructor(message: any, say: any) {
    this.message = message;
    this.say = say;
  }
  text(): string {
    return this.message.text;
  }

  reply(text: string): void {
    this.say({
      text: this.text(),
    });
  }
}
