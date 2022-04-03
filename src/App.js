import { useEffect, useState } from 'react';
import './App.css';
import Info from './components/Info.jsx';
import { getFilter } from './lib/scripts';

function App() {
  const [history, setHistory] = useState(null);
  const [price, setPrice] = useState(null);
  const [count, setCount] = useState(0);
  
  const urlBinance = 'https://api1.binance.com/api/v3';
  const urlHistory = 'https://pagas15.github.io/cry/history.json';

  const pricer = () => {
    const listOfPromises = Object.keys(history).map(keys => 
      fetch(`${urlBinance}/ticker/price?symbol=${keys}`)
        .then(json => json.json())
    )

    Promise.all(listOfPromises).then(array => {setPrice(array)})
  }
  
  useEffect(() => {
    fetch(urlHistory)
      .then(json => json.json())
      .then(array => {
        let reverseArray = array.reverse();
        reverseArray = getFilter(reverseArray);
        setHistory(reverseArray)
      })

    setCount(count + 1)
    return () => {}
  }, [])
  
  useEffect(() => {
    history && pricer();

    return () => {}
  }, [count, history])

  const btnOnClick = () => {
    setCount(count + 1)
  }
  return (
    <div className="coinLiss">
      {price && <Info price={price} history={history}/>}
      <button type="button" className="btnUpdata" onClick={btnOnClick}>UPDATA</button>
    </div>
  );
}

export default App;
