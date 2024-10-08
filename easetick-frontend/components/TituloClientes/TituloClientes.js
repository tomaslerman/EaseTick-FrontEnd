import styles from './TituloClientes.module.css';

const TituloClientes = () => {
    return (
        <div className={styles.tableWrapper}>
            <div className={styles.tituloClientes}>
                <div className={styles.columna}>
                    <span>Nombre</span>
                </div>
                <div className={styles.columna}>
                    <span>Tipo</span>
                </div>
                <div className={styles.columna}>
                    <span>Email</span>
                </div>
            </div>
        </div>
    );
};

export default TituloClientes;