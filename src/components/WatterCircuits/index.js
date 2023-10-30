import React from 'react'

import styles from './watterCircuits.module.scss'

const WatterCircuits = () => {
  return (
    <section className={styles['watter-circuits']}>
    <div className="com-title">
      <h3 className="page-title">CIRCUITO DE AGUAS</h3>
      <h4 className="pre-title">
        Martes de 11 a 20hs. Miércoles a domingos inclusive de 10 a
        21hs.
      </h4>
    </div>
    <div className={styles['hlp-border-left-before']}>
      <h6 className="sub-title">
        <strong>Precio para Huéspedes:</strong>
      </h6>
      <h6 className="sub-title">
        2 Hs <strong>$15.000.-</strong>
      </h6>
    </div>
    <div className={styles['hlp-border-left-before']}>
      <h6 className="sub-title">
        {" "}
        <strong>Para clientes que no se hospedan en Wyndham:</strong>
      </h6>
      <h6 className="sub-title">
        {" "}
        2hs <strong>$20.000.-</strong>
      </h6>
    </div>
  </section>
  )
}

export default WatterCircuits