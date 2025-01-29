// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useState } from 'react'
import { useEffect } from 'react'

export default function App() {
    const [from, setFrom] = useState('EUR')
    const [to, setTo] = useState('USD')
    const [inputValue, setInputValue] = useState(1)
    const [output, setOutput] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function conversionFetch() {
            setIsLoading(true)
            const res = await fetch(
                `https://api.frankfurter.app/latest?amount=${inputValue}&from=${from}&to=${to}`
            )
            const data = await res.json()

            setOutput(data.rates[to])
            setIsLoading(false)
        }

        if (from === to) return setOutput(inputValue)

        conversionFetch()
    }, [inputValue, from, to])

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(Number(e.target.value))}
                disabled={isLoading}
            />
            <select
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                disabled={isLoading}
            >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
            </select>
            <select
                value={to}
                onChange={(e) => setTo(e.target.value)}
                disabled={isLoading}
            >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
            </select>
            <p>
                {output} {to}
            </p>
        </div>
    )
}
