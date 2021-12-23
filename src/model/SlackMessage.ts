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

  reply(templateType: string, data: object): void {
    this.say({
      text: data,
    });
  }
}
