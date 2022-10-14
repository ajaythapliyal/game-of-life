
export function seedGameOfLife(width: number, height: number): Array<Array<boolean>> {
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