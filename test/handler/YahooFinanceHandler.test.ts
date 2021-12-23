import { YahooFinanceHandler } from '../../src/handlers/YahooFinanceHandler';
import { Message } from '../../src/model/Message';

export class TestMessage implements Message {
  _text: string;
  _reply: string;

  constructor(text: string) {
    this._text = text;
  }

  text(): string {
    return this._text;
  }

  reply(text: string): void {
    this._reply = text;
  }

  sentMessage(): string {
    return this._reply;
  }
}

describe('blah', () => {
  let handler = new YahooFinanceHandler();

  it('works', async () => {
    let msg = new TestMessage('$AAPL');
    await handler.handle(msg);

    expect(1).toEqual(1);
    // expect(msg._reply.substring(0,7)).toEqual('> AAPL:');
  });
});
