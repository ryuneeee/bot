import { Message } from './Message';

export class DiscordMessage implements Message {
  message: any;

  constructor(message: any) {
    this.message = message;
  }

  text(): string {
    return this.message.content;
  }

  reply(text: string): void {
    if (!this.message.author.bot) {
      this.message.reply(text);
    }
  }
}
