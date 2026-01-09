import styles from './Box.module.css';

function StyledBox() {
    return (
        <div className={styles.box} style={{ color: 'black'}}>
        Combined styles
        </div>
    );
}

export default StyledBox