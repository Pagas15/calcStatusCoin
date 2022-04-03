export const rounder= (number, mutch) => Math.round(number * mutch) / mutch;

export const averaging = (firstSoum, firstPrice, secondSoum, secondPrice) => ((firstSoum * firstPrice) + (secondSoum * secondPrice)) / (firstSoum + secondSoum);

export const getSortKeys = (object) => {
	const keys = {}
	Object.keys(object).forEach(key => {
    let marketCoin = object[key].Market;
    keys[marketCoin] ?? (keys[marketCoin] = [])
    keys[marketCoin].push(object[key])
	});
	return keys;
};

export const filterNull = (object) => {
  const newObject = {};
  Object.keys(object).forEach(key => {
    const coin = object[key];
    let infoMyTrade = {
      amount: 0,
      price: 0,
      howMoney: 0,
      withdrawn: 0
    };
    coin.forEach(item => {
      let amountItem = Number(item.Amount);
      let priceItem = Number(item.Price);
      let totalItem = amountItem * priceItem;
      if (item.Type === 'BUY') {
        infoMyTrade.price = averaging(infoMyTrade.amount, infoMyTrade.price, amountItem, priceItem);
        infoMyTrade.amount += amountItem;
        infoMyTrade.howMoney += totalItem;
      } else if (item.Type === 'SELL') {
        infoMyTrade.amount -= amountItem;
        infoMyTrade.withdrawn += totalItem;
        if (infoMyTrade.amount <= 0) {
          infoMyTrade.amount = 0;
          infoMyTrade.price = 0;
          infoMyTrade.howMoney = 0;
          infoMyTrade.withdrawn = 0;
        }
      }
    })
    if (!((infoMyTrade.amount < 0.00001) || (key === "USDTUAH") || (key === "BTCUSDT"))) {
      newObject[key] = infoMyTrade;
    }
  });
  return newObject
};

export const getSortFilter = (object) => filterNull(getSortKeys(object));