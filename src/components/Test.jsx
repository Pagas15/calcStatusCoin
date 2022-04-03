import React, { useState } from 'react'

const Test = () => {
  const [result, setResult] = useState(0)
	
	return (
		<button onClick={()=>{setResult(result + 1)}}>Test: {result}</button>
	)
}

export default Test