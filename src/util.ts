export function seedGameOfLife(
    width: number,
    height: number
): Array<Array<boolean>> {
    const seedY: Array<Array<boolean>> = []
    for (let i = 0; i < height; i++) {
        const seedX: Array<boolean> = []
        for (let j = 0; j < width; j++) {
            // seedX.push(Math.floor(Math.random() * 10) % 2 === 0)
            seedX.push(Math.random() * 10 < 1)
        }
        seedY.push(seedX)
    }
    return seedY
}

export function findNeighbour(
    { x, y }: { x: number; y: number },
    gameOfLife: boolean[][]
): boolean[] {
    const neighbours: boolean[] = []
    const normalizedXPlus: number = gameOfLife[x + 1] !== undefined ? x + 1 : 0
    const normalizedXMinus: number =
        gameOfLife[x - 1] !== undefined ? x - 1 : gameOfLife.length - 1

    const normalizedYPlus: number =
        gameOfLife[x][y + 1] !== undefined ? y + 1 : 0
    const normalizedYMinus: number =
        gameOfLife[x][y - 1] !== undefined ? y - 1 : gameOfLife[x].length - 1

    neighbours.push(gameOfLife[x][normalizedYMinus])
    neighbours.push(gameOfLife[x][normalizedYPlus])
    neighbours.push(gameOfLife[normalizedXMinus][y])
    neighbours.push(gameOfLife[normalizedXPlus][y])
    neighbours.push(gameOfLife[normalizedXPlus][normalizedYPlus])
    neighbours.push(gameOfLife[normalizedXPlus][normalizedYMinus])
    neighbours.push(gameOfLife[normalizedXMinus][normalizedYPlus])
    neighbours.push(gameOfLife[normalizedXMinus][normalizedYMinus])
    return neighbours
}

export function willStayAlive(
    isAlive: boolean,
    neighbours: boolean[]
): boolean {
    const aliveNeighbours = neighbours.filter((neighbour) => neighbour === true)
    if (isAlive) {
        return aliveNeighbours.length === 2 || aliveNeighbours.length === 3
            ? true
            : false
    } else {
        return aliveNeighbours.length === 3 ? true : false
    }
}
