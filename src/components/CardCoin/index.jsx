import React from 'react';
import { rounder } from '../../lib/scripts';

const CardCoin = ({symbol, amount, color, actual, mid, priceDt, price, tPercent, buys}) => {
	return (
		<li key={symbol} className={"coinLiss__item" + color}>
			<p className="coinLiss__name" title="ИМЯ МОНЕТЫ">{symbol}</p>
			<p className="coinLiss__have" title="МОНЕТ В ЗДЕЛКЕ">{rounder(amount, 10000000)}</p>
			<p className={"coinLiss__profit" + color} title="Актуальная прибыль в usdt">{rounder(actual - mid, 100)} USDT</p>
			<p className={"coinLiss__profit" + color} title="Актуальная прибыль в %">{tPercent}%</p>
			<p className="coinLiss__priceUC" title="Б/У">{rounder(buys, 1000)} USDT</p>
			<p className="coinLiss__averageBy" title="Средняя цена входа">{rounder(priceDt, 1000)} USDT</p>
			<p className="coinLiss__act" title="Актульно в USDT">{rounder(actual, 100)} USDT</p>
			<p className="coinLiss__actPrice" title="Актуальная цена">{rounder(price, 1000)} USDT</p>
			<p className="coinLiss__cost" title="Потрачено на покупку">{rounder(mid, 100)} USDT</p>
			<p></p>
		</li>
	)
}

export default CardCoin