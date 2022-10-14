import styles from './Cell.module.css'

function Cell({ isAlive }: { isAlive: boolean }) {
    return (
        <div className={`${styles.cell} ${isAlive ? '' : styles.hide}`}></div>
    )
}

export default Cell
