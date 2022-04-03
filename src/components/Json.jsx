import React, { useState, useEffect } from 'react'


const getKeys = (object) => {
	const keys = {}
	Object.keys(object).forEach(key => {
    let marketCoin = object[key].Market;
    keys[marketCoin] ?? (keys[marketCoin] = [])
    keys[marketCoin].push(object[key])
	});
	return keys;
}

const Json = () => {
  const [history, setHistory] = useState({})
  
  useEffect(() => {
    fetch('http://localhost:3000/history.json')
      .then(json => json.json())
      .then(json => json.reverse())
      .then(list => setHistory(list))
  
    return () => {
      setHistory({})
    }
  }, [])

	const coinColection = getKeys(history);

	console.log(coinColection);

	return (
    <div>

    </div>
  )
}

export default Json