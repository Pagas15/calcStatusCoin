import React from 'react'
import { rounder } from '../lib/scripts'

const Title = ({result}) => {
  let oPer = rounder((result.actual / (result.spent / 100)) - 100, 10);
  let outcome = ' ' + (oPer >= 1 ? 'cGreen' : oPer <= 1 && oPer >= -0.5 ? 'cBlue' : 'cRed')
	
	return (
		<div className={"coinLiss__item coinLiss__outcome" + outcome}>
			<p className="coinLiss__name">Потрачено:<br /> {rounder(result.spent, 10)} USDT</p>
			<p className="coinLiss__have">Актуально:<br /> {rounder(result.actual, 10)} USDT</p>
			<p className={"coinLiss__profit" + outcome}>Итог: {(oPer >= 0 ? '+' : '-')}{rounder((result.spent - result.actual) * -1, 10)} USDT</p>
			<p className={"coinLiss__profit" + outcome}>{rounder((result.actual / (result.spent / 100)) - 100, 10)}%</p>
		</div>
	)
}

export default Title