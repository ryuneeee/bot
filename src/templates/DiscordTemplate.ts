let priceFormatter = new Intl.NumberFormat('ko-KR', { style: "decimal" });
let formatter = new Intl.NumberFormat("en-GB", { style: "percent", maximumFractionDigits: 2});

export const templates: any = {
  "YahooFinance": (data: object): object => {
    let fields = Object.entries(data).map(([key, value]) => {
      return {
        name: `${value.longName}`,
        value: `${value.currencySymbol}${priceFormatter.format(value.regularMarketPrice)} (**${formatter.format(Number(value.regularMarketChangePercent))}**)`
      };
    });

    return {
      "embeds": [
        {
          "color": 5709258,
          "timestamp": Date().toString,
          "footer": {
            "text": "Powered by Yahoo! Finance"
          },
          "fields": fields
        }
      ]
    };
  }
} 