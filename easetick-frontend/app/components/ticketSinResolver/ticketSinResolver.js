import styles from './ticketSinResolver.module.css'
export default function ticketSinResolver({ props }) {
    return (
      <div className={styles.tableContainer}>
        <div className={styles.header}>
          <h1>Tickets sin resolver</h1>
          <a href="#">Ver detalles</a>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Prioridad</th>
            </tr>
          </thead>
          <tbody>
            {props.map((prop, index) => (
              <tr key={index}>
                <td>{prop.nombre.value}</td>
                <td>{prop.prioridad.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }