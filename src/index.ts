import { App as Slack } from '@slack/bolt';
import { EchoSlackMessage } from './model/EchoSlackMessage';
import { Processor } from './Processor';

const processor = new Processor();

const slack = new Slack({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

slack.message(/.*/g, async ({ message, say }: { message: any; say: any }) => {
  processor.handleMessage(new EchoSlackMessage(message, say));
});

(async () => {
  await slack.start(Number(process.env.PORT) || 3000);
  console.log(`⚡️ Bolt app is running at ${Number(process.env.PORT) || 3000}`);
})();
