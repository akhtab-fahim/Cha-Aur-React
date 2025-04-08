import React, { useEffect, useState } from 'react'

function useCurrencyInfo(currency) {
  const [data, setData] = useState({})

  useEffect(() => {
    const date = new Date().toISOString().split('T')[0] // format: YYYY-MM-DD

    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-04-07/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      .catch((err) => console.error("Error fetching currency data:", err))
  }, [currency])

  return data
}

export default useCurrencyInfo
