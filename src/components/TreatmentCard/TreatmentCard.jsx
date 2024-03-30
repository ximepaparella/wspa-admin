import React from 'react'

const TreatmentCard = ({title, price,duration, giftLinkId, description, aditionals}) => {
  return (
    <div className="mod-treatment hlp-bg-third --simple">
    <div className="header">
        <h2>REFLEXOLOGÍA 25</h2>
        <div className="com-price">
            <h5>$22.000.-</h5>
        </div>
    </div>
    <div className="body">
        <p>
            Técnica milenaria con fundamentos de la medicina tradicional china.Este masaje se realiza en
            todo el pie estimulando las terminales nerviosas y los canales energéticos de todo el cuerpo
            buscando equilibrar el balance de los 5 elementos(madera, tierra, fuego, metal y
            agua).Ejerciendo presión en puntos específicos se logra desbloquear la tensión y dolor. ** Este
            tratamiento se focaliza en todo el pie.
        </p>
        <div className="com-actions">
            <a href="http://wyndhamnordelta.giftsandvouchers.com/?seccion=detalles&id=161" target="_blank"
                className="com-button">REGALAR</a>
        </div>
    </div>
</div>
  )
}

export default TreatmentCard