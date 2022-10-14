import { useState } from 'react'
import './App.css'
import Cell from './cell/Cell'
import { seedGameOfLife } from './util'

function App() {
    const { height, width } = useState({
        height: document.documentElement.clientHeight,
        width: document.documentElement.clientWidth,
    })[0]
    const [gofState, setGofState] = useState(
        seedGameOfLife(Math.floor(width / 30), Math.floor(height / 30))
    )

    return (
        <div className="App">
            {gofState.map((gofStateY, indexY) =>
                gofStateY.map((gofState, index) => (
                    <Cell isAlive={gofState} key={`${indexY}${index}`}></Cell>
                ))
            )}
        </div>
    )
}

export default App
