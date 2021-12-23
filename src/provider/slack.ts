import { App } from '@slack/bolt';
import { Processor } from '../Processor';
import { SlackMessage } from '../model/SlackMessage';

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

export class Slack {
  private processor: Processor;

  constructor(processor: Processor) {
    this.processor = processor;

    app.message(/.*/g, async ({ message, say }: { message: any; say: any }) => {
      this.processor.handleMessage(new SlackMessage(message, say));
    });
  }

  start(port: number) {
    (async () => {
      await app.start(port || 3000);
      console.log(`>> ⚡️Slack Bolt app is running at ${port || 3000}`);
    })();
  }
}
