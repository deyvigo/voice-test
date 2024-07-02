import { useEffect, useState } from "react"

export const useFetch = (url, options) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch(url, options)
        if (!response.ok) {
          throw new Error(`HTTP error status: ${response.status}`)
        }
        const result = await response.json()
        setData(result)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    if (url) {
      console.log(url)
      fetchData()
    }
  }, [url])

  return {
    data, loading, error
  }
}