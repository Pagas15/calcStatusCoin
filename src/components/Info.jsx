import { useState } from 'react';
import CardsList from './CardCoin/CardsList.jsx';
import Title from './Title';

const Info = ({price, history}) => {
  const [result, setResult] = useState({spent: 0, actual: 0 });

	const calcResult = obj => setResult(obj);

	console.log(1);
	return (<>
		{/* <Title result={result}/> */}
		<CardsList priceArray={price} resultArray={history} calcResult={calcResult}/>
	</>)
}

export default Info