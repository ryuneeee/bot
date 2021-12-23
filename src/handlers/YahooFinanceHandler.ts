import axios, { AxiosResponse } from 'axios';
import { Message } from '../model/Message';
import { MessageHandler } from '../model/MessageHandler';

const FINANCE_HOST = 'https://finance.ryun.kr';

export class YahooFinanceHandler implements MessageHandler {
  handle(msg: Message) {
    let delimeter = msg.text().substring(0, 1);
    let code = msg.text().substring(1);

    if (delimeter !== '$') return;

    axios
      .get(`${FINANCE_HOST}/price/${code}`)
      .then(function (response: AxiosResponse) {
        msg.reply('YahooFinance', response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
}
