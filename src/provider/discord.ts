import { DiscordMessage } from '../model/DiscordMessage';
import { Processor } from '../Processor';

const { Client, Intents } = require('discord.js');

const newLocal = {
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,
  ],
  partials: ['CHANNEL'],
};

export class Discord {
  private processor: Processor;
  private client: any;

  constructor(processor: Processor) {
    this.processor = processor;
    this.client = new Client(newLocal);
  }

  start() {
    this.client.on('messageCreate', (msg: any) => {
      this.processor.handleMessage(new DiscordMessage(msg));
    });

    this.client.on('ready', () => {
      console.log(`>> Discord Logged in as ${this.client.user.tag}!`);
    });

    this.client.login(process.env.DISCORD_BOT_TOKEN);
  }
}
