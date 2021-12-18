import { App as Slack } from '@slack/bolt';
import { SlackMessage } from './model/SlackMessage';
import { Processor } from './Processor';

const processor = new Processor();

const slack = new Slack({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

slack.message(/.*/g, async ({ message, say }: { message: any; say: any }) => {
  processor.handleMessage(new SlackMessage(message, say));
});

(async () => {
  await slack.start(Number(process.env.PORT) || 3000);
  
  console.log(`⚡️ Bolt app is running at ${Number(process.env.PORT) || 3000}`);
})();
