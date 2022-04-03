import React from 'react'
import CardCoin from './';

import { rounder } from '../../lib/scripts';

const CardsList = ({priceArray, resultArray, calcResult}) => {
	const localCalc = {spent: 0, actual: 0 };

	const listCardCoin = priceArray.map(({symbol, price})=> {
		const result = resultArray[symbol];

		let mid = result.howMoney - result.withdrawn;
    let actual = result.amount * price;
    let buys = mid / result.amount;

		localCalc.spent += mid;
		localCalc.actual += actual
		

    let tPer = rounder((price / (buys / 100)), 1) - 100;
    let color = ' ' + (tPer >= 1 ? 'cGreen' : tPer <= 1 && tPer >= -0.5 ? 'cBlue' : 'cRed');

		// return <CardCoin key={symbol} symbol={symbol} amount={result.amount} color={color} actual={actual} mid={mid} priceDt={result.price} price={price} tPer={tPer} buys={buys}/>
	})

	console.log(localCalc)
	// calcResult(localCalc)

	return (
		<ul className="coinLiss__list">
			{listCardCoin}
			<li className="coinLiss__item">
				<p className="coinLiss__name">ИМЯ МОНЕТЫ</p>
				<p className="coinLiss__have">МОНЕТ В ЗДЕЛКЕ</p>
				<p className="coinLiss__profit">Актуальная прибыль</p>
				<p className="coinLiss__profit">Актуальная прибыль в %</p>
				<p className="coinLiss__priceUC" title="Б/У">Б/У</p>
				<p className="coinLiss__averageBy" title="Средняя цена входа">Средняя цена входа</p>
				<p className="coinLiss__act" title="Актульно в USDT">Актульно в USDT </p>
				<p className="coinLiss__actPrice" title="Актуальная цена">Актуальная цена</p>
				<p className="coinLiss__cost" title="Потрачено на покупку">Потрачено на покупку</p>
				<p></p>
			</li>
		</ul>
	)
}

export default CardsList