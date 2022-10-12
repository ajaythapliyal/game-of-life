import { useState } from 'react'
import './App.css'

function App() {
    const { height, width } = useState({
        height: document.documentElement.clientHeight,
        width: document.documentElement.clientWidth,
    })[0]
    const [gofState, setgofState] = useState(
        seedGameOfLife(width / 20, height / 20)
    )

    return (
        <div className="App">
            {gofState.map((gofStateY) => (
                <div>
                    {gofStateY.map((gofstateX) => (
                        <span>ab</span>
                    ))}
                </div>
            ))}
        </div>
    )
}

function seedGameOfLife(width: number, height: number): Array<Array<boolean>> {
    const seedY: Array<Array<boolean>> = []
    for (let i = 0; i < height; i++) {
        const seedX: Array<boolean> = []
        for (let j = 0; j < width; j++) {
            seedX.push(Math.floor(Math.random() * 10) % 2 === 0)
        }
        seedY.push(seedX)
    }
    return seedY
}

export default App
