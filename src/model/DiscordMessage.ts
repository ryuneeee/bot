import { Message } from './Message';
import { templates } from '../templates/DiscordTemplate';

export class DiscordMessage implements Message {
  message: any;

  constructor(message: any) {
    this.message = message;
  }

  text(): string {
    return this.message.content;
  }

  reply(templateType: string, data: any): void {
    if (!this.message.author.bot) {
      this.message.reply(templates[templateType](data));
    }
  }
}
