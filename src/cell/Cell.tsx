import styles from './Cell.module.css'

function Cell({ isAlive }: { isAlive: boolean }) {
    return (
        <div className={styles.cell} style={{ opacity: isAlive ? 1 : 0 }}></div>
    )
}

export default Cell
