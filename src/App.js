import { useEffect, useState } from 'react';
import './App.css';
import Info from './components/Info.jsx';
import Test from './components/Test.jsx';
import { getSortFilter } from './lib/scripts';

function App() {
  const [history, setHistory] = useState(null);
  const [price, setPrice] = useState(null);
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    fetch('https://pagas15.github.io/cry/history.json')
      .then(json => json.json())
      .then(json => json.reverse())
      .then(list => {setHistory(getSortFilter(list))})
    return () => {}
  }, [])
  
  const uri = 'https://api1.binance.com/api/v3';
  const pricer = () => {
    Promise.all(
      Object.keys(history).map(keys => fetch(`${uri}/ticker/price?symbol=${keys}`)
        .then(r => r.json())
      )
    )
    .then(array => {setPrice(array)})
  }
  useEffect(() => {
    history && pricer();
  
    return () => {}
  }, [count])

  
  
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
