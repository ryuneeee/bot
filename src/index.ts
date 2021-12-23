import { Processor } from './Processor';
import * as Providers from './provider';
import * as Eta from 'eta';

Eta.configure({
    views: "",
    cache: true // Make Eta cache templates
})

const processor = new Processor();

new Providers.Slack(processor).start(Number(process.env.PORT));
new Providers.Discord(processor).start();
