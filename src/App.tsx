import { useEffect, useState } from 'react'
import './App.css'
import Cell from './cell/Cell'
import { findNeighbour, seedGameOfLife, willStayAlive } from './util'

function App() {
    const [gameOfLife, setgameOfLife] = useState(
        seedGameOfLife(
            Math.floor(document.documentElement.clientWidth / 20),
            Math.floor(document.documentElement.clientHeight / 20)
        )
    )

    useEffect(() => {
        setTimeout(() => {
            setgameOfLife(
                gameOfLife.map((gameOfLifeX, indexY) =>
                    gameOfLifeX.map((gameOfLifeY, indexX) => {
                        const neighbours = findNeighbour(
                            { x: indexY, y: indexX },
                            gameOfLife
                        )
                        return willStayAlive(gameOfLifeY, neighbours)
                    })
                )
            )
        }, 100)
    })

    return (
        <div className="App">
            {gameOfLife.map((gameOfLifeY, indexY) =>
                gameOfLifeY.map((gameOfLifeX, index) => (
                    <Cell
                        isAlive={gameOfLifeX}
                        key={`${indexY}${index}`}
                    ></Cell>
                ))
            )}
        </div>
    )
}

export default App
