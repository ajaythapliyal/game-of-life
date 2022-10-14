export function seedGameOfLife(
    width: number,
    height: number
): Array<Array<boolean>> {
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

export function findNeighbour(
    { x, y }: { x: number; y: number },
    gameOfLife: boolean[][]
): boolean[] {
    const neighbours = []
    gameOfLife[x]?.[y - 1] && neighbours.push(gameOfLife[x][y - 1])
    gameOfLife[x]?.[y + 1] && neighbours.push(gameOfLife[x][y + 1])
    gameOfLife[x - 1]?.[y] && neighbours.push(gameOfLife[x - 1][y])
    gameOfLife[x + 1]?.[y] && neighbours.push(gameOfLife[x + 1][y])
    gameOfLife[x + 1]?.[y + 1] && neighbours.push(gameOfLife[x + 1][y + 1])
    gameOfLife[x + 1]?.[y - 1] && neighbours.push(gameOfLife[x + 1][y - 1])
    gameOfLife[x - 1]?.[y + 1] && neighbours.push(gameOfLife[x - 1][y + 1])
    gameOfLife[x - 1]?.[y - 1] && neighbours.push(gameOfLife[x - 1][y - 1])
    return neighbours
}

export function willStayAlive(
    isAlive: boolean,
    neighbours: boolean[]
): boolean {
    const aliveNeighbours = neighbours.filter((neighbour) => neighbour)
    if (isAlive) {
        return (aliveNeighbours.length === 2 || aliveNeighbours.length === 3) ? true : false
    } else {
        return aliveNeighbours.length === 3 ? true : false
    }
}
