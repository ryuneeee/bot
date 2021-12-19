import { Processor } from './Processor';
import * as Providers from './provider';

const processor = new Processor();

new Providers.Slack(processor).start(Number(process.env.PORT));
new Providers.Discord(processor).start();
